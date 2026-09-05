const games = {
  demo: {
    name: 'Akte Nachtlicht',
    menuLabel: 'Nautischer Kriminalfall',
    description: 'Ein erloschener Leuchtturm, alte Logbücher und eine Spur durch die Dunkelheit.',
    cover: 'assets/nachtlicht-lighthouse.png',
    meta: ['3 Rätsel', 'ca. 60 Min.', 'Mittel'],
    caseNumber: 'NL–0047',
    classification: 'GEHEIM',
    theme: { accent: '#c29b54', mode: 'nachtlicht' },
    story: 'Drei Rätsel trennen euch von der Wahrheit. Beginnt mit der angegebenen Druckseite.',
    puzzles: [
      { page: 4, answer: '4827', inputMode: 'numeric' },
      { page: 5, answer: 'MOND' },
      { page: 6, answer: 'LEUCHTTURM' }
    ],
    finale: {
      kicker: 'Das Licht ist zurück',
      title: 'Ihr habt es geschafft!',
      text: 'Alle Rätsel sind gelöst und die Akte Nachtlicht ist abgeschlossen.',
      stamp: 'MISSION<br>ERFOLGREICH'
    }
  },
  drache: {
    name: 'Der verschwundene Drache',
    menuLabel: 'Königliche Drachenakte',
    description: 'Findet Fyrion, bevor die letzte Glut des Königreichs erlischt.',
    cover: 'assets/dragon-citadel.png',
    meta: ['7 Rätsel', '90–120 Min.', 'Anspruchsvoll'],
    caseNumber: 'DR–0712',
    classification: 'KÖNIGLICH',
    theme: { accent: '#d6a54a', mode: 'drache' },
    story: 'Folgt Fyrions Spur. Der Decoder nennt euch immer nur die nächste Seite.',
    puzzles: [
      { page: 3, answer: 'DRACO' },
      { page: 6, answer: 'FEUER' },
      { page: '4 + 9', answer: '27491', inputMode: 'numeric', plural: true },
      { page: 5, answer: 'GOLD' },
      { page: 10, answer: 'OST' },
      { page: 7, answer: 'NEST' },
      { page: 11, answer: 'FYRION' }
    ],
    finale: {
      kicker: 'Die letzte Glut erwacht',
      title: 'Fyrion antwortet!',
      text: 'Ihr habt den verschwundenen Drachen gefunden. Öffnet jetzt Seite 12 und entdeckt, welches Geheimnis er bewacht.',
      stamp: 'DRACHE<br>GEFUNDEN',
      image: 'assets/dragon-finale.png'
    }
  }
};

let game;
let gameId;
let step = 0;
const $ = id => document.getElementById(id);
const norm = value => value.trim().toUpperCase().replace(/\s+/g, '');

function buildMenu() {
  $('gameGrid').innerHTML = Object.entries(games).map(([id, entry]) => `
    <button class="game-card game-card--${entry.theme.mode}" type="button" data-game-id="${id}" aria-label="${entry.name} starten">
      <span class="card-art"><img src="${entry.cover}" alt="" loading="eager"></span>
      <span class="card-content">
        <span class="card-kicker">${entry.menuLabel}</span>
        <strong>${entry.name}</strong>
        <span class="card-description">${entry.description}</span>
        <span class="card-meta">${entry.meta.map(item => `<span>${item}</span>`).join('')}</span>
        <span class="card-action">Akte öffnen <b aria-hidden="true">→</b></span>
      </span>
    </button>`).join('');

  document.querySelectorAll('[data-game-id]').forEach(card => {
    card.addEventListener('click', () => start(card.dataset.gameId));
  });
}

function showMenu(updateUrl = true) {
  game = undefined;
  gameId = undefined;
  step = 0;
  document.body.dataset.game = 'menu';
  document.documentElement.style.setProperty('--accent', '#c7a25b');
  $('classification').textContent = 'SPIELARCHIV';
  $('caseNumber').textContent = `${Object.keys(games).length} EINSATZAKTEN`;
  $('title').textContent = 'Escape-Archiv';
  $('story').textContent = 'Wählt eure Akte. Der Decoder passt sich vollständig an die Welt des Spiels an.';
  $('footerBrand').textContent = 'ESCAPE-ARCHIV';
  $('footerStatus').textContent = 'BEREIT';
  $('decoder').hidden = true;
  $('selectWrap').hidden = false;
  if (updateUrl) history.replaceState(null, '', location.pathname);
}

function initialize() {
  buildMenu();
  const requestedGame = new URLSearchParams(location.search).get('game');
  if (requestedGame && games[requestedGame]) start(requestedGame, false);
  else showMenu(false);
}

function start(id, updateUrl = true) {
  gameId = id;
  game = games[id];
  step = 0;
  document.documentElement.style.setProperty('--accent', game.theme.accent);
  document.body.dataset.game = game.theme.mode;
  $('classification').textContent = game.classification;
  $('caseNumber').textContent = `FALL NR. ${game.caseNumber}`;
  $('title').textContent = game.name;
  $('story').textContent = game.story;
  $('footerBrand').textContent = game.name;
  $('footerStatus').textContent = 'VERTRAULICH';
  $('selectWrap').hidden = true;
  $('decoder').hidden = false;
  if (updateUrl) history.replaceState(null, '', `${location.pathname}?game=${id}`);
  render();
}

function render() {
  const puzzle = game.puzzles[step];
  $('stepLabel').textContent = `Rätsel ${step + 1} von ${game.puzzles.length}`;
  $('typeLabel').textContent = `Seite ${puzzle.page}`;
  $('puzzleTitle').textContent = `Seite ${puzzle.page}`;
  $('prompt').textContent = puzzle.plural
    ? `Gebt die gemeinsame Lösung der Seiten ${puzzle.page} ein.`
    : `Gebt die Lösung von Seite ${puzzle.page} ein.`;
  $('progressBar').style.setProperty('--progress', `${((step + 1) / game.puzzles.length) * 100}%`);
  $('answer').value = '';
  $('answer').inputMode = puzzle.inputMode || 'text';
  $('message').textContent = '';
  $('message').className = '';
  $('answer').focus({ preventScroll: true });
}

function showFinale() {
  const finale = game.finale;
  const artwork = finale.image
    ? `<img class="final-dragon-image" src="${finale.image}" alt="Fyrion beschützt ein frisch geschlüpftes Drachenjunges">`
    : `<div class="final-lighthouse" aria-hidden="true">
        <span class="final-beam"></span><span class="final-lantern"></span>
        <span class="final-tower"></span><span class="final-rocks"></span>
      </div>`;
  $('decoder').innerHTML = `
    <section class="finale finale--${game.theme.mode}" aria-labelledby="finaleTitle">
      <div class="celebration" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      ${artwork}
      <p class="final-kicker">${finale.kicker}</p>
      <h2 id="finaleTitle">${finale.title}</h2>
      <p>${finale.text}</p>
      <div class="success-stamp">${finale.stamp}</div>
      <button type="button" onclick="location.href=location.pathname"><span>Zur Spielauswahl</span></button>
    </section>`;
}

function check() {
  const puzzle = game.puzzles[step];
  if (norm($('answer').value) === norm(puzzle.answer)) {
    $('message').textContent = '✓ Richtig';
    $('message').className = 'ok';
    setTimeout(() => {
      if (step < game.puzzles.length - 1) {
        step++;
        render();
      } else {
        showFinale();
      }
    }, 650);
  } else {
    $('message').textContent = '✕ Noch nicht richtig';
    $('message').className = 'bad';
  }
}

$('check').onclick = check;
$('backMenu').onclick = () => showMenu();
$('answer').addEventListener('keydown', event => {
  if (event.key === 'Enter') check();
});
initialize();
