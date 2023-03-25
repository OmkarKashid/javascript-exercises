const removeFromArray = function(array, ...removeElements) {
    removeElements.forEach(removeElement => {
        array.forEach(arrayElement => {
            if(arrayElement === removeElement){
                let index = array.indexOf(arrayElement);
                array.splice(index, 1);
            }
        });
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
