const getDevisorsCount = (number = 1) => {
    if (!Number.isInteger(number) || number === 0) {
     alert(`${number} должно быть целым числом`)
    }
let inT = 0;
let i = 1;

    do { 
    let isInt = number / i;
        i++;
      if (Number.isInteger(isInt)) {
        inT +=1;
      }    
    } while ( i <= number );
    return inT;  
}
const result = getDevisorsCount (12);
console.log( result );