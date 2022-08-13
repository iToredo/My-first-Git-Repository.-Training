function getKiller(suspectInfo, deadPeople) {
let nameKiller = '';
Object.entries(suspectInfo).forEach((data) => {
    const suspectPersons = data[0];
    const peopleWereSeen = data[1];
    const findKiller = deadPeople.every((peopleDead) => peopleWereSeen.includes(peopleDead));
        if (findKiller) {
            nameKiller = suspectPersons;
        }
});
    return console.log(nameKiller);
}

getKiller(
    {
        'Sena': ['David', 'Kyle', 'Lucas'],
        'Seda': ['Jacob', 'Bill', 'Lucas'],
        'Jora': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
);
