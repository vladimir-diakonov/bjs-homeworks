'use strict'

//task 2.2.1
//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function() {
    let example = this.toLowerCase().split(' ').join('');
    if (example === example.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

//task 2.2.2
function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
    if (marks.length === 0) {
        return 0;
    } else {
        let marksSum = 0;
        for (let i = 0; i < marks.length; i++) {
            marksSum += marks[i];
        }
        //let average = marksSum / marks.length
        //let roundedAverage = Math.round(average);
        //return roundedAverage;
        return Math.round(marksSum / marks.length);
    }
}

//task 2.2.3
function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
    let now = Date.now();
    let dateOfBirthday = Date.parse(birthday);
    let diff = now - dateOfBirthday;
    let age = diff / 3.156e+10;
    if (age > 18) {
        return true;
    } else return false;
}