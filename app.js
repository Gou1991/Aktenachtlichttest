const games = {
  demo: {
    name: 'Akte Nachtlicht', menuLabel: 'Nautischer Kriminalfall',
    description: 'Ein erloschener Leuchtturm, alte Logbücher und eine Spur durch die Dunkelheit.',
    cover: 'assets/nachtlicht-lighthouse.png', printFile: 'downloads/akte-nachtlicht-druckbilder.zip', meta: ['3 Rätsel', 'ca. 60 Min.', 'Mittel'],
    caseNumber: 'NL–0047', classification: 'GEHEIM', theme: { accent: '#c29b54', mode: 'nachtlicht' },
    story: 'Drei Rätsel trennen euch von der Wahrheit. Beginnt mit der angegebenen Druckseite.',
    puzzles: [{ page: 4, answer: '4827', inputMode: 'numeric' }, { page: 5, answer: 'MOND' }, { page: 6, answer: 'LEUCHTTURM' }],
    finale: { kicker: 'Das Licht ist zurück', title: 'Ihr habt es geschafft!', text: 'Alle Rätsel sind gelöst und die Akte Nachtlicht ist abgeschlossen.', stamp: 'MISSION<br>ERFOLGREICH' }
  },
  drache: {
    name: 'Der verschwundene Drache', menuLabel: 'Königliche Drachenakte',
    description: 'Findet Fyrion, bevor die letzte Glut des Königreichs erlischt.',
    cover: 'assets/dragon-citadel.png', printFile: 'downloads/der-verschwundene-drache-druckbilder.zip', meta: ['7 Rätsel', '90–120 Min.', 'Anspruchsvoll'],
    caseNumber: 'DR–0712', classification: 'KÖNIGLICH', theme: { accent: '#d6a54a', mode: 'drache' },
    story: 'Folgt Fyrions Spur. Der Decoder nennt euch immer nur die nächste Seite.',
    puzzles: [{ page: 3, answer: 'DRACO' }, { page: 6, answer: 'FEUER' }, { page: '4 + 9', answer: '27491', inputMode: 'numeric', plural: true }, { page: 5, answer: 'GOLD' }, { page: 10, answer: 'OST' }, { page: 7, answer: 'NEST' }, { page: 11, answer: 'FYRION' }],
    finale: { kicker: 'Die letzte Glut erwacht', title: 'Fyrion antwortet!', text: 'Ihr habt den verschwundenen Drachen gefunden. Öffnet jetzt Seite 12 und entdeckt, welches Geheimnis er bewacht.', stamp: 'DRACHE<br>GEFUNDEN', image: 'assets/dragon-finale.png' }
  },
  zeitfehler: {
    name: 'ZEITFEHLER // NULLWALD', menuLabel: 'Chrono-Hackerakte',
    description: 'Eine Hackerin aus 2049, ein beschädigtes Jahr 1427 und Wesen zwischen Mythos und ASCII.',
    cover: 'assets/zeitfehler-cover.png', printFile: 'downloads/zeitfehler-nullwald-druckbilder.zip', meta: ['15 Rätsel', '120–150 Min.', 'Schwer'],
    caseNumber: 'ZX–1427', classification: 'ZEITKNOTEN', theme: { accent: '#e5e5e5', mode: 'zeitfehler' },
    story: 'Der Chronowurm überschreibt die Vergangenheit. Repariert den Zeitkern, bevor beide Welten verschwinden.',
    opening: [
      '2049 entdeckt die Sicherheitsforscherin Nova Kern eine Datei, die es nicht geben dürfte: NULLWALD_1427.arc. Als sie den Inhalt isoliert, öffnet sich kein Fenster auf ihrem Monitor — sondern eines mitten im Raum.',
      'Nova fällt in das Jahr 1427. Dort leben Joras, freundliche sattelrückige Waldläufer, neben Greifen, Mondhasen und Wesen, die nur aus Zeichen zu bestehen scheinen. Ein Chronowurm löscht ihre Geschichte Zeile für Zeile.',
      'Euer Decoder empfängt Novas Fragmente. Jede richtige Lösung stabilisiert einen Abschnitt der Zeit. Beginnt mit Seite 2 · Rätsel 1.'
    ],
    puzzles: [
      { page: 2, no: 1, answer: 'RABE', praise: 'Sauber extrahiert.', beat: 'Der Rabe trägt keinen Brief, sondern einen winzigen Speicherchip. Darauf blinkt eine Karte: Ein Tor im Westen antwortet auf Novas Signal.' },
      { page: 5, no: 2, answer: 'TORWESTEN', praise: 'Ihr erinnert euch an die richtigen Worte.', beat: 'Das Westtor öffnet sich einen Spalt. Ein Mondhase hält Nova einen zerbrochenen Spiegel hin. Darin läuft eine Nummer rückwärts.' },
      { page: 5, no: 3, answer: '042', inputMode: 'numeric', praise: 'Rückkanal erkannt.', beat: 'Kanal 042 verbindet euch mit Piko, dem kleinsten Jora. Er kennt einen alten Logikkern, der nur auf vollständig geordnete Zahlen reagiert.' },
      { page: 8, no: 4, answer: '2215', inputMode: 'numeric', praise: 'Der Logikkern ist stabil.', beat: 'Piko springt durch das flackernde Raster. Um ihm zu folgen, braucht ihr jetzt den Reisebericht aus dem Decoder und die Karte auf Seite 11.' },
      { page: 11, no: 5, answer: 'EICHE', praise: 'Perfekte Navigation.', beat: 'Unter der Eiche pulsiert ein Labyrinth wie eine Leiterplatte. Nova kann den Eingang sehen, doch nur eure Bleistiftspur findet den Ausgang.', transmission: 'REISEBERICHT // Piko startet am S-Feld. Zweimal folgt er dem Nordwind, zweimal der aufgehenden Sonne nach Osten und einmal hinab zum Fluss. Notiert die Zeichen jedes betretenen Feldes.' },
      { page: 11, no: 6, answer: 'PIXEL', praise: 'Der Datenpfad steht.', beat: 'Am Ausgang wartet eine Greifin. Auf ihren Federn stehen sechs leere Felder. Die Wörter müssen wie eine Leiter ineinandergreifen.' },
      { page: 4, no: 7, answer: 'FALTEN', praise: 'Ihr habt die Leiter geschlossen.', beat: 'Die Greifin legt ein Blatt vor eine Laterne. Manche Daten existieren nur, wenn Papier, Licht und Richtung zusammenarbeiten.' },
      { page: 6, no: 8, answer: '2718', inputMode: 'numeric', praise: 'Lichtsignal synchron.', beat: 'Vier Ziffern schalten Novas beschädigten Scanner frei. Er zeigt sechs Fragmente eines Wesens — aber ihre Reihenfolge wurde überschrieben.' },
      { page: 9, no: 9, answer: 'GREIF', praise: 'Fragmentdatei rekonstruiert.', beat: 'Die Greifin erkennt ihr Bild und gibt einen Zahlenstrom frei. Ein alter Systemschlüssel kann ihn in ein Wort übersetzen.' },
      { page: 10, no: 10, answer: 'BYTE', praise: 'Zahlenbus entschlüsselt.', beat: 'BYTE öffnet eine neue Speicherschicht. Nova warnt: Die beiden übrigen Zeilen auf Seite 10 werden später noch gebraucht. Jetzt erscheint ein Trägertext ohne Sinn.' },
      { page: 13, no: 11, answer: 'PORTAL', praise: 'Die Maske sitzt exakt.', beat: 'PORTAL reißt sechs helle Löcher in die falsche Zeitlinie. Dahinter liegen zwei fast identische Welten — nur acht Zeichen wurden manipuliert.' },
      { page: 7, no: 12, answer: '8', inputMode: 'numeric', praise: 'Alle acht Zeitfehler gefunden.', beat: 'Der Chronowurm verliert seine Tarnung und sendet eine letzte Nummer. Natürlich läuft auch sie in die falsche Richtung.' },
      { page: 7, no: 13, answer: '641', inputMode: 'numeric', praise: 'Richtung korrigiert.', beat: 'Nova erreicht den Mehrfachkernel. Drei Quellen sind vorhanden, doch ohne die richtige Reihenfolge bleibt das Ergebnis unlesbar.' },
      { page: 14, no: 14, answer: 'NODE', praise: 'Kernel-Knoten geöffnet.', beat: 'NODE gewährt Root-Zugriff. Nur ein letzter Befehl fehlt. Nova erinnert sich an ein kaum sichtbares Detail auf dem Titelblatt — etwas, das erst kopfüber lesbar wird.', transmission: 'KERNEL-HINWEIS // Übertragt zuerst Zeile C von Seite 10. Wendet dann positionsweise die Operatoren aus Zeile B an. Die Bedeutung der Operatoren steht auf Seite 3.' },
      { page: 15, no: 15, answer: 'RESET', praise: 'Root-Befehl akzeptiert.', beat: 'Der Chronowurm zerfällt in harmlose Zeichen. Vergangenheit und Zukunft beginnen, sich neu zu schreiben.' }
    ],
    finale: {
      kicker: 'ZEITKERN // SYNCHRON', title: 'ROOT-ZUGRIFF ERTEILT', sound: true,
      text: 'Nova setzt den Chronowurm zurück. Die Joras jagen wieder durch den Nullwald, die Greifin bewacht das Portal und beide Jahre bleiben bestehen. Ihr habt die Zeitlinie gerettet.',
      stamp: 'TIMELINE<br>GERETTET',
      ascii: ['        .-=================-.','     .-\'   2049  |  1427    \'.','   <  JORA  ^_^   [PORTAL]  GREIF >','      \\_______  ||  _______/','              \\_||_/','         NULLWALD ONLINE']
    }
  },
  geisterhaus: {
    name: 'Das verlassene Geisterhaus', menuLabel: 'Paranormale Hausakte',
    description: 'Zwei Stockwerke, verriegelte Zimmer und eine Stimme, die seit 1899 auf ihre Befreiung wartet.',
    cover: 'assets/geisterhaus-cover.jpg', printFile: 'downloads/geisterhaus-druckbilder.zip', meta: ['15 Rätsel', '150–180 Min.', 'Sehr schwer'],
    caseNumber: 'AG–1899', classification: 'NICHT BETRETEN', theme: { accent: '#d8d8d3', mode: 'geisterhaus' },
    story: 'Haus Amselgrund ordnet seine Zimmer neu. Der Decoder ist eure einzige Verbindung zu Mara — und zu der Stimme im Gemäuer.',
    openingTitle: 'MARA WINTER // HAUS AMSELGRUND',
    opening: [
      '1899 verschwand die Familie Voss während einer Séance. Türen wurden von innen verriegelt, Uhren blieben um 23:17 Uhr stehen. Gefunden wurde nur das Tagebuch der achtjährigen Edna.',
      'Heute betritt die Gebäudeforensikerin Mara Winter das verlassene Haus. Kurz nach ihrem ersten Funkspruch fällt die Eingangstür ins Schloss. Ihr Messgerät sendet nun Nachrichten aus Räumen, die laut Bauplan nicht miteinander verbunden sind.',
      'Jede richtige Lösung entriegelt ein anderes Zimmer. Haltet euch exakt an die Seiten- und Rätselnummern im Decoder. Beginnt mit Seite 2 · Rätsel 1.'
    ],
    puzzles: [
      { page: 2, no: 1, answer: 'AMSEL', taunt: 'Das Haus gähnt. Es hatte mit aufmerksameren Eindringlingen gerechnet.', hint: 'Die Botschaft steckt nicht mitten in den Sätzen. Betrachtet bei allen fünf Zeilen dieselbe Stelle ganz am Anfang.', praise: 'Die verborgene Signatur ist vollständig.', beat: 'AMSEL ist kein Vogelruf, sondern der Name des Hauses. Mara erkennt darunter eine zweite Handschrift: „Geht nicht dorthin, wo die Tür offen ist.“ Der einzige sichere Zugang liegt im Foyer.', transmission: 'RAUM FREIGEGEBEN // Öffnet jetzt Seite 4.' },
      { page: 4, no: 2, answer: 'TREPPEN', relatedPages: [3], taunt: 'Sieben Zeichen und schon verlauft ihr euch? Der Geist zählt leise mit.', hint: 'Die Fundhöhe entscheidet über die Reihenfolge. Beginnt möglichst nah am Boden und arbeitet euch nach oben.', praise: 'Sieben Spuren richtig geordnet.', beat: 'Auf der Treppe erscheinen kleine, nasse Fußabdrücke. Sie enden vor dem Kinderzimmer im Obergeschoss, obwohl dessen Tür seit 1899 vernagelt ist.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 7 und löst dort zuerst Rätsel 3.' },
      { page: 7, no: 3, answer: '7', inputMode: 'numeric', taunt: 'Die Wand sieht klarer als ihr. Das ist für eine Wand ziemlich peinlich.', hint: 'Vergrößern hilft hier kaum. Geht etwas zurück oder kneift die Augen zusammen, bis die Linien unscharf werden.', praise: 'Ihr habt der Täuschung nicht geglaubt.', beat: 'Die Zahl flackert auch auf Maras Messgerät. Für einen Augenblick steht hinter ihr ein Kind — dann bleibt nur sein Umriss im Bildschirmrauschen.', transmission: 'Das Prüfbild kann zur besseren Ansicht separat geladen werden.', downloadAsset: 'assets/geisterhaus/optisches-pruefraster.png', downloadLabel: 'Optisches Prüfbild herunterladen' },
      { page: 7, no: 4, answer: 'SCHRANK', taunt: 'Der Spiegel verdreht nicht nur Worte. Gerade hat er über euch gelacht.', hint: 'Lest nicht jeden Buchstaben gespiegelt. Kehrt zuerst die gesamte Leserichtung des Satzes um.', praise: 'Die Spiegelstimme ist lesbar.', beat: 'Im Schrank liegt kein Kleid, sondern ein Bibliotheksausweis auf den Namen Edna Voss. Zwischen den Lamellen zieht kalte Luft aus Richtung Erdgeschoss.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 5.' },
      { page: 5, no: 5, answer: 'SPIEGEL', taunt: 'Die Bücher sind seit 1899 verstaubt und trotzdem schneller als ihr.', hint: 'Folgt den Markierungen von unten nach oben. Jede Zahl bezeichnet ihre Position im Alphabet.', praise: 'Die Buchrücken stehen wieder richtig.', beat: 'Ein Buch springt auf. Alle Seiten sind leer, bis Mara es vor den blinden Wandspiegel hält. Darin erscheint ein Klavier mit sechs gedrückten Tasten.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 6.' },
      { page: 6, no: 6, answer: 'SECHS', taunt: 'Das Klavier schweigt aus Höflichkeit. Es möchte euer Raten nicht kommentieren.', hint: 'Kurz und lang sind keine Musiknoten. Trennt die Zeichen in fünf Gruppen und denkt an ein bekanntes Funkalphabet.', praise: 'Die stumme Melodie hat geantwortet.', beat: 'Sechs Töne laufen rückwärts durch das Haus. In der Küche beginnen vier Gläser im gleichen Rhythmus zu klirren. Ednas Stimme flüstert: „Ordnet, was Mutter zurückließ.“', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 8.' },
      { page: 8, no: 7, answer: '3142', inputMode: 'numeric', taunt: 'Vier Gläser. Vier Plätze. Das Gespenst hat schon einen Tisch reserviert.', hint: 'Zeichnet vier freie Plätze. Setzt zuerst das Paar ein, das direkt nebeneinander stehen muss, und prüft danach die übrigen Aussagen.', praise: 'Die vier Gläser sind eindeutig geordnet.', beat: 'Der Code löst ein Schloss unter der Spüle. Dahinter führt ein gemauerter Schacht in den Keller. Dort steigt der Druck in einem uralten Rohrnetz.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 10 und löst zuerst Rätsel 8.' },
      { page: 10, no: 8, answer: 'VENTIL', taunt: 'Im Keller steigt der Druck. Bei euch offenbar nur der Blutdruck.', hint: 'Es zählt ausschließlich der durchgehende Weg von S nach Z. Notiert nur Buchstaben, die dieser Weg wirklich berührt.', praise: 'Der sichere Weg durch das Rohrnetz steht.', beat: 'Mara dreht das Ventil. Das Zischen verstummt und legt eine zweite Nachricht frei, eingeritzt in eine vereiste Kupferplatte.', transmission: 'Bleibt auf Seite 10 und löst nun Rätsel 9.' },
      { page: 10, no: 9, answer: 'KALT', taunt: 'Die Zahlen frieren ein. Eure Gedanken scheinen bereits einen Vorsprung zu haben.', hint: 'Wendet zuerst jeden Operator auf die Zahl direkt davor an. Erst die vier neuen Zahlen werden in Buchstaben übersetzt.', praise: 'Der Kältestrom ist entschlüsselt.', beat: 'KALT ist zugleich eine Warnung. Im Observatorium beschlägt das Teleskop von innen. Sterne bilden dort einen Weg, den nur euer Decoder übertragen kann.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 11.' },
      { page: 11, no: 10, answer: 'NORDWEST', taunt: 'Siebenundvierzig Sterne und ihr folgt ausgerechnet den falschen. Eindrucksvoll.', hint: 'Beginnt exakt beim markierten S. Jeder Pfeil bedeutet einen einzelnen Schritt; Startbuchstabe und Punkte werden nicht notiert.', praise: 'Die Sternenroute ist vollständig.', beat: 'Im Nordwesten der Kuppel öffnet sich eine schmale Luke zum Dachboden. Mara hört darüber Stühle rücken — genau sieben, um einen runden Tisch.', transmission: 'DATENPAKET // Startet am S-Feld und folgt: ↑ ↑ → → ↓ ↓ → ↑', downloadAsset: 'assets/geisterhaus/sternenroute.png', downloadLabel: 'Sternenroute herunterladen' },
      { page: 12, no: 11, answer: '1899', inputMode: 'numeric', taunt: 'Papier falten. Eine Fähigkeit, die offenbar 1899 ausgestorben ist.', hint: 'Die beiden gestrichelten Linien sind die Scharniere. Faltet beide Außenbereiche nach innen und haltet das Blatt gegen eine helle Lampe.', praise: 'Papier und Licht haben das Jahr freigelegt.', beat: '1899 springt die stehengebliebene Dachbodenuhr wieder an. Jeder Schlag verändert eine Erinnerung im Speisesaal. Das Haus versucht, seine eigene Vergangenheit zu fälschen.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 9.' },
      { page: 9, no: 12, answer: '9', inputMode: 'numeric', taunt: 'Die falsche Erinnerung hofft sehr, dass ihr weiterhin nur grob hinschaut.', hint: 'Vergleicht feste Bereiche nacheinander: erst oben, dann Mitte, dann unten. Gesucht ist nur die Anzahl aller Veränderungen.', praise: 'Alle falschen Erinnerungen gefunden.', beat: 'Neun Veränderungen verschwinden. Übrig bleibt ein Familienporträt, in fünf Stücke zerrissen. Hinter einem Gesicht steht mit Bleistift nur ein Vorname.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 13.' },
      { page: 13, no: 13, answer: 'EDNA', taunt: 'Fünf Teile und trotzdem ein Familiendrama. Ganz wie früher.', hint: 'START bestimmt das erste Teil. Verbindet danach jeweils identische Kantenmarken und lest nur die großen Buchstaben; der Punkt zählt nicht.', praise: 'Die Familie ist wieder zusammengesetzt.', beat: 'Edna war nie die Gefahr. Ihre Eltern banden ihre Erinnerung an das Haus, um etwas anderes im Kamin einzuschließen. Im Archiv wartet eine Lochmaske auf die Nachricht vom Anfang.', transmission: 'RAUM FREIGEGEBEN // Öffnet Seite 14. Ihr braucht zusätzlich Seite 2.' },
      { page: 14, no: 14, answer: 'KAMIN', relatedPages: [2], taunt: 'Das Archiv hat Löcher. Eure Erinnerung an Seite 2 anscheinend ebenfalls.', hint: 'Die Maske und das Buchstabenraster müssen deckungsgleich liegen. Richtet ihre obere linke Ecke aus und lest die offenen Fenster von oben nach unten.', praise: 'Die fünf Fenster zeigen denselben Ort.', beat: 'Hinter dem Kamin findet Mara einen zugemauerten Durchgang zum Séancezimmer. Auf der Schwelle steht: „Nur der erste Index weckt, was wir zum Schweigen brachten.“', transmission: 'LETZTER RAUM FREIGEGEBEN // Öffnet Seite 15 und haltet Seite 1 bereit.' },
      { page: 15, no: 15, answer: 'ERWACHE', relatedPages: [1], taunt: 'Kurz vor Mitternacht noch Hilfe? Edna rollt in ihrem Porträt mit den Augen.', hint: 'Dreht das Titelblatt vollständig um. Jede Indexziffer wählt eine Buchstabenposition aus dem Wort mit derselben Zeilennummer.', praise: 'Der letzte Befehl wurde gesprochen.', beat: 'Die Kerzen entzünden sich ohne Flamme. Ednas Schatten löst sich aus der Wand, lächelt Mara ein einziges Mal zu und tritt ins Morgenlicht. Haus Amselgrund hört auf, seine Räume zu verschieben.' }
    ],
    finale: {
      kicker: '23:17 UHR // DIE ZEIT LÄUFT WEITER', title: 'EDNA IST FREI', sound: true, soundProfile: 'haunted',
      text: 'Ihr habt alle verriegelten Zimmer durchquert, die falschen Erinnerungen entlarvt und Ednas Namen zurückgegeben. Hinter Mara öffnet sich die Haustür von selbst. Als sie hinaustritt, schlägt die Uhr zum ersten Mal seit 1899 wieder Mitternacht.',
      stamp: 'HAUSAKTE<br>GESCHLOSSEN',
      ascii: ['             /\\','        ____/  \\____','       /  _   []   _  \\','      /__|_|______|_|__\\','      |   EDNA IST FREI  |','      |______    ________|','             |__|']
    }
  }
};

let game, gameId, step = 0, audioContext, emergencyStep = 0;
const $ = id => document.getElementById(id);
const norm = value => value.trim().toUpperCase().replace(/\s+/g, '').replace(/Ä/g,'AE').replace(/Ö/g,'OE').replace(/Ü/g,'UE');

function buildMenu() {
  $('gameGrid').innerHTML = Object.entries(games).map(([id, entry]) => `
    <button class="game-card game-card--${entry.theme.mode}" type="button" data-game-id="${id}" aria-label="${entry.name} starten">
      <span class="card-art"><img src="${entry.cover}" alt="" loading="eager"></span>
      <span class="card-content"><span class="card-kicker">${entry.menuLabel}</span><strong>${entry.name}</strong>
      <span class="card-description">${entry.description}</span><span class="card-meta">${entry.meta.map(item => `<span>${item}</span>`).join('')}</span>
      <span class="card-action">Akte öffnen <b aria-hidden="true">→</b></span></span></button>`).join('');
  document.querySelectorAll('[data-game-id]').forEach(card => card.addEventListener('click', () => start(card.dataset.gameId)));
  $('downloadGrid').innerHTML = Object.entries(games).filter(([,entry])=>entry.printFile).map(([id,entry])=>`
    <a class="download-card download-card--${entry.theme.mode}" href="${entry.printFile}" download>
      <span aria-hidden="true">⇩</span><span><strong>${entry.name}</strong><small>Druckseiten als ZIP herunterladen</small></span>
    </a>`).join('');
}

function openEmergency() {
  $('emergencyLock').hidden=false; $('emergencySolutions').hidden=true; $('emergencyCode').value='';
  $('emergencyMessage').textContent=''; $('emergencyMessage').className='';
  $('emergencyDialog').showModal(); setTimeout(()=>$('emergencyCode').focus(),50);
}

function unlockEmergency() {
  if ($('emergencyCode').value !== '9119') {
    $('emergencyMessage').textContent='✕ Code nicht erkannt'; $('emergencyMessage').className='bad'; return;
  }
  $('emergencyLock').hidden=true; $('emergencySolutions').hidden=false;
  $('emergencyGame').innerHTML=Object.entries(games).map(([id,entry])=>`<option value="${id}">${entry.name}</option>`).join('');
  emergencyStep=0; renderEmergency(false);
}

function renderEmergency(revealed=false) {
  const id=$('emergencyGame').value || Object.keys(games)[0], entry=games[id], puzzle=entry.puzzles[emergencyStep];
  const location=puzzle.no!==undefined ? `Seite ${puzzle.page} · Rätsel ${puzzle.no}` : puzzle.plural ? `Seiten ${puzzle.page}` : `Seite ${puzzle.page}`;
  $('solutionCard').innerHTML=`<p class="solution-progress">SCHRITT ${emergencyStep+1} / ${entry.puzzles.length}</p><h3>${location}</h3><div class="solution-answer ${revealed?'is-revealed':''}">${revealed?`LÖSUNG: <strong>${puzzle.answer}</strong>`:'Lösung noch verdeckt'}</div>`;
  $('revealSolution').hidden=revealed;
  $('nextSolution').hidden=!revealed || emergencyStep>=entry.puzzles.length-1;
}

function nextEmergencySolution() {
  const entry=games[$('emergencyGame').value];
  if(emergencyStep<entry.puzzles.length-1){emergencyStep++;renderEmergency(false)}
}

function showMenu(updateUrl = true) {
  game = gameId = undefined; step = 0; document.body.dataset.game = 'menu';
  document.documentElement.style.setProperty('--accent', '#c7a25b');
  $('classification').textContent = 'SPIELARCHIV'; $('caseNumber').textContent = `${Object.keys(games).length} EINSATZAKTEN`;
  $('title').textContent = 'Escape-Archiv'; $('story').textContent = 'Wählt eure Akte. Der Decoder passt sich vollständig an die Welt des Spiels an.';
  $('footerBrand').textContent = 'ESCAPE-ARCHIV'; $('footerStatus').textContent = 'BEREIT';
  $('decoder').hidden = true; $('selectWrap').hidden = false;
  if (updateUrl) history.replaceState(null, '', location.pathname);
}

function start(id, updateUrl = true) {
  gameId=id; game=games[id]; step=0; document.documentElement.style.setProperty('--accent',game.theme.accent);
  document.body.dataset.game=game.theme.mode; $('classification').textContent=game.classification; $('caseNumber').textContent=`FALL NR. ${game.caseNumber}`;
  $('title').textContent=game.name; $('story').textContent=game.story; $('footerBrand').textContent=game.name; $('footerStatus').textContent='VERTRAULICH';
  $('selectWrap').hidden=true; $('decoder').hidden=false; if(updateUrl) history.replaceState(null,'',`${location.pathname}?game=${id}`);
  game.opening ? showOpening() : render();
}

function showOpening() {
  $('stage').innerHTML=`<section class="opening-terminal"><p class="terminal-kicker">&gt; EINGEHENDE ÜBERTRAGUNG</p><h2>${game.openingTitle||'EINSATZZENTRALE'}</h2>${game.opening.map(p=>`<p>${p}</p>`).join('')}<button id="continueStory" type="button"><span>Übertragung starten · Seite ${game.puzzles[0].page}</span></button></section>`;
  $('continueStory').onclick=render;
}

function render() {
  const p=game.puzzles[step], numbered=p.no!==undefined;
  const pageText=numbered ? `Seite ${p.page} · Rätsel ${p.no}` : `Seite ${p.page}`;
  const prompt=p.plural ? `Gebt die gemeinsame Lösung der Seiten ${p.page} ein.` : `Gebt die Lösung von ${pageText} ein.`;
  const imagePages=gameId==='geisterhaus'?[...new Set([p.page,...(p.relatedPages||[])])]:[];
  const pageViewer=imagePages.length?`<div class="page-viewer"><strong>Druckseiten digital ansehen</strong><p>Öffnet die Seite groß auf dem Handy und zoomt in feine Bleistiftspuren hinein.</p>${imagePages.map(page=>{const src=`assets/geisterhaus/seiten/Geisterhaus-Seite-${String(page).padStart(2,'0')}.jpg`;return `<div class="page-viewer__actions"><a class="image-action" href="${src}" target="_blank" rel="noopener" aria-label="Seite ${page} groß öffnen">▣ Seite ${page} groß öffnen</a><a class="image-action image-action--download" href="${src}" download>↓ Seite ${page} speichern</a></div>`}).join('')}</div>`:'';
  $('stage').innerHTML=`<div class="status" aria-label="Rätselstatus"><span>Rätsel ${step+1} von ${game.puzzles.length}</span><span id="typeLabel">${pageText}</span></div>
    <div class="progress" aria-hidden="true"><span style="--progress:${((step+1)/game.puzzles.length)*100}%"></span></div>
    <div class="puzzle-sheet"><div class="paper-clip" aria-hidden="true"></div><h2>${pageText}</h2><p id="prompt">${prompt}</p>
    ${p.transmission ? `<div class="transmission"><strong>&gt; APP-DATENPAKET</strong><p>${p.transmission}</p>${p.downloadAsset?`<a class="puzzle-download" href="${p.downloadAsset}" download>${p.downloadLabel||'Bild herunterladen'} ↓</a>`:''}</div>` : ''}
    ${pageViewer}
    <label for="answer">Eure Lösung</label><input id="answer" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="${p.inputMode||'text'}" placeholder="Code oder Lösungswort">
    <button id="check" type="button"><span>Prüfen</span></button><p id="message" aria-live="polite"></p>
    ${p.hint?`<div class="hint-zone"><button id="openHint" class="hint-button" type="button"><span>☠ Kleine Hilfe anfordern</span></button><div id="hintWarning" class="hint-warning" hidden><strong>Wirklich Hilfe benutzen?</strong><p>Das Haus wird es bemerken. Der Hinweis verrät die Lösung nicht, nimmt euch aber einen Teil der Ehre.</p><div class="hint-actions"><button id="confirmHint" type="button"><span>Ja, Hinweis zeigen</span></button><button id="cancelHint" class="secondary-action" type="button"><span>Nein, weitergrübeln</span></button></div></div><div id="hintReveal" class="hint-reveal" hidden><strong>${p.taunt}</strong><p>${p.hint}</p></div></div>`:''}</div>`;
  $('check').onclick=check; $('answer').addEventListener('keydown',e=>{if(e.key==='Enter')check()});
  if(p.hint){
    $('openHint').onclick=()=>{$('openHint').hidden=true;$('hintWarning').hidden=false;$('confirmHint').focus()};
    $('cancelHint').onclick=()=>{$('hintWarning').hidden=true;$('openHint').hidden=false;$('openHint').focus()};
    $('confirmHint').onclick=()=>{$('hintWarning').hidden=true;$('hintReveal').hidden=false};
  }
  $('answer').focus({preventScroll:true});
}

function showBeat(p) {
  const final=step===game.puzzles.length-1;
  $('stage').innerHTML=`<section class="story-terminal"><p class="terminal-kicker">&gt; ACCESS_GRANTED // ${String(step+1).padStart(2,'0')}</p><div class="story-check">✓</div><h2>${p.praise}</h2><p>${p.beat}</p><div class="next-route">${final?'FINALE FREIGESCHALTET':`NÄCHSTES ZIEL // Seite ${game.puzzles[step+1].page} · Rätsel ${game.puzzles[step+1].no}`}</div><button id="continueStory" type="button"><span>${final?'Zeitkern öffnen':'Weiter zur nächsten Übertragung'}</span></button></section>`;
  $('continueStory').onclick=()=>{ if(final) showFinale(); else {step++; render();} };
}

function armAudio(){
  if(!game.finale.sound)return;
  audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==='suspended')audioContext.resume();
}

function playFinalSound(){
  if(!game.finale.sound||!audioContext)return;
  const now=audioContext.currentTime, notes=game.finale.soundProfile==='haunted'?[82,82,196,247,330,494]:[220,330,440,660,880];
  notes.forEach((freq,i)=>{const o=audioContext.createOscillator(),g=audioContext.createGain();o.type=i<2?'square':'sine';o.frequency.setValueAtTime(freq,now+i*.13);g.gain.setValueAtTime(.0001,now+i*.13);g.gain.exponentialRampToValueAtTime(.09,now+i*.13+.025);g.gain.exponentialRampToValueAtTime(.0001,now+i*.13+.36);o.connect(g).connect(audioContext.destination);o.start(now+i*.13);o.stop(now+i*.13+.38)});
}

function showFinale() {
  const f=game.finale;
  const artwork=f.image?`<img class="final-dragon-image" src="${f.image}" alt="Fyrion beschützt ein frisch geschlüpftes Drachenjunges">`:f.ascii?`<pre class="ascii-finale" aria-label="${f.title}">${f.ascii.join('\n')}</pre>`:`<div class="final-lighthouse" aria-hidden="true"><span class="final-beam"></span><span class="final-lantern"></span><span class="final-tower"></span><span class="final-rocks"></span></div>`;
  $('stage').innerHTML=`<section class="finale finale--${game.theme.mode}" aria-labelledby="finaleTitle"><div class="celebration" aria-hidden="true">${'<i></i>'.repeat(12)}</div>${artwork}<p class="final-kicker">${f.kicker}</p><h2 id="finaleTitle">${f.title}</h2><p>${f.text}</p><div class="success-stamp">${f.stamp}</div>${f.sound?'<button id="replaySound" class="secondary-action" type="button"><span>♫ Erfolgssignal wiederholen</span></button>':''}<button id="toMenu" type="button"><span>Zur Spielauswahl</span></button></section>`;
  $('toMenu').onclick=()=>showMenu(); if(f.sound){$('replaySound').onclick=playFinalSound; playFinalSound();}
}

function check() {
  armAudio(); const p=game.puzzles[step];
  if(norm($('answer').value)===norm(p.answer)){
    $('message').textContent='✓ Richtig'; $('message').className='ok';
    setTimeout(()=> p.beat ? showBeat(p) : (step<game.puzzles.length-1?(step++,render()):showFinale()),600);
  } else { $('message').textContent='✕ Noch nicht richtig'; $('message').className='bad'; }
}

function initialize(){
  buildMenu(); $('backMenu').onclick=()=>showMenu();
  $('openEmergency').onclick=openEmergency; $('closeEmergency').onclick=()=>$('emergencyDialog').close();
  $('unlockEmergency').onclick=unlockEmergency; $('emergencyCode').addEventListener('keydown',e=>{if(e.key==='Enter')unlockEmergency()});
  $('emergencyGame').onchange=()=>{emergencyStep=0;renderEmergency(false)};
  $('revealSolution').onclick=()=>renderEmergency(true); $('nextSolution').onclick=nextEmergencySolution;
  $('emergencyDialog').addEventListener('click',e=>{if(e.target===$('emergencyDialog'))$('emergencyDialog').close()});
  const id=new URLSearchParams(location.search).get('game'); id&&games[id]?start(id,false):showMenu(false);
}
initialize();
