const getSumSequence = (number) => {
const numberArrey =[];
    for (let i = 1; i <= number; i++) {
        numberArrey.push(i);
    }
    return numberArrey[0] + numberArrey[numberArrey.length -1] ;
};
const result = getSumSequence(10);
console.log(result);