// Every puzzle uses the same safe reveal flow. New games can provide hint2 directly.
const secondHints21 = {
 demo: [
 'Jede Rechnung ergibt genau eine Ziffer. Hängt diese vier Ziffern aneinander; addiert nicht die Ergebnisse miteinander.',
 'Lest nur den ersten Buchstaben jedes der vier Absätze, von oben nach unten. Der restliche Text ist für diesen Schritt nicht nötig.',
 'Geht für jeden verschlüsselten Buchstaben drei Positionen im Alphabet zurück. Aus O wird beispielsweise L. Behaltet die Reihenfolge bei.'
 ],
 drache: [
 'Der Buchstabe einer Koordinate bestimmt die Spalte, die Zahl die Zeile. Sucht die fünf Felder in der angegebenen Reihenfolge auf.',
 'Legt die Runenfolge neben den Schlüssel auf Seite 8. Ersetzt jede Rune einzeln; dreht oder sortiert die Folge nicht um.',
 'Vergleicht jedes Ei mit seinem Gegenstück auf der anderen Seite. Schreibt nur die Nummern der veränderten Eier in Leserichtung auf.',
 'Nehmt nacheinander jedes mögliche Versteck an. Zählt dann wahre Aussagen: Nur bei genau einer wahren Aussage darf dieses Versteck bleiben.',
 'Löst zuerst die Gleichung mit zwei gleichen Symbolen. Setzt diesen Wert in die nächste Gleichung ein. Erst danach nutzt ihr die Buchstabentabelle.',
 'Zeichnet eine durchgehende Verbindung zwischen S und Z ohne Wände zu überqueren. Lest ausschließlich die Buchstaben auf diesem Weg; S und Z sind Markierungen.',
 'Die Seitenzahlen sind keine Sortieranweisung. Notiert die Siegel in der Reihenfolge, in der ihr die zugehörigen Stationen tatsächlich besucht habt.'
 ],
 zeitfehler: [
 'Stellt die Prüfsumme aus den gedruckten Gewichten zusammen, jedes höchstens einmal. Nur die dazugehörigen Sätze liefern einen Anfangsbuchstaben.',
 'Eine Angabe wie 8:9 meint das neunte Wort des achten nummerierten Satzes. Zählt keine Bildschirmzeilen; sie hängen von der Anzeigegröße ab.',
 'Kehrt die komplette Zeichenfolge um, nicht nur die Reihenfolge einzelner Wörter. Auch die Ziffern wechseln dadurch ihre Reihenfolge.',
 'Füllt das Sudoku ohne Wiederholung in Zeile, Spalte und 3×3-Block. Lest zum Schluss nur die vier markierten Felder in der Reihenfolge A, B, C, D.',
 'Beginnt am schwarzen START-Feld. Führt jede Bewegungsangabe vollständig aus, bevor ihr die nächste verwendet. START liefert keinen Buchstaben.',
 'S und Z sind Eingang und Ausgang. Probiert Abzweige mit Bleistift aus und streicht Sackgassen. Nur Zeichen auf der vollständigen Verbindung zählen.',
 'Bestimmt jeweils das gesuchte Wort und wählt daraus die angegebene Buchstabenposition. Die Position zählt innerhalb dieses Wortes, nicht innerhalb der Geschichte.',
 'Faltet die rechte Hälfte nach links, mit dem Druck innen. Betrachtet die unbedruckte Rückseite gegen Licht: Erst die überlagerten Striche ergeben vollständige Ziffern.',
 'Das erste Teil trägt START. Sucht jeweils die identische Marke für die nächste Kante. Lest die großen Buchstaben; ein Punkt ist kein Buchstabe.',
 'Verwendet ausschließlich die Zahlen aus Zeile A. Jede Zahl steht für ihre Position im Alphabet: 01 für A, 02 für B und so weiter.',
 'Schneidet nur die vorgesehenen Fenster aus. Legt Seite 13 passgenau auf Seite 12; beide müssen mit gleicher Skalierung gedruckt sein. Lest die offenen Fenster in Leserichtung.',
 'Zählt veränderte einzelne Zeichen, nicht veränderte Gegenstände. Zwei veränderte Klammern am selben Fenster zählen also als zwei Unterschiede.',
 'Entziffert zunächst die rückwärts geschriebene Anweisung. Die Sudoku-Felder A2, B2 und C1 liefern Positionen für die drei Zahlenreihen, keine fertige Zahl zum Abschreiben.',
 'Ordnet jedem Operator seine Verschiebung aus dem Schlüssel auf Seite 3 zu. Wendet die Verschiebungen einzeln auf die Buchstaben derselben Position an.',
 'Auf dem umgedrehten Titelblatt findet ihr die Indexfolge. Ihre erste Ziffer wählt einen Buchstaben aus dem ersten Wort, die zweite aus dem zweiten und so weiter.'
 ],
 geisterhaus: [
 'Die fünf Sätze tragen ihre Nachricht am Anfang. Übernehmt von jedem Satz genau den ersten Buchstaben, ohne die Wörter neu zu ordnen.',
 'Sammelt die sieben versteckten Zeichen von unten nach oben. Übersetzt sie danach mit dem Schlüssel auf Seite 3. Die nächste Hilfestufe zeigt das markierte Bild ausdrücklich als Spoiler.',
 'Verkleinert die Gesamtansicht oder geht etwas vom Blatt weg und schaut leicht unscharf. Einzelne feine Striche lenken ab; die großen Hell-Dunkel-Flächen sind entscheidend.',
 'Haltet einen Spiegel seitlich neben die Schrift. Entziffert den Satz vollständig, gebt aber nur den bezeichneten Gegenstand ein.',
 'Lest die Zahlen von unten nach oben. Zieht die Ziffern des Jahres wiederholt einzeln ab: erste Ziffer von erster Zahl, zweite von zweiter usw. Wandelt erst danach in Buchstaben um.',
 'Kurze Balken stehen für Punkte, lange für Striche. Trennt an den gedruckten Gruppenabständen und übersetzt jede Gruppe mit der Zeichentabelle.',
 'Legt vier Plätze an und tragt die Stoffe nach den Hinweisen ein. Prüft auch die Nachbarschaften. Erst die fertige Reihenfolge liefert die Ziffern.',
 'Verfolgt den durchgehenden Gang zum Ausgang. Buchstaben in abgetrennten Kammern oder Sackgassen gehören nicht zur Antwort.',
 'Der Code aus der Küche bestimmt die Reihenfolge der Proben. Rechnet jede Probe zuerst mit ihrem eigenen Vorzeichen aus; übersetzt die Ergebnisse anschließend mit A=1.',
 'Das eingerahmte S markiert den Start, nicht den ersten Lösungsbuchstaben. Lest jeweils nach dem ausgeführten Pfeilschritt den Buchstaben des erreichten Feldes.',
 'Der Druck muss nach dem Falten innen liegen. Seht durch die unbedruckte Rückseite gegen eine Lichtquelle und richtet die Markierungen exakt aufeinander aus.',
 'Vergleicht feste Bildbereiche einzeln. Ein verschobener Gegenstand zählt einmal, nicht am alten und neuen Ort getrennt. Schreibt euch die gefundenen Änderungen auf.',
 'START legt den Anfang fest; gleiche Kantenmarken führen von Teil zu Teil. Die großen Buchstaben ergeben den Namen, der einzelne Punkt wird ausgelassen.',
 'Legt die gesamte ausgeschnittene Maske auf Seite 2, ohne sie zu vergrößern oder zu drehen. Die fünf weißen Fenster lassen die relevanten Buchstaben sichtbar.',
 'Jede Ziffer des Titelblatt-Codes gehört zum Wort derselben Zeile. Wählt jeweils nur den Buchstaben an dieser Position aus und hängt alle sieben aneinander.'
 ],
 menue: [
 'Rechnet jede Position mit Menge × Einzelpreis nach. Gesucht sind die Kennungen der falschen Positionen, nicht die Beträge oder die Differenzen.',
 'Legt fünf feste Plätze an. Tragt zunächst sichere Positionen und direkte Nachbarschaften ein. Verknüpft danach die Gewürze mit den Personen.',
 'Nutzt neben Zeilen und Spalten auch jeden 3×3-Block. Die Antwort wird erst nach dem Lösen aus den Feldern A, B, C und D gelesen.',
 'Drückt K mithilfe der ersten Gleichung durch M aus und A mithilfe der zweiten. Setzt beides in die dritte ein. Schreibt die drei Werte zweistellig in der verlangten Reihenfolge.',
 'Die Zahlen am Rand geben zusammenhängende Gruppen an; zwischen zwei Gruppen bleibt mindestens ein freies Feld. Zählt am Ende die schwarzen Felder der Zeilen 1, 3 und 7.',
 'Prüft, wie oft ihr die Temperatur wechseln müsst. Ruhezeiten können mit dem Backen eines anderen Blechs überlappen; nach dem letzten Blech braucht ihr trotzdem dessen Ruhezeit.',
 'Entschlüsselt erst die Schrittlängen mit dem Sudoku-Code. Beginnt bei F7 und führt die vier Wege nacheinander aus. Gesucht ist das erreichte Kartenfeld.',
 'Die Stationsreihenfolge bestimmt die Gläserfolge. Der zuvor berechnete Wert K ist anschließend die Rückverschiebung im Alphabet. Verwendet ihn auf jeden Buchstaben.',
 'Beginnt mit der passenden Randmarkierung und verbindet jeweils die gleichen Kanten. Alle Banderolen bleiben auf gleicher Höhe; dreht sie nicht.',
 'Rechnet zuerst die Reserve zur Gästezahl hinzu. Eine Rezeptmenge reicht für zwei Portionen. Vergleicht den Gesamtbedarf jeder Zutat mit ihrem Vorrat.',
 'Teilt die Geheimschrift in gleich lange Dreiergruppen. Die Sudoku-Ziffern bestimmen die Reihenfolge der Spalten beim Füllen. Gelesen wird danach zeilenweise; nur abschließende X sind Füllzeichen.',
 'Verwendet eure früheren Antworten als Auswahlwerte für die fünf Stationen. Jede Station liefert genau einen Buchstaben; zusammengesetzt entsteht der letzte Treffpunkt.'
 ]
};

function progressiveHelpMarkup(p, helper) {
 return `<div class="hint-zone"><button id="openHint" class="hint-button" type="button">☠ Hilfe &amp; Notfalllösung</button>
 <div id="hintWarning" class="hint-warning" hidden><strong>Wirklich Hilfe benutzen?</strong><p>Zuerst bekommt ihr einen kleinen Tipp, danach auf Wunsch einen zweiten. Die vollständige Lösung bleibt bis zu einer weiteren Bestätigung verborgen.</p><div class="hint-actions"><button id="confirmHint" type="button">Ja, ersten Tipp zeigen</button><button id="cancelHint" class="secondary-action" type="button">Weitergrübeln</button></div></div>
 <div id="hintReveal" class="hint-reveal" hidden><strong>${helper.taunt}</strong><h3>Tipp 1 von 2</h3><p>${helper.hint}</p><button id="nextHint" type="button">Zweiten Tipp zeigen</button>
 <div id="secondHint" hidden><h3>Tipp 2 von 2</h3><p>${p.hint2||secondHints21[gameId]?.[step]||'Prüft die Leserichtung, Reihenfolge und das geforderte Antwortformat. Verwendet nur die für dieses Rätsel genannten Zeichen und Seiten.'}</p><button id="requestSolution" type="button">Notfalllösung anfordern</button></div>
 <div id="solutionWarning" class="hint-warning" hidden><strong>Jetzt kommt die vollständige Lösung!</strong><p>Wollt ihr wirklich auflösen? Mit dem nächsten Klick seht ihr die Antwort und den Lösungsweg.${helper.image?' Auch die versteckten Zeichen werden deutlich markiert. Selbst die Geister hätten euch noch eine Suchrunde zugetraut.':''} Ihr bleibt im aktuellen Rätsel.</p><div class="hint-actions"><button id="confirmSolution" type="button">Ja, vollständige Lösung zeigen</button><button id="cancelSolution" class="secondary-action" type="button">Nein, selbst weiterlösen</button></div></div>
 <div id="localSolution" hidden aria-live="polite"></div></div></div>`;
}

function bindProgressiveHelp(p, helper) {
 $('openHint').onclick=()=>{$('openHint').hidden=true;$('hintWarning').hidden=false;$('confirmHint').focus()};
 $('cancelHint').onclick=()=>{$('hintWarning').hidden=true;$('openHint').hidden=false;$('openHint').focus()};
 $('confirmHint').onclick=()=>{$('hintWarning').hidden=true;$('hintReveal').hidden=false;$('nextHint').focus()};
 $('nextHint').onclick=()=>{$('nextHint').hidden=true;$('secondHint').hidden=false;$('requestSolution').focus()};
 $('requestSolution').onclick=()=>{$('requestSolution').hidden=true;$('solutionWarning').hidden=false;$('cancelSolution').focus()};
 $('cancelSolution').onclick=()=>{$('solutionWarning').hidden=true;$('requestSolution').hidden=false;$('requestSolution').focus()};
 $('confirmSolution').onclick=()=>{
  $('solutionWarning').hidden=true;
  $('localSolution').innerHTML=`<h3>Notfalllösung · aktuelles Rätsel</h3><div class="solution-answer is-revealed">${p.answer}</div><ol class="solution-walkthrough">${(p.solutionSteps||['Übertragt die angezeigte Antwort in das Lösungsfeld.']).map(s=>`<li>${s}</li>`).join('')}</ol>${helper.image?`<figure class="hint-image"><img src="${helper.image}" alt="${helper.imageAlt}">${helper.caption?`<figcaption>${helper.caption}</figcaption>`:''}</figure>`:''}<p>Ihr könnt die Antwort übernehmen und anschließend wie gewohnt prüfen. Euer Fortschritt bleibt erhalten.</p><button id="useSolution" type="button">Lösung ins Eingabefeld übernehmen</button>`;
  $('localSolution').hidden=false;
  $('useSolution').onclick=()=>{if(answerLocked)return;$('answer').value=p.answer;$('answer').focus();$('answer').scrollIntoView({block:'center',behavior:'smooth'})};
  $('useSolution').focus();
 };
}
