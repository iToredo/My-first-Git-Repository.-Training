class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    } 
    set setMainName(mainName) {
        this.#name = mainName;
    }

    get allWords() {
        return this.#words;
    }

    addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj;
    }
    
    add(word, discription) {
        if(!this.#words[word]) {
            const newWords = {word, discription}
            this.addNewWord(word, newWords);
        }
    }
    remove(keyWord) {
        delete this.#words[keyWord];
    }
    get(keyWord) {
        return console.log(this.#words[keyWord]);
    }
    showAllWords() {
        Object.values(this.#words).forEach((item) => {
            console.log(`${item.word} - ${item.discription}`);
        })
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }

    add(word, discription) {
        if(!this.allWords[word]) {
            this.addNewWord(word, {
                word,
                discription,
                isDifficult: true,
            })
        }
    }
   
}

// Inheritance Class
const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName);
hardWordsDictionary.setMainName = 'New Dictionary';
console.log(hardWordsDictionary.mainName);
console.log(hardWordsDictionary.allWords)
