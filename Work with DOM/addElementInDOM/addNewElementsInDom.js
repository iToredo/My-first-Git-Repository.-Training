const body = document.querySelector('body');
body.innerHTML = 
`<form class="create-user-form"> 
    <label>
        Ім'я
        <input type="text" name="userName" placeholder="Введіть ваше ім'я">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Вигадайте пароль">
    </label>
    <button type="submit">
         Підтвердіть
    </button>
</form>`; 
console.log(body.innerHTML);

const createLabelWithInput = (content, name, type, placeholder) => {
    const labelInputContainer = document.createElement('label');
    labelInputContainer.textContent = content;

    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;

    labelInputContainer.append(input);

    return labelInputContainer;
} 
const registerContainer = document.createElement('form');
registerContainer.className = 'create-user-form';

const labelName = createLabelWithInput(
    "Ім'я", "username", "text", "Введіть ваше ім'я" );
const labalPassword = createLabelWithInput(
    'Пароль', "password", "password", "Вигадайте пароль");

const acceptButton = document.createElement('button');
acceptButton.type = "submit";
acceptButton.textContent = "Підтвердити";

registerContainer.append(labelName, labalPassword, acceptButton );
body.prepend(registerContainer);

console.log(body);

