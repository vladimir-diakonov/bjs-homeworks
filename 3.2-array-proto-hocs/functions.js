'use strict'

//task 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
let getNames = () => weapons.map(weapons => weapons.name);
let getCountReliableWeapons = (durability) => weapons.filter(weapons => weapons.durability > durability).length;
let hasReliableWeapons = (durability) => weapons.some(weapons => weapons.durability > durability);
let getReliableWeaponsNames = (durability) => weapons.filter(weapons => weapons.durability > durability).map(weapons => weapons.name);
let getTotalDamage = () => weapons.reduce((allDamage, weapons) => allDamage + weapons.attack, 0);

function getValuestCountToSumValues(arr, value) {
  let numQuantity = 1
  arr.reduce((sum, num) => {
    sum += num;
    if (sum < value) {
      numQuantity ++;
    } return sum;
  }, 0);
  return numQuantity
}

//task 3.2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

function memorize(fn, limit) {
  let memory = [];
  return (...args) => {
    let result = memory.find(answer => compareArrays(answer.args, args));
    if (result) {
      return result.result;
    } else {
      result = fn(...args);
      memory.push({
        args: args,
        result: result
      });
      if (memory.length > limit) {
        memory.shift();
      } return result;
    }
  }
}