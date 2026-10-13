# Dawid Jankowski — Portfolio / CV

A static portfolio and CV website (.NET / Python Developer). Pure HTML, CSS, and JS; no dependencies or build step.

## Features
- Polish and English versions (PL/EN toggle; link to English version: `?lang=en`). Translations are located in `i18n.js`.
- Dark and light themes (selection is saved).
- Responsive layout with a mobile menu.
- "Download / Print CV" button: the print version is formatted as a CV (Save as PDF).

## Running locally
Open the `index.html` file in your browser.

## Publishing on GitHub Pages
1. Create a repository named `DawidJankowski00.github.io` (the site will be available at `https://DawidJankowski00.github.io`)
or any other name (the site will be available at `https://DawidJankowski00.github.io/<repo-name>`).
2. Push the files:
   ```bash
   git init
   git add . 
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/DawidJankowski00/DawidJankowski00.github.io.git
   git push -u origin main
   ```
3. In the repository: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.