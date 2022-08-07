const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bobe',
        status: 'online',
        lastActivity: 104
    },
];

const usersOnline = users.filter((person) => person.status === 'online');
const usersNameOnline = usersOnline.map((uNames) => uNames.username).join(',');
    alert(`Сейчас в онлайне следующие пользователи: ${usersNameOnline}`);

    

