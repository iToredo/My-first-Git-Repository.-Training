const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack () {
        console.log(`${this.fullName} зараз з м'ячем та починає атаку!`);
    },
    scoreGoal (sound) {
        console.log(`${this.fullName} забив гол!!! Оце таак!`);
        return this.celebrate(sound);
    },
    celebrate (sound) {
        console.log(sound);
    },
    goToSubstitution : function(newPlayer) {
        console.log(`${this.fullName} йде з поля, його замінить ${newPlayer}`);
    },
}

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack.bind(footballer)();
score.call(footballer, 'OLEE-OLE-Ole-olee');
substitute.apply(footballer, ['Paulo Dibala']);