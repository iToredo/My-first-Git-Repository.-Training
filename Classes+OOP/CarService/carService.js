class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }
    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours || CarService.DefaultWorkingHours;
    }

    repairCar(carName) {
        if (!carName || typeof carName !== 'string') {
            return console.error('Вам необхідно вказати назву вашого автомобіля, щоб полагодити його');
        } else {
            const nowDate = new Date();
            const nowTime = nowDate.getHours();

            const fromTime = Number(this.workingHours.from.split(':')[0]);
            const tillTime = Number(this.workingHours.till.split(':')[0]);

                if(nowTime >= fromTime && nowTime <= tillTime) {
                    alert(`Зараз відремонтуємо ваш ${carName}. Будь ласка очікуйте.`);
                } else {
                    alert(`Вибачте, мы зараз зачинені! Приходьте до нас завтра ми працюємо з ${this.workingHours.from} до ${this.workingHours.till}.`);
                }
            // console.log(nowDate);
        }
    }
}

const carService = new CarService('Автомайстерня дядко Бена', {from: '9:00', till: '20:00'});
carService.repairCar('BTR');