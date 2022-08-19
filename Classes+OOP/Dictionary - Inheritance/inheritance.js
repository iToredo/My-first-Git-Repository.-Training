class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, discription) {
        if(!this.words[word]) {
            this.words[word] = {
                word,
                discription,
            }
        }
    }
    remove(keyWord) {
        delete this.words[keyWord];
    }
    get(keyWord) {
        return console.log(this.words[keyWord]);
    }
    showAllWords() {
        Object.values(this.words).forEach((item) => {
            console.log(`${item.word} - ${item.discription}`);
        })
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
        this.words = {};
    }
    add(word, discription, isDifficult = true) {
        if(!this.words[word]) {
            this.words[word] = {
                word,
                discription,
                isDifficult,
            }
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
// Parent Class
const dictionary = new Dictionary('Тлумачний словник');
dictionary.add('JavaScript', 'Популярна мова програмування.');
dictionary.add('Web-developer', 'Людина, яка розробляє нові сервіси та сайти або підтримує і доповнює вже існуючі.');

dictionary.remove('JavaScript');
dictionary.showAllWords();