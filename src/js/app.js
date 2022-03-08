console.log(add2(4, 5));
const add = function (a, b) {
  return a + b;
};

function add2(a, b) {
  return a + b;
}

console.log(add(4, 5));

class CalculatorClass {
  #value = 0;

  constructor() {}
  add(val) {
    this.#value += val;
    return this;
  }
  subtract(val) {
    this.#value -= val;
    return this;
  }
  multiply(val) {
    this.#value *= val;
    return this;
  }
  divide(val) {
    this.#value /= val;
    return this;
  }
  print() {
    console.log(`Value: ${this.#value}`);
    return this;
  }
}

const CalculatorFunction = {
  value: 0,

  add(val) {
    this.value += val;
    return this;
  },
  subtract(val) {
    this.value -= val;
    return this;
  },
  multiply(val) {
    this.value *= val;
    return this;
  },
  divide(val) {
    this.value /= val;
    return this;
  },
  print() {
    console.log(`Value: ${this.value}`);
  },
};

function ChainCal() {
  let value = 0;

  function print() {
    console.log(`Value: ${value}`);
  }

  return {
    add: (val) => {
      value += val;
      print();
    },
    subtract: (val) => {
      value -= val;
      print();
    },
    multiply: (val) => {
      value *= val;
      print();
    },
    divide: (val) => {
      value /= val;
      print();
    },
  };
}

const calculator = new CalculatorClass().add(5).multiply(40).print();

const str1 = 'Hello';
const str2 = 'world';
console.log(str1.concat(' ', str2));

const calculatorFn = ChainCal();
calculatorFn.add(43);
calculatorFn.subtract(32);

(() => {
  console.log('iife');
})();

console.log(
  `Ternary Operator:${true ? 'Ternary Op true' : 'Ternary Op False'}`
);

const timeInterval = 2000;

setTimeout(() => {
  console.log(`setTimeOut`);
  clearInterval(interval);
}, timeInterval);

const interval = setInterval(() => {
  console.log(`setINterval`);
}, timeInterval / 4);
