const AnagramFinder = function (word) {
 this.word = word;
}

AnagramFinder.prototype.isAnagram = function (otherWord) {
  const wordSorted = this.word.toLowerCase().split('').sort().join(); //to toLowerCase
  const otherWordSorted = otherWord.toLowerCase().split('').sort().join();
  let result = true;
  if (wordSorted !== otherWordSorted) {
    result = false;
  } else if (this.word === otherWord) {
    result = false;
  };
  return result;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const result = otherWords.filter((word) => {
    return this.isAnagram(word);
  });
  return result;
}

module.exports = AnagramFinder;


// are words anagrams - split into arrays of letters, sort the arrays, check if the same
