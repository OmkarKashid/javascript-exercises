const fibonacci = function(index) {
    let fibArray = [1, 1, 2];
    for (let i = 3 ; i < index; i++){
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return index > 0 ? fibArray[index - 1] : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
