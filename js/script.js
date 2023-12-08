const VALID_SYMBOLS = /^[а-я]$/i;
const gameWords = [
  'небо',
  'чебурек',
  'илюша',
  'релокация',
  'отпуск',
  'кейс',
  'литература',
  'орнитология',
  'солнце',
  'автомобиль',
  'книга',
  'кинология',
  'хронометрия',
  'вода',
  'помело',
  'часы'
];
let word = getRandomWord(gameWords);
let answerArray = setupAnswerArray(gameWords);
let remainingLetters = word.length;
let gameActive = document.querySelector('.game-input');
let lettersInput = gameActive.querySelector('input');
let buttonToVerif = gameActive.querySelector('button');
let gameMessage = document.querySelector('.game-input__validation');
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

const endGame = () => {
  buttonToVerif.style.display = 'none';
  let btnRestartGame = document.createElement('button');
  btnRestartGame.classList.add('game-input__btn');
  btnRestartGame.textContent = 'сыграть ещё раз';
  gameActive.append(btnRestartGame);
  btnRestartGame.addEventListener('click', () => {
    location.reload();
  })
}


const updateGameState = (value, word, arr) => {
  if (!word.includes(value)) {
    let hiddenElements = human.querySelectorAll('.hidden');
    if (hiddenElements.length === 1) {
      hiddenElements[0].classList.remove('hidden');
      gameMessage.innerHTML = 'попытки закончились :(';
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
    gameMessage.innerHTML = `браво, вы отгадали слово "${word}"!`;
    endGame();
  }
  guessWord.textContent = arr.join(' ');
}

const validateInput = (valueInput) => {
  if (!valueInput.length) {
    return 'а как же выбрать букву?';
  }

  if (valueInput.length > 1) {
    return 'можно только одну букву';
  }

  if (!VALID_SYMBOLS.test(valueInput)) {
    return 'только русские буквы и никаких цифр!';
  }

  if (answerArray.includes(valueInput)) {
    return 'эта буква уже была, попробуй другую';
  }
};

window.addEventListener('load', () => {
  guessWord.textContent = answerArray.join(' ');
});

buttonToVerif.addEventListener('click', () => {
  const valueInput = lettersInput.value;
  const errorMessage = validateInput(valueInput);

  if (errorMessage) {
    gameMessage.innerHTML = errorMessage;
    buttonToVerif.disabled = true;
    return;
  }

  gameMessage.innerHTML = '';
  updateGameState(valueInput, word, answerArray);
  lettersInput.value = '';
}
);

lettersInput.addEventListener('input', () => {
  if (lettersInput.value.length == 1 || !lettersInput.value) {
    buttonToVerif.disabled = false;
    gameMessage.innerHTML = '';
  }
});





