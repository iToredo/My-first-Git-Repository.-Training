const convertMsToDays = (days) => days * 24 * 3600 * 1000;

function addDays(date, days = 1) {
    return new Date( date.getTime() + convertMsToDays(days));

}
const date = new Date();
const newData = addDays(date, 10);
console.log(newData);