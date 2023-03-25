const reverseString = function(word) {
    const givenWordArr = Array.from(word);
    let reverseWordArr=[];
    for(let i = givenWordArr.length - 1; i>=0; i--){
        reverseWordArr.push(givenWordArr[i]);
    }
    return reverseWordArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
