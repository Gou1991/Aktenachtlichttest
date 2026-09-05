# Akte Nachtlicht · Escape Decoder v2

Statische, mobile Escape-Decoder-Web-App im nautischen Akten-Design. Keine Installation, kein Build-Schritt und kein Backend nötig.

## In das bestehende GitHub-Repository hochladen
ZIP entpacken und den gesamten Inhalt in das bestehende Repository hochladen. Die vorhandenen Dateien ersetzen lassen und die Änderung bestätigen. Cloudflare Pages veröffentlicht die neue Version automatisch. `index.html` muss direkt im Hauptverzeichnis liegen.

## Testen
`index.html` im Browser öffnen. Für zuverlässiges lokales Testen kann auch ein einfacher lokaler Webserver verwendet werden.

## Direkter Spieleinstieg
Der QR-Code für Akte Nachtlicht kann direkt auf `https://aktenachtlichttest.pages.dev/?game=demo` zeigen. Zweite Demo: `?game=lab`.

## Beibehaltene Testlösungen
- Akte Nachtlicht: `4827` → `MOND` → `LEUCHTTURM`
- Labor 47: `ENERGIE`

## Neues Spiel hinzufügen
In `app.js` im Objekt `games` eine weitere Spielkonfiguration ergänzen. Jedes Rätsel besitzt `type`, `title`, `prompt`, `answer` und `hint`.

## Aktuell enthalten
- responsive Handy-Oberfläche
- Spielauswahl
- direkter Einstieg über `?game=...`
- Akten-/Papieroptik, lokales Leuchtturm-Motiv, Messingakzente und rote Geheimstempel
- Theme-Farbe je Spiel
- Zahlencode
- Lösungswort
- Caesar-Demo
- Hinweise
- automatische Rätsel-Fortschaltung
- verbesserte Bedienung und sichere Abstände auf modernen Smartphones

## Technischer Hinweis
Die Schriften werden über Google Fonts geladen. Ohne Verbindung verwendet die App automatisch passende lokale Ersatzschriften. Das Hintergrundbild liegt lokal im Ordner `assets`.

## Später sinnvoll
Konfigurationen in eigene JSON-Dateien auslagern, echte Decoder-Werkzeuge ergänzen, Audio/Timer/QR-Funktionen, optionale Spielstände und serverseitige Lösungsprüfung.
