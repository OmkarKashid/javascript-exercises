const findTheOldest = function(people) {
    let oldestPeople = people.sort((a, b) => {
                            if (!a.yearOfDeath){
                                a.yearOfDeath = new Date().getFullYear();
                            }
                            if (!b.yearOfDeath){
                                b.yearOfDeath = new Date().getFullYear();
                            }
                            if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
                                return -1;
                            }
                            else{
                                return 1;
                            }
                        });
    return oldestPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
