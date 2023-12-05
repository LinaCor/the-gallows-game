const VALID_SYMBOLS = /^[а-я]$/i;
const gameWords = ['небо', 'чебурек', 'дратути', 'смысл', 'илюша', 'релокация', 'отпуск', 'кейс'];
let word = getRandomWord(gameWords);
let answerArray = setupAnswerArray(gameWords);
let remainingLetters = word.length;
let lettersInput = document.querySelector('.game-input input');
let buttonVerif = document.querySelector('.game-input button');
let valueInputValidate = document.querySelector('.game-input__validation');
let guessWord = document.querySelector('.game-result__word');
let animationValue = document.querySelector('.game-animation__container');


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

function updateGameState(value, word, arr) {
  for (let j = 0; j < word.length; j++) {
    if (word[j] === value) {
      if (arr[j] == value) {
        break;
      }
      arr[j] = value;
      remainingLetters--;
    }
  }
  guessWord.textContent = arr.join(' ');
}

window.addEventListener('load', () => {
  guessWord.textContent = answerArray.join(' ');
})


buttonVerif.addEventListener('click', () => {
  const valueInput = lettersInput.value;
  const tryLettersCounter = document.querySelector('.game__counter');
  let attemptCounter = Number(tryLettersCounter.textContent);

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

  if (attemptCounter > 0 && valueInput.length == 1 && VALID_SYMBOLS.test(valueInput)) {
    tryLettersCounter.textContent = --attemptCounter;
    valueInputValidate.innerHTML = '';
    updateGameState(valueInput, word, answerArray);
    lettersInput.value = '';
  }

  if (attemptCounter == 0 && remainingLetters !== 0) {
    animationValue.innerHTML = 'Кончились попытки';
  } else if (remainingLetters.length === 0) {
    animationValue.innerHTML = `Вы великолепны, отгадали слово ${word}`;
  }
})

lettersInput.addEventListener('input', () => {
  if (lettersInput.value.length == 1 || !lettersInput.value) {
    buttonVerif.disabled = false;
    valueInputValidate.innerHTML = '';
  }
})





