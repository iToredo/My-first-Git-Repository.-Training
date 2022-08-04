let arrayMatrix = [];

let arrayAddMatrix = ((numberMatrix, numberItem) => {
    for (let i = 1; i <= numberMatrix; i++) {
        arrayMatrix.push(matrix = []);
    for (let i = 1; i <= numberItem; i++) {
        matrix.push(i);
        }
    }
});
arrayAddMatrix(3, 5);
console.log(arrayMatrix);

//matrix ====> just array, no use Flat;
const matrixArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const justArrey = [
    ...matrixArr[0],
    ...matrixArr[1],
    ...matrixArr[2],
];
//  ||
const noMatrix = matrixArr.reduce((acc,arrey) => acc.concat(arrey));

console.log(noMatrix);
