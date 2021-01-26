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