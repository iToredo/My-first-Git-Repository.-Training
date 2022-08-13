const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Maxim',
        age: 25,
    },
    '201': {
        name: 'Svetlana',
        age: 20,
    },
    '304': {
        name: 'Ekaterina',
        age: 35,
    },
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}

function getWinner(applicants, winnerObject) {
const arrayApplic = Object
    .keys(applicants)
    .sort((a, b) => a - b);
const minNumber = Number(arrayApplic[0]);
const maxNumber = Number (arrayApplic.at(-1));
let objectWin = '';

    while(maxNumber > 0) {
    const winnerNumber = getRandomNumberInRange(minNumber, maxNumber);
    const winIndex = arrayApplic.findIndex(num => Number(num) === winnerNumber);
        if (winIndex >= 0) {
            objectWin = arrayApplic[winIndex];
            break;
        }  
    }
    
    return {
    ...winnerObject,
    ...applicants[objectWin],
    }
}
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log(resultWinner);

//-------||--------
const todaysWin = {
    prize: '10 000$',
}
const winApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getOneWinner(applicants, winObject) {
const applicantsNumbers = Object.keys(winApplicants);
const randomNum = getRandomNumber(0, applicantsNumbers.length);
const winPersonId = applicantsNumbers[randomNum];
const winnerPerson = applicants[winPersonId];

    return {
        ...winObject,
        ...winnerPerson,
    }
}
const resultWin = getOneWinner(winApplicants, todaysWin);
console.log(resultWin);