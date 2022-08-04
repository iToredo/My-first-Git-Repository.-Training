const coffees = ['Latte', 'Cappuccino', 'Amerecano'];

let coffeeName = prompt('Поиск кофе по названию:');
    coffeeName = coffeeName.trim().toLocaleLowerCase();
    // coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(2 -1);

const idCoffee = coffees.findIndex((coffee) =>{
    return coffee.toLocaleLowerCase() === coffeeName;
});

const favoritCoffee = coffees[idCoffee];
    if (favoritCoffee) {
alert(`Держите ваш любимый кофе ${favoritCoffee}.
        Он ${idCoffee + 1}-й по популярности в нашей кофейне. `);
    } else {
alert(`К сожалению такого вида кофе нет в наличии. `);
      };