# Dawid Jankowski — Portfolio / CV

Statyczna strona z portfolio i CV (.NET / Python Developer). Czysty HTML, CSS i JS, bez żadnych zależności ani kroku budowania.

## Funkcje
- Wersja polska i angielska (przycisk PL/EN; link do wersji angielskiej: `?lang=en`). Tłumaczenia są w `i18n.js`.
- Ciemny i jasny motyw (wybór jest zapamiętywany)
- Responsywny układ z menu mobilnym
- Przycisk „Pobierz / drukuj CV”: wersja do druku jest sformatowana jako CV (Zapisz jako PDF)

## Uruchomienie lokalnie
Otwórz plik `index.html` w przeglądarce.

## Publikacja na GitHub Pages
1. Utwórz repozytorium `DawidJankowski00.github.io` (wtedy strona będzie pod `https://DawidJankowski00.github.io`)
   albo dowolne inne (wtedy pod `https://DawidJankowski00.github.io/<nazwa-repo>`).
2. Wypchnij pliki:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/DawidJankowski00/DawidJankowski00.github.io.git
   git push -u origin main
   ```
3. W repozytorium: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
