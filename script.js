let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    document.getElementById('musicToggle').textContent = '🔊 Вкл. музыку';
    musicPlaying = false;
  } else {
    bgMusic.volume = 0.3;
    bgMusic.play().then(() => {
      document.getElementById('musicToggle').textContent = '🔇 Выкл. музыку';
      musicPlaying = true;
    }).catch(e => {
      alert('Нажмите ещё раз — браузер требует взаимодействия для звука.');
    });
  }
}

function typeText(element, text, speed = 80) {
  element.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

function showWishes() {
  const name = document.getElementById('firstName').value.trim();
  const patronymic = document.getElementById('patronymic').value.trim();

  if (!name || !patronymic) {
    alert('Пожалуйста, введите имя и отчество!');
    return;
  }

  const fullName = name + ' ' + patronymic;
  const wishes = `Пусть уходящий год останется в памяти ярким и незабываемым, а в Новом году тебя ждут ещё более прекрасные моменты, исполнение желаний и радость в каждом дне! 🎄✨`;

  document.getElementById('userName').textContent = fullName;
  const wishesEl = document.getElementById('wishesText');

  wishesEl.textContent = '';
  document.getElementById('input-screen').style.display = 'none';
  document.getElementById('wishes-screen').style.display = 'block';

  setTimeout(() => {
    typeText(wishesEl, wishes, 70);
  }, 300);
}

function restart() {
  document.getElementById('wishes-screen').style.display = 'none';
  document.getElementById('input-screen').style.display = 'block';
}
