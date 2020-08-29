"use strict";


function isSomeTrue(array, func) {
  let [i, ...spreat] = [...array];
  if (i) {
    if (func(i)) {
      return true;
    } else {
      return isSomeTrue(spreat, func);
    }
  } else{
    return false
  }
}

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
  someNumbers = [1, 2, "Hello", 4, 5, "world", 6, 7, 8],
  noNumbers = ["здесь", "нет", "чисел"];


function isNumber(val) {
  return typeof val === "number";
}

console.log(isSomeTrue(allNumbers, isNumber));
console.log(isSomeTrue(someNumbers, isNumber));
console.log(isSomeTrue(noNumbers, isNumber));
