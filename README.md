# TechAura — Site vitrine (projet scolaire)

Site vitrine statique, responsive et en français : HTML, CSS et un peu de JavaScript, sans framework.

## Ouvrir le site

1. Décompresser `TechAura-site-web.zip`.
2. Ouvrir le dossier `TechAura-site-web` dans Visual Studio Code.
3. Ouvrir `index.html` dans votre navigateur ou démarrer l'extension « Live Server ».

Aucune installation de dépendance n'est nécessaire. Les polices Orbitron et Inter sont chargées via Google Fonts quand une connexion Internet est disponible ; des polices système prennent le relais sinon.

## Pages

- `index.html` : accueil et présentation de l'entreprise
- `services.html` : description des prestations
- `tarifs.html` : tarifs avec filtres en JavaScript et FAQ
- `contact.html` : formulaire qui prépare un e-mail `mailto:`
- `css/style.css` : styles et responsivité
- `js/main.js` : menu mobile, effets subtils, filtres, FAQ et formulaire
- `assets/` : déclinaisons du logo TechAura, visuels, favicon

## Charte graphique

- Noir `#0E1115`
- Blanc `#FFFFFF`
- Violet électrique `#4C2CFC`
- Logo / titres : Orbitron (base de référence ; le lettrage du logo est un visuel personnalisé)
- Textes : Inter
- Slogan : **TechAura — On looksmaxx vos PC.**

Les images de marque et de PC sont reprises des visuels TechAura réalisés pour cet exercice. Les logos PNG ont été préparés sur fond transparent pour une meilleure intégration.

## À personnaliser avant publication

1. **Coordonnées** : `contact@techaura.fr` est une adresse d'exemple issue de la maquette, non vérifiée. Remplacer son occurrence dans les quatre pages et dans `js/main.js` par une adresse réelle.
2. **Tarifs** : montants fictifs indicatifs pour le devoir, à remplacer par vos vrais prix si vous créez une entreprise.
3. **Formulaire** : l'exemple n'envoie pas directement de données ; il ouvre l'application e-mail avec un message prérempli. Pour recevoir des messages sans logiciel de messagerie, ajouter plus tard un back-end ou un service de formulaires.
4. **Mentions légales / politique de confidentialité** : nécessaires à adapter pour une mise en ligne professionnelle réelle.

Aucun paiement, compte client ou stockage de données n'est intégré.
