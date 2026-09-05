# Escape Decoder v1

Statische Demo-Web-App für Escape-Spiele. Keine Installation und kein Backend nötig.

## Testen
`index.html` im Browser öffnen. Für zuverlässiges lokales Testen kann auch ein einfacher lokaler Webserver verwendet werden.

## Direkter Spieleinstieg
Nach dem Hosting kann ein QR-Code z. B. direkt auf `https://DEINE-SEITE.pages.dev/?game=demo` zeigen. Zweite Demo: `?game=lab`.

## Neues Spiel hinzufügen
In `app.js` im Objekt `games` eine weitere Spielkonfiguration ergänzen. Jedes Rätsel besitzt `type`, `title`, `prompt`, `answer` und `hint`.

## Aktuell enthalten
- responsive Handy-Oberfläche
- Spielauswahl
- direkter Einstieg über `?game=...`
- Theme-Farbe je Spiel
- Zahlencode
- Lösungswort
- Caesar-Demo
- Hinweise
- automatische Rätsel-Fortschaltung

## Später sinnvoll
Konfigurationen in eigene JSON-Dateien auslagern, echte Decoder-Werkzeuge ergänzen, Audio/Timer/QR-Funktionen, optionale Spielstände und serverseitige Lösungsprüfung.
