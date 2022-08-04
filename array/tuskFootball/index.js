/* const goals = [8, 1, 1, 3, 2, -1, 5]

// Самый результативный матч
let numberMatch1 = goals.findIndex(index => index === 8);
alert(`Самый результативный матч был под номером ${numberMatch1 +1 },
 в нём было забито ${goals[numberMatch1]} голов.`);

// Самые не результативные матчи
const numbersGame = [];
let idGame = goals.indexOf(1)
for (let i = 0; i <= goals.length; i++) {
    if (idGame != -1) {
        numbersGame.push(idGame)
        idGame = goals.indexOf(1, idGame + 1)
    }
}
let numbersGame1 = numbersGame.map(number => number + 1);
const goalsGame = goals.filter(goals => goals > 0 && goals <2  );
alert(`Самые не результативные матчи были под номерами ${numbersGame1}. 
 В каждом из них было забито по ${goalsGame} мячу`);

 // Общее количество голов за сезон
const allGoals = goals.reduce((acc, goals) => {
    return goals + acc;
}, 1);
alert(`Общее количество голов за сезон равно ${allGoals}.`);

// Авто-поражения
let autoGoal = goals.some(goals) => goals < 0;);
    if(autoGoal === true ) {
    autoGoal === String(autoGoal = `Да`);
    } else {
    autoGoal === String(autoGoal = `Нет`);
     }
alert(`Были атоматические поражения: ${autoGoal}.`);

// среднее количество голов за матч
alert(`Среднее количество голов за матч равно ${allGoals / goals.length}.`)

// Отсортированый массиы по возрастанию
const sortGoals = goals.sort((a,b )=> {
    return a-b;
});
alert(sortGoals);  */

//----------------------

const goals = [8, 1, 1, 3, 2, -1, 5];

let maxNumberOfGoals = goals[0];
let maxNumberOfGoalsIndex = 0;

let minNumberOfGoals = goals[0];

goals.forEach ((goalNumber, index) => {
    if(goalNumber > maxNumberOfGoals) {
        maxNumberOfGoals = goalNumber;
        maxNumberOfGoalsIndex = index;
    } 
    if(goalNumber < minNumberOfGoals && goalNumber >= 0 ) {
        minNumberOfGoals = goalNumber;
    }
});
console.log(minNumberOfGoals);

const matchesWithMinNumberOfGoals = goals
    .map((goalNumber, index) => goalNumber === minNumberOfGoals ? index +1 : -1)
    .filter ((goalNumber) => goalNumber > 0);
console.log( matchesWithMinNumberOfGoals);

alert(`Самый результативный матч был под номером ${maxNumberOfGoalsIndex + 1}.
 В нем было забито ${maxNumberOfGoals} гол(ов).`);
alert(`Самые не результативные матчи были под номерами ${matchesWithMinNumberOfGoals.join(',')}.
 В каждом из них было забито ${minNumberOfGoals} мяча(у).`);

const numberOfGoalsPerSeason = goals.reduce ((acc, numberGoal) => {
    return numberGoal >= 0 ? acc + numberGoal : acc;
}, 0);
alert(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason}`);

const wereAutomaticLoses = goals.some((numberGoal) => numberGoal <0);
if (wereAutomaticLoses) {
    alert(`Были автоматические поражения: Да.`);
} else {
    alert(`Были автоматические поражения: Нет.`);
};

const averageNumberOfGoalsPerMatch = numberOfGoalsPerSeason / goals.length;
alert(`Среднее количество голов за матч равно ${averageNumberOfGoalsPerMatch}`);

const ascendingOrderGoals = [...goals].sort((a,b) => a - b);
alert(ascendingOrderGoals.join(`,`));