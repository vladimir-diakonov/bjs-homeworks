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
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}