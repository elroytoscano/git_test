const { CalculatorClass, CalculatorFunction } = require('./classeg');
const { ChainCal } = require('./closureseg');
const { fruitsFunction } = require('./arrays');
//#region hoisting

console.log(add2(4, 5));
const add = function (a, b) {
  return a + b;
};

function add2(a, b) {
  return a + b;
}

console.log(add(4, 5));

//#endregion

const calculator = new CalculatorClass().add(5).multiply(40).print();
const calculatorFn = ChainCal();
calculatorFn.add(43);
calculatorFn.subtract(32);

const str1 = 'Hello';
const str2 = 'world';
console.log(str1.concat(' ', str2));

//#region iife

(() => {
  console.log('iife');
})();

//#endregion

console.log(
  `Ternary Operator:${true ? 'Ternary Op true' : 'Ternary Op False'}`
);

//#region setTimeOut and setInterval

const timeInterval = 2000;

setTimeout(() => {
  console.log(`setTimeOut`);
  clearInterval(interval);
}, timeInterval);

const interval = setInterval(() => {
  console.log(`setINterval`);
}, timeInterval / 4);

//#endregion

//#region array ops

const fruits = fruitsFunction();
fruits.addFruits('apple', 'banana');
fruits.addFruits('mango', 'strawberry');
fruits.addFruits('grapes', 'melons');
fruits.addSingleFruit('lime');
fruits.print();
fruits.removeFirstItem();
fruits.print();
fruits.addFirstItem('apple', 'pineapple');
fruits.print();
fruits.removeFirstItem();
fruits.print();
const findFruit = fruits.findByName('pineapple');
console.log(findFruit);
const filteredfruits = fruits.filterFruit('pineapple');
console.log(filteredfruits);
const newArray = ['jackfruit', 'pomegranate'];
const mergedArrays = fruits.mergeArray(newArray);
console.log(mergedArrays);
//#endregion
