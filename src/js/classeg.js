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

module.exports = { CalculatorClass, CalculatorFunction };
