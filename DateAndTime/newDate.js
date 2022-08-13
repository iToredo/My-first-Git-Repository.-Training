// #1
date = {
    day: 0,
    month: 0,
    year: 0,
}
date.day += prompt('Write day of the month?');
date.month += prompt('Write month (Number)');
date.year += prompt('Write year');

const addZero1 = (numberStr => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr));

const getDateFormat = ((date, separator) => {
    const newData = new Date(date.year, date.month -1, date.day);
    const numberDay = newData.getDate();
    const month = newData.getMonth() + 1;
    const year = newData.getFullYear();
    const arrayDate = [numberDay, month, year]. map(items => addZero1(items));
    
    return arrayDate.join(separator);
});

const resultDate = getDateFormat( date, '.')
console.log('Your data:', resultDate)

//_____||_____ #2 options 

const addZero = (numberStr => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr));

function getDateForm (date, separator = '-') {
    const dateItem = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateArray = [dateItem, month, year ].map(item => addZero(item));

    return dateArray.join(separator);
}
console.log('Date today :', getDateForm(new Date()));