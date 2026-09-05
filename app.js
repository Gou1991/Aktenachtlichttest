const games = {
  demo: {
    name: 'Akte Nachtlicht',
    theme: { accent: '#c29b54', mode: 'nachtlicht' },
    story: 'Gebt hier nacheinander eure gefundenen Lösungen ein.',
    puzzles: [
      { page: 4, answer: '4827', inputMode: 'numeric' },
      { page: 5, answer: 'MOND' },
      { page: 6, answer: 'LEUCHTTURM' }
    ]
  },
  lab: {
    name: 'Labor 47',
    theme: { accent: '#b6a65b', mode: 'labor' },
    story: 'Gebt hier eure gefundene Lösung ein.',
    puzzles: [{ page: 1, answer: 'ENERGIE' }]
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
  $('selectWrap').hidden = true;
  $('decoder').hidden = false;
  render();
}

function render() {
  const puzzle = game.puzzles[step];
  $('stepLabel').textContent = `Rätsel ${step + 1} von ${game.puzzles.length}`;
  $('typeLabel').textContent = `Seite ${puzzle.page}`;
  $('puzzleTitle').textContent = `Seite ${puzzle.page}`;
  $('prompt').textContent = `Gebt die Lösung von Seite ${puzzle.page} ein.`;
  $('progressBar').style.setProperty('--progress', `${((step + 1) / game.puzzles.length) * 100}%`);
  $('answer').value = '';
  $('answer').inputMode = puzzle.inputMode || 'text';
  $('message').textContent = '';
  $('message').className = '';
  $('answer').focus({ preventScroll: true });
}

function showFinale() {
  $('decoder').innerHTML = `
    <section class="finale" aria-labelledby="finaleTitle">
      <div class="celebration" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div class="final-lighthouse" aria-hidden="true">
        <span class="final-beam"></span><span class="final-lantern"></span>
        <span class="final-tower"></span><span class="final-rocks"></span>
      </div>
      <p class="final-kicker">Das Licht ist zurück</p>
      <h2 id="finaleTitle">Ihr habt es geschafft!</h2>
      <p>Alle Rätsel sind gelöst und die Akte Nachtlicht ist abgeschlossen.</p>
      <div class="success-stamp">MISSION<br>ERFOLGREICH</div>
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
