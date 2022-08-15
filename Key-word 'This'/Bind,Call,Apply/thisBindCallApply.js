const dog = {
    name: 'Charli',
    type: 'dog',
    makeSound () {
        return 'gav-gav';
    }
}

const bird = {
    name: 'Vuddy',
    type: 'bird',
    makeSound () {
        return 'Chick-chirick';
    }
}

function makeDomestic (isDomestic) {
    console.log(`${this.type} якого звуть ${this.name} який каже ${this.makeSound()}`);
    return {
        ...this,
        isDomestic,
    }
}

console.log(makeDomestic.call(bird, true));
makeDomestic.apply(bird, [false]);
makeDomestic.bind(dog, true) ();


