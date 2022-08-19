class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        if (this.age > person.age) {
            alert(`${this.name} дорослише(а) за ${person.name}`);
        } else {
            alert(`${this.name} молодше(а) за ${person.name}`);
        }
    }
} 

const person1 = new Person('Maxim', 24);
const person2 = new Person('Svetlana', 36);
const person3 = new Person('Irina', 23);

person1.compareAge(person3);
person2.compareAge(person1);
person3.compareAge(person2);