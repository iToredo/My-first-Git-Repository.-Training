const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"];
const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a));

let getMatchResult = (expression) => {
    let correctExpression = [...expression];
    if ( expression.length >3 ) {
        correctExpression = correctExpression.filter(
            (item) => isNumber(item) || possibleMathSigns.includes(item)
        );
        

    }
    const firstNumber = Number(correctExpression[0]);
    const secondNumber = Number(correctExpression.at(-1))
    const mathPossible = correctExpression[1]

    if (correctExpression.length < 3 ||
        expression.length < 3 ||
        !isNumber(firstNumber) ||
        !isNumber(secondNumber)||
        !possibleMathSigns.includes(mathPossible)) {
            return 'error'
        }

    switch (mathPossible) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        case '=':
            return firstNumber = secondNumber;
        case '>':
            return firstNumber > secondNumber;
        case '<':
            return firstNumber < secondNumber;
        default : 
            return 'error'
    }  

}
const result = getMatchResult([100, '+', '101', 650, 'kek', '10', 'rofl']);

console.log( result );