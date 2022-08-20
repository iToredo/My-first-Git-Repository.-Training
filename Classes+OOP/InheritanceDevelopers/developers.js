class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }
    
    code() { }

    learnNewTechnology(technology) {
        this.technologies.push(technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior');
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        console.log('Junior розрoбник, пише код');
    }
}

class MiddleDeveloper extends Developer  {
    constructor(fullName, age) {
        super(fullName, age, 'Middle');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }
    code() {
        console.log('Middle розробник пише код.');
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Senior');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
        console.log('Senior розробник пише код.');
    }
}

// const developers = new Developer()
const juniorDeveloper = new JuniorDeveloper('Anastasia', 20);
const middleDeveloper = new MiddleDeveloper('Igor', 25);
const seniorDeveloper = new SeniorDeveloper('Denys', 30);

juniorDeveloper.code();
middleDeveloper.code();
seniorDeveloper.code();

console.log(juniorDeveloper.fullName, juniorDeveloper.age,
    juniorDeveloper.position, juniorDeveloper.technologies);
console.log(middleDeveloper.fullName, middleDeveloper.age,
    middleDeveloper.position, middleDeveloper.technologies);
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
    seniorDeveloper.position, seniorDeveloper.technologies);

