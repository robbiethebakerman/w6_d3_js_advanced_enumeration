const assert = require('assert');
const IsogramFinder = require('./isogram_finder.js');

describe('IsogramFinder', function () {
  it('should be able to detect an isogram', function () {
    const isogramFinder = new IsogramFinder('subdermatoglyphic');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  it('should be able to detect a non-isogram', function () {
    const isogramFinder = new IsogramFinder('repeated');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });

  it('should be able to detect an isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('Uncopyrightable');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  it('should be able to detect a non-isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('NotAnIsogram');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });

  it('should be able to detect if a letter is unique in the word', function () {
    const isogramFinder = new IsogramFinder('rhythm');
    assert.strictEqual(isogramFinder.isLetterUnique('r'), true);
  });

  it('should be able to detect if a letter is not unique in the word', function () {
    const isogramFinder = new IsogramFinder('meddle');
    assert.strictEqual(isogramFinder.isLetterUnique('d'), false);
  });

  it('should be able to detect if a letter is unique in the word case insensitively', function () {
    const isogramFinder = new IsogramFinder('Rhythm');
    assert.strictEqual(isogramFinder.isLetterUnique('r'), true);
  });

  it('should be able to detect if a letter is not unique in the word case insensitively', function () {
    const isogramFinder = new IsogramFinder('Demand');
    assert.strictEqual(isogramFinder.isLetterUnique('d'), false);
  });



});
