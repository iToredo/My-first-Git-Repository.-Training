const showSuccessMessage = (message) =>
    console.log(message);
const showErrorMessage = (message) =>
    console.error(message);

function checkTextOnErroreMessage(text, errorSymbol, successCallback, errorCallback) {
let pos = 0;
    while (true) {
let iSymbol = text.indexOf(`${errorSymbol}`, pos);
    if (iSymbol === -1) break;
    errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${iSymbol}.`);
    pos = iSymbol + 1;
    }
    if (!text.includes(`${errorSymbol}`)) {
    successCallback(`В данном тексте нет запрещенных символов!`);
    }
}
const text = `Привет! Как Дела! Давно мы с тобой не виделись.`;

checkTextOnErroreMessage(text, '2', showSuccessMessage, showErrorMessage);