const userPassword = prompt('Введите пароль');
const errormassege = ('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте еще раз.');
const successMessage = ('Пароль валидный! Добро пожаловать в аккаунт!');

if ( userPassword.length <3 || userPassword.length >20 ) {
    alert(errormassege);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (let i = 0; i < userPassword.length; i++) {
    const symbol = userPassword[i];
    const isNumberSymbol = Number (symbol);
    if (symbol === symbol.toUpperCase() && !isNumberSymbol ) {
    hasBigSymbol = true;
    } if (isNumberSymbol) {
    hasNumbers=true;
    }
  }
  if (!hasBigSymbol || !hasNumbers) {
    alert(errormassege);
  } else {
    alert(successMessage);
  }
}

//-----
let userPassword1 = prompt('Введите пароль');
    
if (userPassword1.length >=3 && userPassword1.length <20 &&
    userPassword1.search(/[A-Z]/) >=1 && userPassword1.search(/[0-9]/) >=1)  {
        alert(`Пароль валидный! Добро пожаловать в аккаунт!`);
} else {
    alert(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте еще раз.`);
}