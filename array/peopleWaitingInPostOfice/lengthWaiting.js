const peopleWaiting = ['Кристина', 'Олег','Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
let lengthWaiting = 0;
const giveParcel = () => {
    if (lengthWaiting <= 2) {
        lengthWaiting +=1;
const nameGiveParsel = peopleWaiting.shift()
    alert (`${nameGiveParsel} получил(а) посылку и ушел(ла) из очереди. В очереди осталось ${peopleWaiting.length} человек.`);
    } 
}
const leaveQueueWithoutParsel =() => {
    if (lengthWaiting >2 || !peopleWaiting.length < 0) {
let nameLeave = peopleWaiting.shift();
    alert (`${nameLeave} не получил(а) посылку и ушел(ла) из очереди.`);
    }  
}
for (let i = 0; i = peopleWaiting.length; i++ ){
    giveParcel();
    leaveQueueWithoutParsel(); 
};