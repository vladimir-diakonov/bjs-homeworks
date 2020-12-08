'use strict'
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let S = amount - contribution;
    let n = (date.getMonth() - new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) * 12);
    let P = percent / 12;
    const payment = S * (P+P / (((1 + P) ** n) - 1));
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
        return 'все поля должны содержать числа';
    } else return payment.toFixed(2);
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let nameCheck = name.trim();
    return `Привет, мир! Меня зовут ${name || 'Аноним'}.`
    // return greeting;
}