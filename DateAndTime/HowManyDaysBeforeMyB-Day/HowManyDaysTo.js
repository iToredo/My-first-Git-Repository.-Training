const convertMsToDay = (ms => Math.round(ms / (1000*60*60*24)));

function getDaysBeforeBirthday( dateBD ) {
    const nowDate = new Date();
    const msBeforeBirthday = dateBD - nowDate;
    return convertMsToDay(msBeforeBirthday);

}
console.log( getDaysBeforeBirthday(new Date(2022, 11, 06)));