const coffees = ['Latte', 'Cappuccino', 'Amerecano'];
const price = [1.5, 1, 2];

const updatePrice =price.map((price) => price + 0.5); 
   
coffees.forEach((coffee, i) => {
    return alert(`Кофе ${coffee} теперь стоите ${updatePrice[i]} евро.`);
});
