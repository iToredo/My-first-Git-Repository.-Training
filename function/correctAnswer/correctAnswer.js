const checkQuestionAnswer = (question, correctAnswer) => {
const successMessege = (`Ответ верный!`);
const errorMessege = (`Ответ не верный`);

    question = prompt(question);
    question = question.trim().toLowerCase();
    if ( question === correctAnswer.toLowerCase() ){
        alert(successMessege);
    } else {
        alert(errorMessege);
      }
}
checkQuestionAnswer('Арбуз это фрукт или ягода?','Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?','Колибри'); 