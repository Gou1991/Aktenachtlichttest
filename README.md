# Escape-Archiv · Decoder v16

Statische, mobile Escape-Decoder-Web-App für vier Spiele. Keine Installation, kein Build-Schritt und kein Backend nötig.

## Installation

ZIP entpacken und den gesamten Inhalt in das bestehende GitHub-Repository hochladen. Vorhandene Dateien ersetzen lassen. `index.html` muss direkt im Hauptverzeichnis liegen; Cloudflare Pages veröffentlicht die Änderung anschließend automatisch.

## Spiele

- `?game=demo` – Akte Nachtlicht
- `?game=drache` – Der verschwundene Drache
- `?game=zeitfehler` – ZEITFEHLER // NULLWALD
- `?game=geisterhaus` – Das verlassene Geisterhaus

Das Geisterhaus besitzt 15 Stationen in zwei Stockwerken, eine längere Einleitung, Story-Fortschritt nach jeder richtigen Antwort, zwei in der App ladbare Prüfbilder sowie eine animierte Abschlusssequenz mit unheimlichem, synthetischem Erfolgssignal. Der Ton wird erst nach einer Eingabe aktiviert und kann im Finale wiederholt werden.

Jede Station in allen vier Spielen besitzt eine freiwillige kleine Hilfe. Vor dem Öffnen erscheint eine Warnung; danach folgen ein thematisch passender frecher Kommentar und ein Hinweis, der die Lösung nicht direkt verrät.

Bei jedem Rätsel lässt sich die benötigte Druckseite nach einer zum Spiel passenden Sicherheitsabfrage direkt in der App öffnen, stufenweise vergrößern und auf dem Gerät speichern. Seitenübergreifende Rätsel bieten automatisch auch die benötigten Vergleichsseiten an. Hinweise auf das nächste Ziel erscheinen beim Geisterhaus erst nach einer richtigen Lösung.

Die Hilfe und Großansicht sind als gemeinsame Decoder-Funktionen aufgebaut. Neue Spiele erhalten automatisch eine Standardhilfe; für eine vollständig angepasste Version werden nur ein Themenprofil, ein Druckseiten-Pfad und bei Bedarf einzelne Rätselhinweise ergänzt.

In Version 16 passen sich die sieben versteckten Zeichen im Foyer automatisch an die Helligkeit ihres jeweiligen Bildbereichs an. Ohne auffällige Kontur wirken sie wie Bestandteile der Bleistiftzeichnung und werden erst beim bewussten Absuchen erkennbar.

## Drucksatz

Der separate Drucksatz `Das-verlassene-Geisterhaus-15-Seiten.zip` enthält 15 nummerierte A4-PNG-Dateien. Seite 12 wird gefaltet, Seite 13 ausgeschnitten und Seite 14 als Lochmaske auf Seite 2 gelegt. Die Seiten 2 und 14 unbedingt mit identischer Einstellung bei 100 % / tatsächlicher Größe drucken.

## Sicherheitsfach

Auf der Hauptübersicht stehen die Druckdateien aller vier Spiele als lokale Downloads bereit. Der Notfallcode `****` öffnet die schrittweise Lösungsanzeige für die Spielleitung. Die Anzeige wird direkt aus den Rätseldaten aufgebaut und übernimmt dadurch auch später ergänzte Spiele und Lösungen automatisch.
