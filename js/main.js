/* TechAura — JavaScript léger, sans bibliothèque. */
'use strict';
document.documentElement.classList.add('js');

// Menu mobile accessible.
const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#main-navigation');
if (menuToggle && nav) {
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 820) setMenu(false); });
}

// Apparition discrète des éléments, désactivée pour les personnes qui préfèrent moins d'animations.
const animated = document.querySelectorAll('.fade-in');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  animated.forEach((el) => observer.observe(el));
} else {
  animated.forEach((el) => el.classList.add('is-visible'));
}

// Filtres de tarifs.
const filters = document.querySelectorAll('[data-filter]');
const priceCards = document.querySelectorAll('[data-category]');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    priceCards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

// Questions fréquentes (accordéon).
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    if (answer) answer.hidden = open;
  });
});

// Préselection de la prestation depuis la page Tarifs.
const serviceSelect = document.querySelector('#service');
if (serviceSelect) {
  const choices = {
    montage: 'Montage d’un PC',
    installation: 'Installation et configuration',
    maintenance: 'Maintenance / optimisation'
  };
  const selected = new URLSearchParams(window.location.search).get('service');
  if (selected && choices[selected]) serviceSelect.value = choices[selected];
}

// Formulaire de démonstration : construit un e-mail, sans serveur ni collecte des données.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const values = new FormData(contactForm);
    const name = String(values.get('nom') || '').trim();
    const email = String(values.get('email') || '').trim();
    const service = String(values.get('service') || '').trim();
    const budget = String(values.get('budget') || '').trim();
    const message = String(values.get('message') || '').trim();
    const subject = `Demande TechAura — ${service}`;
    const body = [
      `Bonjour TechAura,`, '',
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Prestation : ${service}`,
      budget ? `Budget : ${budget}` : '',
      '', 'Message :', message, '', 'Cordialement,'
    ].filter((part) => part !== undefined).join('\n');
    const status = document.querySelector('#form-status');
    if (status) status.textContent = 'Votre logiciel de messagerie va s’ouvrir avec un brouillon prérempli. Vérifiez l’adresse destinataire avant envoi (adresse fictive de démonstration).';
    window.location.href = `mailto:contact@techaura.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
