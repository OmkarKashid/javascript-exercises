const palindromes = function (word) {
    const changedWord = word.toLowerCase().replace(/[^a-z]/g, "");
  return changedWord.split("").reverse().join("") == changedWord;
};

// Do not edit below this line
module.exports = palindromes;
