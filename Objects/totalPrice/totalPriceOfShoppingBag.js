const groceries = {
    'Chocolate': {
        price: 2,
        discount: 0,
    },
    'Orange juce': {
        price: 1.5,
        discount: 10,
    },
    'Chipces': {
        price: 7,
        discount: 20,
    },
}
const shoppingBag = [
    { product: 'Chipces', quantity: 3 },
    { product: 'Orange juce', quantity: 23 },
    { product: 'Chocolate', quantity: 3 },
]

function getTotalPriceOfShoppingBag(shoppingBag) {
    Object.values(groceries)
          .map((product) => product.price -= (product.price * product.discount / 100));
    
    const updateShoppingBag = shoppingBag.reduce(( acc, quantiProd ) => {
        return acc + (quantiProd.quantity * groceries[`${quantiProd.product}`].price);
    }, 0);

    return updateShoppingBag.toFixed(2);
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log(totalPrice); 

//-----||------- 2

const groceriesAlcohol = {
    'Wine': {
        price: 11, 
        discount: 5, 
    },
    'Rom': {
        price: 10,
        discount: 0,
    },
    'Teqila': {
        price: 15,
        discount: 1.5,
    },
}

const alcoBag = [
    { product: 'Teqila', quantity: 3 },
    { product: 'Wine', quantity: 5 },
    { product: 'Rom', quantity: 10 },
]

function getTotalPriceOfAlcoBag(shoppingAlcoBag) {
const alcoProducts = Object.values(shoppingAlcoBag);

    if (alcoProducts.length === 0) {
        return 0;
    }

    const totalPriceAlco = alcoProducts.reduce((acc, currentAlco) => {
        const { product, quantity } = currentAlco;
        const alcoObject = groceriesAlcohol[product];
        const { price, discount } = alcoObject;
        const discountPrice = price - (price * discount / 100);
        let totalPriceProduct = discountPrice * quantity;
        return acc + totalPriceProduct;
    }, 0);
    
    return totalPriceAlco.toFixed(2);
}

 const totalPriceAlco = getTotalPriceOfAlcoBag(alcoBag);
 console.log(totalPriceAlco);
