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
  arr.reduce(sum, num) => {
    sum += num;
    if (sum < value) {
      return sum;
    } return sum;
  }, 0;
}

//task 3.2