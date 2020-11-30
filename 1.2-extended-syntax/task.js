function getResult(a,b,c){
    // код для задачи №1 писать здесь
    'use strict'
    let discr = (b ** 2 - 4 * a * c);
    let x;
    let x1;
    if (discr < 0) {
        return [];
    } else if (discr === 0) {
        return [x = ((-b + Math.sqrt(discr)) / 2 * a)];
    } else {
        return [x = ((-b + Math.sqrt(discr)) / 2 * a), x1 = ((-b - Math.sqrt(discr)) / 2 * a)];
    }
    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return 0;
    } else if (marks.length === 1) {
        return marks[0];
    } else if (marks.length === 2) {
        return (marks[0] + marks[1]) / marks.length;
    } else if (marks.length === 3) {
        return (marks[0] + marks[1] + marks[2]) / marks.length;
    } else if (marks.length === 4) {
        return (marks[0] + marks[1] + marks[2] + marks[3]) / marks.length;
    } else return (marks[0] + marks[1] + marks[2] + marks[3] + marks[4]) / 5;
    // return averageMark;
}

function askDrink(name, dateOfBirthday){
    // код для задачи №3 писать здесь
    let birthday = new Date(dateOfBirthday);
    let yearNow = new Date();
    let age = (yearNow.getFullYear() - birthday.getFullYear());
    return age;
    // return result;
}