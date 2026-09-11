/* Reviewed rules for print edition 20. Applied before the first screen renders. */
function applyContentRevision20({games,helpLibrary,additionalStoryTracks,ghostStoryExpansions}) {
  const ch=games.zeitfehler.puzzles, gh=games.geisterhaus.puzzles, dr=games.drache.puzzles;
  ch[0].transmission='AUTHENTIZITÄTSCHECK // Die Gewichte aller echten Briefzeilen ergeben zusammen die Prüfsumme 85. Die Gewichtstabelle liegt dem Brief bei.';
  ch[1].answer='TORIMWESTEN'; ch[1].acceptedAnswers=['TORWESTEN'];ch[1].relatedPages=[2];
  ch[4].transmission='REISEBERICHT // Piko beginnt auf dem schwarzen START-Feld. Dieses Feld wird nicht mitgelesen. Er geht zwei Felder nach Norden, zwei nach Osten und ein Feld nach Süden. Notiert nach jedem Schritt den Buchstaben des betretenen Feldes.';
  ch[5].beat='Am Ausgang wartet eine Greifin. Auf ihren Federn stehen sechs leere Felder. Die Begriffe auf der Wortleiter weisen auf einen gemeinsamen nächsten Schritt.';
  ch[10].beat='PORTAL reißt helle Löcher in die falsche Zeitlinie. Dahinter liegen zwei fast identische Welten. Der Chronowurm hat ihre Zeichen verändert.';
  ch[11].beat='Der Chronowurm verliert seine Tarnung. Im Rückkanal versteckt er eine Arbeitsanweisung. Nova behält die Aufzeichnungen des Logikkerns griffbereit.';
  ch[12].relatedPages=[8];
  dr[1].relatedPages=[8];dr[6].relatedPages=[3,6,9,5,10,7];
  gh[2].transmission='PRÜFBILD // Die feinen Strukturen hängen vom Druck ab. Falls nötig, öffnet das digitale Prüfbild. Verändert dort den Betrachtungsabstand: Ein kleineres Bild entspricht einem größeren Abstand.';
  gh[3].hint='Ein echter Spiegel verändert das ganze Schriftbild. Haltet ihn seitlich neben die Nachricht, nicht neben einzelne Buchstaben.';
  gh[4].relatedPages=[1];gh[4].hint='Die Jahresziffern werden wiederholt benutzt. Macht die damalige Addition rückgängig, bevor ihr ins Alphabet übersetzt.';
  gh[5].hint='Vergleicht die kurzen und langen Spuren der Aufnahme mit dem alten Signalregister. Die großen Abstände trennen zusammengehörige Zeichen.';
  gh[8].relatedPages=[8];gh[8].hint='Die Küchenlösung ist hier keine Rechenzahl, sondern eine Reihenfolge von Probennummern. Danach folgen Operator und Alphabet.';
  gh[9].hint='Nur das umrahmte S ist der Start und wird ausgelassen. Jeder Pfeil bewegt euch genau ein Feld. Alle anderen Buchstaben können Ablenkungen sein.';
  gh[9].taunt='Ein ganzer Himmel voller Spuren – und ihr navigiert offenbar nach Bauchgefühl.';
  gh[9].transmission='STERNENROUTE // Startet am umrahmten S. Dieses Startfeld nicht mitlesen. Geht jeweils ein Feld: ↑ ↑ → → ↓ ↓ → ↑. Notiert jeden neu betretenen Buchstaben.';
  gh[10].taunt='Die Dachbodenmaus hat ihr Blatt schon gefaltet. Sie besitzt nicht einmal Daumen.';
  gh[10].hint='Faltet den rechten Flügel nach links, bedruckte Seiten nach innen. Gegen Licht müssen die Kreuze zusammenliegen. Beide Fragmente ergänzen sich; keines reicht allein.';
  gh[10].beat='Als die vier Ziffern bestätigt sind, springt die stehengebliebene Dachbodenuhr wieder an. Jeder Schlag verändert eine Erinnerung im Speisesaal. Das Haus versucht, seine eigene Vergangenheit zu fälschen.';
  gh[12].beat='Edna war nie die Gefahr. Ihre Erinnerung bewacht den Kamin, hinter dem etwas anderes eingeschlossen ist. Im Archiv wartet eine Lochmaske auf die Nachricht vom Anfang.';
  gh[13].hint='Die ganze Seite 14 bleibt aufrecht über Seite 2 liegen. Richtet die Außenkanten der beiden Blätter aus. Nur die fünf Fenster werden ausgeschnitten.';
  gh[14].beat='Die Kerzen entzünden sich ohne Flamme. Ednas Schatten löst sich von der Wand. Mara hält ihren wiedergefundenen Namen auf dem Display fest und liest den letzten Befehl laut vor.';
  ghostStoryExpansions[14]=['Im Durchgang liegt die letzte Tagebuchseite. Ednas Name hat dem Haus die richtige Stimme zurückgegeben. Nun fehlt nur der Öffnungsbefehl, den die Familie im ersten Blatt der Akte verborgen hat.'];
  helpLibrary.demo[1].hint='Die vier Absätze des Logbuchs gehören zusammen. Betrachtet bei jedem Absatz dieselbe Stelle.';
  helpLibrary.drache[3].taunt='Vier Truhen, vier Wächter – und ihr bewacht gerade nur eure Ratlosigkeit.';
  helpLibrary.drache[4].hint='Jedes Symbol hat einen festen Zahlenwert. Löst zuerst die drei Gleichungen. Übersetzt die Werte erst danach in der verlangten Reihenfolge.';
  helpLibrary.drache[5]={taunt:'Die Bergziegen haben den Ausgang bereits erreicht. Mit Hufen.',hint:'S und Z sind nur Start und Ziel. Folgt offenen Durchgängen, nie durch Mauern. Nicht jeder Wegstein liegt auf der richtigen Route.'};
  helpLibrary.zeitfehler[0].hint='Die Prüfsumme lässt sich aus den Gewichten aufbauen. Beginnt mit dem größten noch passenden Gewicht; ein Gewicht darf nicht doppelt vorkommen.';
  helpLibrary.zeitfehler[6].hint='Löst die sechs Definitionen unabhängig voneinander. Lest anschließend die grauen Felder von oben nach unten.';
  helpLibrary.zeitfehler[7].hint='Rechts nach links falten, Druckseiten nach innen. Beide unvollständigen Spuren müssen sich im Gegenlicht ergänzen.';
  helpLibrary.zeitfehler[9].taunt='Das Alphabet wartet geduldig. Der Chronowurm tut es nicht.';
  helpLibrary.zeitfehler[11].taunt='Der Chronowurm hofft, dass ihr beim Vergleichen blinzelt.';
  helpLibrary.zeitfehler[12].hint='Im Rückkanal steht eine Anweisung, keine fertige Nummer. Euer früheres Logikraster liefert die drei Auswahlpositionen.';
  additionalStoryTracks.zeitfehler[3].paragraphs=additionalStoryTracks.zeitfehler[3].paragraphs.map(t=>t.replace('Pikós','Pikos'));
  // Correct spelling and accidental next-puzzle spoilers across story extensions.
  for(const tracks of Object.values(additionalStoryTracks)) for(const track of Object.values(tracks)) {
    if(track.paragraphs)track.paragraphs=track.paragraphs.map(t=>t.replace(/sieben (gelösten )?Siegel/g,(_,middle)=>`sechs ${middle||''}Siegel`));
  }
  const walkthroughs={
    demo:[
      ['Die Rechnungen von oben nach unten lösen: 2+2=4; 4×2=8; 6−4=2; 3+4=7.','Ergebnisse in dieser Reihenfolge zusammensetzen: 4827.'],
      ['Die Anfangsbuchstaben der vier Logbuchabsätze lesen: M, O, N, D.','Das Lösungswort lautet MOND.'],
      ['Die verschlüsselte Nachricht lautet OHXFKWWXUP. Jeden Buchstaben im Alphabet um drei Stellen zurücksetzen.','O→L, H→E, X→U, F→C, K→H, W→T, W→T, X→U, U→R, P→M: LEUCHTTURM.']
    ],
    drache:[
      ['Auf der Sternenkarte die Koordinaten B2, D4, A5, E1 und C3 in dieser Reihenfolge lesen.','Die Felder ergeben D R A C O. Siegel F aufbewahren.'],
      ['Jede Rune auf Seite 6 mit dem Alphabet auf Seite 8 vergleichen.','Die fünf Zeichen ergeben F E U E R. Siegel Y aufbewahren.'],
      ['Archivtafel A (Seite 4) und B (Seite 9) vergleichen. Verändert sind das erste, dritte, fünfte, siebte und neunte Ei.','Ihre Nummern in Leserichtung ergeben 2 7 4 9 1. Siegel R aufbewahren.'],
      ['Für jede Truhe prüfen, wie viele Aussagen wahr wären: GOLD=1, SILBER=2, RUBIN=2, OBSIDIAN=2.','Nur GOLD erfüllt „genau eine wahre Aussage“. Siegel I aufbewahren.'],
      ['Zweimal EI ergibt 14, also EI=7. KLAUE+EI=12, also KLAUE=5. FLAMME+KLAUE=9, also FLAMME=4.','Reihenfolge EI–FLAMME–KLAUE: 7,4,5. Die Windrose übersetzt diese Werte in O,S,T. Siegel O aufbewahren.'],
      ['Im Labyrinth von S (Westtor) nach Z (Kristallhöhe) gehen. Geschlossene Linien sind Mauern.','Die Buchstaben auf dem richtigen Weg lauten N,E,S,T. S und Z der Start-/Zielfelder zählen nicht. Siegel N aufbewahren.'],
      ['Die Siegel der besuchten Seiten 3,6,9,5,10,7 in genau dieser Reihenfolge lesen.','F,Y,R,I,O,N ergibt FYRION. Danach gehört Seite 12 zum Finale.']
    ],
    zeitfehler:[
      ['Prüfsumme 85 aus den Gewichten bilden: 64+16+4+1. Das wählt die Zeilen 2,4,6,8.','Ihre Anfangsbuchstaben: Rasch, Als, Bevor, Endlich → RABE.'],
      ['8:9 = Tor; 3:6 = im; 3:7 = Westen. Gezählt werden Wörter in den nummerierten Briefzeilen, nicht optische Zeilenumbrüche.','Zusammen: TOR IM WESTEN. TORIMWESTEN wird akzeptiert; die alte Kurzform TORWESTEN ebenfalls.'],
      ['Die gesamte Zeichenfolge von rechts nach links lesen: 042 IST DIE NUMMER.','Nur die dreistellige Zahl eingeben: 042. Die führende Null gehört dazu.'],
      ['Das 9×9-Sudoku vervollständigen. In jeder Zeile, Spalte und jedem 3×3-Block müssen 1 bis 9 genau einmal vorkommen.','Die markierten Felder ergeben A=2, B=2, C=1, D=5. Eingabe 2215; Werte für Rätsel 13 aufbewahren.'],
      ['Am schwarzen START-Feld beginnen; es wird nicht mitgelesen.','Nord, Nord, Ost, Ost, Süd führt über E,I,C,H,E. Eingabe EICHE.'],
      ['Im Labyrinth den offenen Weg von S nach Z verfolgen, ohne eine Wand zu kreuzen.','Die Buchstaben unterwegs ergeben P,I,X,E,L. Start- und Zielmarke nicht mitlesen.'],
      ['Definitionen: GREIF, RABE, WALD, ZEIT, EICHE, NORD. ZEIT wird in Sekunden gemessen.','Graue Felder: 5. Buchstabe, 2., 3., 4., 1., 1. → FALTEN.'],
      ['Den rechten Flügel nach links falten; bedruckte Seiten liegen innen. Oben bleibt oben.','Durch die blanke Rückseite des rechten Flügels gegen Licht schauen und die Kreuze ausrichten. Beide Spuren ergeben 2718.'],
      ['Karten über gleiche Kantenmarken verbinden: START→A→B→C→D→E→END.','Buchstabenfolge G,R,Punkt,E,I,F; Punkt auslassen → GREIF.'],
      ['Nur Zeile A übersetzen: 02=B, 25=Y, 20=T, 05=E.','BYTE eingeben. Zeilen B und C für Rätsel 14 aufbewahren.'],
      ['Sechs Fenster von Seite 13 ausschneiden und die Seite deckungsgleich auf Seite 12 legen. Beide müssen gleich groß gedruckt sein.','Fenster von oben nach unten lesen: P,O,R,T,A,L → PORTAL.'],
      ['Zeichen zählen, nicht Gegenstände: Stern *→+, Jahreszahl 7→8, Fenster [→( und ]→), Schrägstrich in Zeile 5, Gesicht ^→o, Mitte der drei Gleichheitszeichen =→−, letzter Schrägstrich in Zeile 9.','Das sind acht einzelne Zeichenänderungen. Eingabe 8.'],
      ['Die beiden rückwärts geschriebenen Sätze weisen auf die markierten Sudokuwerte A,B,C. Diese sind 2,2,1.','Aus Reihe A die zweite Ziffer (6), aus B die zweite (4), aus C die erste (1) auswählen: 641.'],
      ['Zeile C lautet M M E B. Operatoren der Zeile B sind +1,+2,−1,+3.','Positionsweise anwenden: M→N, M→O, E→D, B→E. Eingabe NODE.'],
      ['Das Titelblatt um 180° drehen: INDEX 31415.','3. Buchstabe von ERROR=R, 1. von ECHO=E, 4. von BITS=S, 1. von EPOCH=E, 5. von SHIFT=T. Eingabe RESET.']
    ],
    geisterhaus:[
      ['Die Anfänge der fünf Sätze auf Seite 2 lesen: Als, Mein, Selbst, Eine, Links.','Das ergibt AMSEL.'],
      ['Die sieben Foyerzeichen vom tiefsten zum höchsten Fundort ordnen: ○,^,□,+,+,□,×.','Mit dem Schlüssel auf Seite 3 übersetzen: T,R,E,P,P,E,N → TREPPEN. Die Bildhilfe zeigt bei Bedarf die Fundorte.'],
      ['Das Streifenbild aus größerem Abstand oder verkleinert ansehen. Die feinen Linien verschmelzen, die breite Zahl bleibt.','Die Zahl ist 7. Bei ungünstigem Druck das digitale Prüfbild verwenden.'],
      ['Die vollständige Nachricht in einem Spiegel betrachten: ÖFFNE DEN SCHRANK.','Nur den Gegenstand eingeben: SCHRANK.'],
      ['Fundzahlen von unten nach oben: 20,24,18,14,8,13,21. Jahresziffern 1899 wiederholen: 1,8,9,9,1,8,9.','Subtrahieren ergibt 19,16,9,5,7,5,12. Mit A=1 bis Z=26 übersetzen: SPIEGEL.'],
      ['Kurze Balken entsprechen Punkten, lange Balken Strichen. Die fünf getrennten Gruppen lauten ... / . / -.-. / .... / ... .','Im Signalregister nachschlagen: S,E,C,H,S → SECHS.'],
      ['SALZ steht vor ASCHE, beide direkt nebeneinander. MOHN muss rechts von WACHS stehen; WACHS darf nicht neben SALZ stehen.','Einzige Reihenfolge: SALZ,ASCHE,WACHS,MOHN. Ihre Ziffern sind 3,1,4,2.'],
      ['Dem offenen Rohrnetz von S nach Z folgen, ohne eine Wand zu schneiden.','Die Buchstaben am Weg ergeben V,E,N,T,I,L. Start- und Zielmarke auslassen.'],
      ['Küchenfolge 3142 wählt Probe 3,1,4,2: 12^,01□,11○,28×.','Operatoren anwenden: 12−1=11, 1+0=1, 11+1=12, 28−8=20. Alphabet: K,A,L,T.'],
      ['Nur am umrahmten S beginnen; Start nicht notieren. Pfeile: hoch,hoch,rechts,rechts,runter,runter,rechts,hoch.','Die betretenen Buchstaben ergeben N,O,R,D,W,E,S,T. Eingabe NORDWEST.'],
      ['Rechten Flügel nach links falten; Druckseiten innen, obere Kanten deckungsgleich.','Gegen Licht von der blanken Rückseite schauen. Beide Teilbilder ergeben 1899.'],
      ['Veränderte Stellen: Vorhangband, Berggipfel im Bild, Uhrzeiger, Stuhlstrebe, Kerzen-Wachsring, Vasenband, Kamin-Schlussstein, Buchrücken im Vordergrund, gefaltete Briefecke.','Jede Stelle einmal zählen: 9. Bei der Kerze zählt das Versetzen des Rings als eine Änderung.'],
      ['Kantenfolge START→A→B→C→D→END herstellen.','Kartenbuchstaben E,D,Punkt,N,A ergeben ohne Punkt EDNA.'],
      ['Auf Seite 14 nur die fünf weißen Fenster ausschneiden. Das ganze Blatt auf Seite 2 legen und die Außenkanten ausrichten.','Die Fenster zeigen von oben nach unten K,A,M,I,N. Eingabe KAMIN.'],
      ['Titelblatt drehen: INDEX 2121312.','Buchstaben aus NEBEL[2], RUHE[1], ZWEI[2], ASCHE[1], LICHT[3], HAUS[1], SEELE[2] ergeben E,R,W,A,C,H,E.']
    ]
  };
  for(const [id,entry] of Object.entries(games)) {
    entry.printFile+='?v=20';
    entry.puzzles.forEach((p,i)=>{
      if(walkthroughs[id])p.solutionSteps=walkthroughs[id][i];
      if(p.downloadAsset)p.downloadAsset+='?v=20';
    });
  }
}
