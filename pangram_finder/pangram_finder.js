const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const result = this.alphabet.every((character) => {
    return this.phrase.includes(character) || this.phrase.includes(character.toUpperCase());
  });
  return result;
}

module.exports = PangramFinder;
