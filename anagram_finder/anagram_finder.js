const AnagramFinder = function (word) {
 this.word = word;
}

AnagramFinder.prototype.isAnagram = function (otherWord) {
  const wordArraySorted = this.word.split('').sort(); //to toLowerCase
  const otherWordArraySorted = otherWord.split('').sort();
  let wordSorted = "";
  for (const letter of wordArraySorted) {
    wordSorted + letter;
  };
  let otherWordSorted = "";
  for (const letter of otherWordArraySorted) {
    otherWordSorted + letter;
  };
  let result = false;
  if (wordSorted === otherWordSorted) {
    let result = true;
  }
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {

}

module.exports = AnagramFinder;


// are words anagrams - split into arrays of letters, sort the arrays, check if the same
