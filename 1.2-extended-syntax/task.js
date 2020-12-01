'use strict'
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let discr = (b ** 2 - 4 * a * c);
    if (discr < 0) {
        return [];
    } else if (discr === 0) {
        return [((-b + Math.sqrt(discr)) / 2 * a)];
    } else {
        return [((-b + Math.sqrt(discr)) / 2 * a), ((-b - Math.sqrt(discr)) / 2 * a)];
    }
    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let marksSum = 0;
    if (marks.length === 0){
        return 0;
    } else if (marks.length > 5) {
        let firstFiveMarks = marks.slice(0, 5);
        for (let i = 0; i < firstFiveMarks.length; i++) {
            marksSum += firstFiveMarks[i];
        }
        return marksSum / firstFiveMarks.length;
    } else for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }
    return marksSum / marks.length;
    // return averageMark;
}


function askDrink(name, dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    // return result;
}