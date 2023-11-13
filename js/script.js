const gameWords = ['свинья', 'чебурек', 'попыт', 'смысл', 'багет', 'илюша', 'релокация', 'козлодер', 'якубович']
let word = getRandomWord(gameWords);

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let answerArray = [];
let remainingLetters = word.length;

for (let i = 0; i < word.length; i++) {
  answerArray.push('_');
}
while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  console.log(word)
  let guess = prompt('угадай или уходи');

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('только одна буква')
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

alert(answerArray.join(" "));
alert("Вы великолепны, отгадали слово " + word);
