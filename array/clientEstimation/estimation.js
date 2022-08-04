const clientEstimations = [];

const askClientToGiveEstimation = () => {
    const ask = Number;
        ask = prompt(`Как вы оцениваите нашу кофейню от 1 до 10`);
    if (ask >= 1 && ask <= 10) {
        clientEstimations.push(ask);
    }   
}
    for (let i = 1; i <= 5; i ++) {
    askClientToGiveEstimation();
    }
const bad = clientEstimations.filter(filtEst => filtEst <6);
const good = clientEstimations.filter(filtEst => filtEst >5);

alert(`Всего положительных оценок: ${good.length}; Всего отрецательных оценок: ${bad.length}`);