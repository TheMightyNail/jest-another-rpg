const Potion = require('../lib/Potion');

function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.inventory = [new Potion('health'), new Potion()];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;