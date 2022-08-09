const hero = {
    name: 'Pepsi',
    healt: 100,
    heatEnemy: (enemy) => enemy.healt -= 10,

}
const enemy = {
    name: 'Coca Cola',
    healt: 100,
    heatHero: (hero ) => hero.healt -= 10,
}

function getRandomNumberInRange(min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.healt > 0 || enemyPlayer > 0 ) {
        const randomInt = getRandomNumberInRange(0, 1);
        if (randomInt === 0) {
            heroPlayer.heatEnemy(enemyPlayer);
            if (enemyPlayer.healt <= 0) { 
                break;
            }    
        } else {
            enemyPlayer.heatHero(heroPlayer);
            if (heroPlayer.healt <=0) {
                break;
            }
        } 
    }    
    if (heroPlayer.healt <= 0) {
        return alert(`${enemyPlayer.name}, Win! He has ${enemyPlayer.healt} Heal Points `);
    } else {
        return alert(`${heroPlayer.name}, Win! He has ${heroPlayer.healt} Heal Points`);
    }
   
}
startGame(hero, enemy);

