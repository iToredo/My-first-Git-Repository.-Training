const student = {
    name: 'Denys',
    programLanguage: 'JavaScript',
};

const handleObject = ((object, key, action) => {
    switch (action) {
        case 'add':
            object[key] = "";
            return object;
        case 'get':
            return object[key];
        case 'delete':
            delete object[key];
            return object;
        default: 
            return object;
    } 
});

const result = handleObject(student, 'name', 'delete');
console.log(result);