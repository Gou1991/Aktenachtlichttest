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
  const location=id==='zeitfehler' ? `Seite ${puzzle.page} · Rätsel ${puzzle.no}` : puzzle.plural ? `Seiten ${puzzle.page}` : `Seite ${puzzle.page}`;
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
  $('stage').innerHTML=`<section class="opening-terminal"><p class="terminal-kicker">&gt; INCOMING_TRANSMISSION</p><h2>NOVA KERN // 2049</h2>${game.opening.map(p=>`<p>${p}</p>`).join('')}<button id="continueStory" type="button"><span>Übertragung starten · Seite 2</span></button></section>`;
  $('continueStory').onclick=render;
}

function render() {
  const p=game.puzzles[step], numbered=gameId==='zeitfehler';
  const pageText=numbered ? `Seite ${p.page} · Rätsel ${p.no}` : `Seite ${p.page}`;
  const prompt=p.plural ? `Gebt die gemeinsame Lösung der Seiten ${p.page} ein.` : `Gebt die Lösung von ${pageText} ein.`;
  $('stage').innerHTML=`<div class="status" aria-label="Rätselstatus"><span>Rätsel ${step+1} von ${game.puzzles.length}</span><span id="typeLabel">${pageText}</span></div>
    <div class="progress" aria-hidden="true"><span style="--progress:${((step+1)/game.puzzles.length)*100}%"></span></div>
    <div class="puzzle-sheet"><div class="paper-clip" aria-hidden="true"></div><h2>${pageText}</h2><p id="prompt">${prompt}</p>
    ${p.transmission ? `<div class="transmission"><strong>&gt; APP-DATENPAKET</strong><p>${p.transmission}</p></div>` : ''}
    <label for="answer">Eure Lösung</label><input id="answer" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="${p.inputMode||'text'}" placeholder="Code oder Lösungswort">
    <button id="check" type="button"><span>Prüfen</span></button><p id="message" aria-live="polite"></p></div>`;
  $('check').onclick=check; $('answer').addEventListener('keydown',e=>{if(e.key==='Enter')check()}); $('answer').focus({preventScroll:true});
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
  const now=audioContext.currentTime, notes=[220,330,440,660,880];
  notes.forEach((freq,i)=>{const o=audioContext.createOscillator(),g=audioContext.createGain();o.type=i<2?'square':'sine';o.frequency.setValueAtTime(freq,now+i*.13);g.gain.setValueAtTime(.0001,now+i*.13);g.gain.exponentialRampToValueAtTime(.09,now+i*.13+.025);g.gain.exponentialRampToValueAtTime(.0001,now+i*.13+.36);o.connect(g).connect(audioContext.destination);o.start(now+i*.13);o.stop(now+i*.13+.38)});
}

function showFinale() {
  const f=game.finale;
  const artwork=f.image?`<img class="final-dragon-image" src="${f.image}" alt="Fyrion beschützt ein frisch geschlüpftes Drachenjunges">`:f.ascii?`<pre class="ascii-finale" aria-label="Stabilisiertes Zeitportal">${f.ascii.join('\n')}</pre>`:`<div class="final-lighthouse" aria-hidden="true"><span class="final-beam"></span><span class="final-lantern"></span><span class="final-tower"></span><span class="final-rocks"></span></div>`;
  $('stage').innerHTML=`<section class="finale finale--${game.theme.mode}" aria-labelledby="finaleTitle"><div class="celebration" aria-hidden="true">${'<i></i>'.repeat(12)}</div>${artwork}<p class="final-kicker">${f.kicker}</p><h2 id="finaleTitle">${f.title}</h2><p>${f.text}</p><div class="success-stamp">${f.stamp}</div>${f.sound?'<button id="replaySound" class="secondary-action" type="button"><span>♫ Erfolgssignal wiederholen</span></button>':''}<button id="toMenu" type="button"><span>Zur Spielauswahl</span></button></section>`;
  $('toMenu').onclick=()=>showMenu(); if(f.sound){$('replaySound').onclick=playFinalSound; playFinalSound();}
}

function check() {
  armAudio(); const p=game.puzzles[step];
  if(norm($('answer').value)===norm(p.answer)){
    $('message').textContent='✓ Richtig'; $('message').className='ok';
    setTimeout(()=> gameId==='zeitfehler' ? showBeat(p) : (step<game.puzzles.length-1?(step++,render()):showFinale()),600);
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
