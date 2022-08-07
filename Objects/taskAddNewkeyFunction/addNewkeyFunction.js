const student = {
    fullName: 'Denys',
    experienceInMonths: 1,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа.Теперь он ${jobName}.`);
    return {
        ...student,
        job: jobName,
    }
}

const updateStudent = giveJobToStudent(student, 'Web-developer');
console.log(updateStudent);