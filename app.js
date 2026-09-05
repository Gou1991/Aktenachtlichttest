const games = {
  demo: {
    name: 'Akte Nachtlicht',
    caseNumber: 'NL–0047',
    classification: 'GEHEIM',
    theme: { accent: '#c29b54', mode: 'nachtlicht' },
    story: 'Gebt hier nacheinander eure gefundenen Lösungen ein.',
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
let step = 0;
const $ = id => document.getElementById(id);
const norm = value => value.trim().toUpperCase().replace(/\s+/g, '');

function fillGames() {
  Object.entries(games).forEach(([id, entry]) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = entry.name;
    $('gameSelect').append(option);
  });

  const requestedGame = new URLSearchParams(location.search).get('game');
  if (requestedGame && games[requestedGame]) {
    $('gameSelect').value = requestedGame;
    start(requestedGame);
  }
}

function start(id) {
  game = games[id];
  step = 0;
  document.documentElement.style.setProperty('--accent', game.theme.accent);
  document.body.dataset.game = game.theme.mode;
  $('title').textContent = game.name;
  $('story').textContent = game.story;
  $('caseNumber').textContent = `FALL NR. ${game.caseNumber}`;
  $('classification').textContent = game.classification;
  $('footerBrand').textContent = game.name;
  $('selectWrap').hidden = true;
  $('decoder').hidden = false;
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
  const finale = game.finale || {
    kicker: 'Mission erfüllt', title: 'Ihr habt es geschafft!',
    text: 'Alle Rätsel wurden gelöst.', stamp: 'MISSION<br>ERFOLGREICH'
  };
  const artwork = finale.image
    ? `<img class="final-dragon-image" src="${finale.image}" alt="Fyrion beschützt ein frisch geschlüpftes Drachenjunges">`
    : `<div class="final-lighthouse" aria-hidden="true">
        <span class="final-beam"></span><span class="final-lantern"></span>
        <span class="final-tower"></span><span class="final-rocks"></span>
      </div>`;
  $('decoder').innerHTML = `
    <section class="finale" aria-labelledby="finaleTitle">
      <div class="celebration" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      ${artwork}
      <p class="final-kicker">${finale.kicker}</p>
      <h2 id="finaleTitle">${finale.title}</h2>
      <p>${finale.text}</p>
      <div class="success-stamp">${finale.stamp}</div>
      <button type="button" onclick="location.href=location.pathname"><span>Noch einmal spielen</span></button>
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

$('loadGame').onclick = () => start($('gameSelect').value);
$('check').onclick = check;
$('answer').addEventListener('keydown', event => {
  if (event.key === 'Enter') check();
});
fillGames();
