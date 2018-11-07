const IsogramFinder = function (word) {
  this.word = word;
}

IsogramFinder.prototype.isLetterUnique = function (letter) {
  const lettersInWord = this.word.split('');
  const filteredLettersInWord = lettersInWord.filter((wordLetter) => {
    return wordLetter.toLowerCase() === letter.toLowerCase();
  });
  let result = true;
  if (filteredLettersInWord.length > 1) {
    result = false;
  };
  return result;
};

IsogramFinder.prototype.isIsogram = function () {
  const lettersInWord = this.word.split('');
  const result = lettersInWord.every((letter) => {
    return this.isLetterUnique(letter);
  });
  return result;
}

module.exports = IsogramFinder;
