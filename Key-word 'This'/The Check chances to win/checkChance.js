const attacker = {
    archer: 30,
    footSolder: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin (defenderObjeckt) {
        const enemyValues = Object.values(defenderObjeckt);
        const attackerValues = Object.values(this);
        let ourChances = 0;
        attackerValues.forEach((item, id) => {
            if (item > enemyValues[id] && typeof item === 'number') {
                return ourChances += 1 ;
            }
        });
        return [ourChances, enemyValues.length];
    },
    improveArmy () {
        Object.entries(this).forEach((item) => {
            const key = item[0]
            const value = item[1]

            if ( typeof value === 'number') {
                this[key] = value + 5;
            }
        });
    //    this.archer += 5;
    //    this.footSolder += 5;
    //    this.cavalry += 5;
    //    this.artillery += 5;
    },
    attack (defender) {
        // while (0 < 999) {
        const chance = this.checkChancesToWin(defender);
        const seventyPercentChances = Math.round(chance[1] * 70 / 100);
            if (chance[0] < seventyPercentChances) {
                this.improveArmy();
                alert (`Нащі сили однакові ${chance[0]}/${chance[1]}`);
                
            } else {
                alert (`Ми набрали достатньо сил! Це наш шанс! Ми переможемо!`);
                // break;
            }
        // }
    },
}

const defender = {
    archer: 33,
    footSolder: 50,
    cavalry: 40,
    artillery: 10,
}
//attacker.attack.call(attacker, defender);
attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender);






    
