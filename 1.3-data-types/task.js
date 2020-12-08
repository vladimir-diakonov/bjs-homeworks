'use strict'
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let S = amount - contribution;
    let n = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date ().getMonth());
    let p = percent / 1200;
    let monthPayment = S * (p + p / ((Math.pow((1 + p), n)) - 1));
    let payment = monthPayment * n;
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
        return 'все поля должны содержать числа';
    } else return +payment.toFixed(2);
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let nameCheck = name.trim();
    return `Привет, мир! Меня зовут ${name || 'Аноним'}.`
    // return greeting;
};