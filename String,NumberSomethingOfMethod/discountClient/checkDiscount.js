let clientName = prompt('Введите имя клиента');
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
let clietnSpentToday = prompt('Сколько клиент потратил за сегодня?');
let discount = 0;
 
    clientSpentForAllTime = Number(clientSpentForAllTime.trim());
    clietnSpentToday = Number(clietnSpentToday.trim());

if ( !Number(clientSpentForAllTime) || !Number(clietnSpentToday) ) {
  alert(`Сумма которую клиент потратил за все времяи за сегодня, 
  должна быть числом! Перезагрузите страницу, чтобы повторить попытку.`); 
}

  if ( clientSpentForAllTime >=100 && clientSpentForAllTime <=299 ) {
    discount = 10;
    alert(`Вам предоставляется скидка в ${discount}%`);
} else if (clientSpentForAllTime >=300 && clientSpentForAllTime <=499 ) {
    discount = 20;
    alert(`Вам предоставляется скидка в ${discount}%`);
} else if (clientSpentForAllTime >=500) {
    discount = 30;
    alert(`Вам предоставляется скидка в ${discount}%`);
}

clietnSpentToday = clietnSpentToday - (clietnSpentToday * discount / 100);
clientSpentForAllTime += clietnSpentToday;

alert(`Спасибо, ${clientName}! К полате ${clietnSpentToday}$.
 За все время в нашем заведении вы потратили ${clientSpentForAllTime}$. `);