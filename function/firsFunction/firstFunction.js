const getName2 = function(Name) { 
    return `Ваше имя равно ${Name}`;
};
function getName1(Name){
    return `Имя равно ${Name}`;
};
const getName3 = Name => `Имя ровняется ${Name}`;

console.log( getName1('Deny1'));
console.log( getName2('Deny2'));
console.log( getName3(`Deny3`));