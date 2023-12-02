const gameWords = ['небо', 'чебурек', 'дратути', 'смысл', 'илюша', 'релокация', 'отпуск', 'кейс'];
let word = getRandomWord(gameWords);
let answerArray = setupAnswerArray(gameWords);
let remainingLetters = word.length;
let attemptCounter = 10;

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

function showAnswerAndCongratulatePlayer() {
  if (attemptCounter == 0 && remainingLetters !== 0) {
    alert('Кончились попытки');
  } else if (remainingLetters.length === 0) {
    alert('Вы великолепны, отгадали слово ' + word);
  }
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
}

while (remainingLetters > 0 && attemptCounter > 0) {
  alert(answerArray.join(" "));
  let guess = prompt('угадай или уходи');
  attemptCounter--;

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('только одна буква')
  } else {
    updateGameState(guess, word, answerArray);
  }
}

showAnswerAndCongratulatePlayer();

