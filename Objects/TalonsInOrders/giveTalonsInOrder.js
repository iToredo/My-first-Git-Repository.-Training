const ordersArr = [4, 1, 2, 3];
const people = [
    {id:1, name: 'Максим'},
    {id:2, name: 'Николай'},
    {id:3, name: 'Ангелина'},
    {id:4, name: 'Виталий'},
];
// 1
const giveTalonsInOrder = ((patients, orders) => {
    let sortPatient = [];
        orders.forEach((i) => {
            let findObj = patients.find(person => {
                if (i === person.id) {
                    return sortPatient.push(person);
                } 
            });
            return findObj;
        });
    return sortPatient;
});

const result = giveTalonsInOrder(people, ordersArr);
    console.log(result);
//----------------- || -------------------
// 2
const giveTalonsInOrder1 = ((patients, orders) => {
    const objectWithIndexes = patients.reduce(( acc, curPerson) => {
        acc[curPerson.id] = curPerson;
        return acc;
    }, {});

    return orders.map(patientsId => objectWithIndexes[patientsId]);
})    
const result1 = giveTalonsInOrder1(people, ordersArr);
    console.log(result1);
