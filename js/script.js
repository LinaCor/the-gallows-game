const VALID_SYMBOLS = /^[а-я]$/i;
const gameWords = ['небо', 'чебурек', 'илюша', 'релокация', 'отпуск', 'кейс', 'литература', 'орнитология', 'солнце', 'автомобиль', 'книга', 'кинология', 'хронометрия', 'вода', 'помело', 'часы'];
let word = getRandomWord(gameWords);
let answerArray = setupAnswerArray(gameWords);
let remainingLetters = word.length;
let gameActive = document.querySelector('.game-input');
let lettersInput = gameActive.querySelector('input');
let buttonVerif = gameActive.querySelector('button');
let valueInputValidate = document.querySelector('.game-input__validation');
let guessWord = document.querySelector('.game-result__word');
let human = document.querySelector('.human');

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setupAnswerArray(arr) {
  let array = [];
  for (let i = 0; i < word.length; i++) {
    array.push('_');
  }
  return array;
}

function endGame() {
  buttonVerif.style.display = 'none';
  let btnRestartGame = document.createElement('button');
  btnRestartGame.classList.add('game-input__btn');
  btnRestartGame.textContent = 'сыграть ещё раз';
  gameActive.append(btnRestartGame);
  btnRestartGame.addEventListener('click', () => {
    location.reload();
  })
}


function updateGameState(value, word, arr) {
  if (!word.includes(value)) {
    let hiddenElements = human.querySelectorAll('.hidden');
    if (hiddenElements.length === 1) {
      hiddenElements[0].classList.remove('hidden');
      valueInputValidate.innerHTML = 'попытки закончились :(';
      endGame();
    } else {
      hiddenElements[0].classList.remove('hidden');
      return;
    }
  }

  for (let j = 0; j < word.length; j++) {
    if (word[j] === value) {
      if (arr[j] == value) {
        break;
      }
      arr[j] = value;
      remainingLetters--;
    }
  }

  if (!arr.some(elem => elem === '_')) {
    valueInputValidate.innerHTML = `браво, вы отгадали слово "${word}"!`;
    endGame();
  }
  guessWord.textContent = arr.join(' ');
}


window.addEventListener('load', () => {
  guessWord.textContent = answerArray.join(' ');
})


buttonVerif.addEventListener('click', () => {
  const valueInput = lettersInput.value;

  if (!valueInput.length) {
    valueInputValidate.innerHTML = 'а как же выбрать букву?';
    buttonVerif.disabled = true;
    return;
  }

  if (valueInput.length > 1) {
    valueInputValidate.innerHTML = 'можно только одну букву';
    buttonVerif.disabled = true;
    return;
  }

  if (!VALID_SYMBOLS.test(valueInput)) {
    valueInputValidate.innerHTML = 'только русские буквы и никаких цифр!';
    buttonVerif.disabled = true;
    return;
  }

  if (answerArray.some((elem) => elem == valueInput)) {
    valueInputValidate.innerHTML = 'эта буква уже была, попробуй другую';
    buttonVerif.disabled = true;
    return;
  }

  if (valueInput.length == 1 && VALID_SYMBOLS.test(valueInput)) {
    valueInputValidate.innerHTML = '';
    updateGameState(valueInput, word, answerArray);
    lettersInput.value = '';
  }
})

lettersInput.addEventListener('input', () => {
  if (lettersInput.value.length == 1 || !lettersInput.value) {
    buttonVerif.disabled = false;
    valueInputValidate.innerHTML = '';
  }
})





