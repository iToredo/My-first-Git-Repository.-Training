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

const dictionary = new Dictionary('Тлумачний словник');
dictionary.add('JavaScript', 'Популярна мова програмування.');
dictionary.add('Web-developer', 'Людина, яка розробляє нові сервіси та сайти або підтримує і доповнює вже існуючі.');

//dictionary.remove('JavaScript');
dictionary.showAllWords();