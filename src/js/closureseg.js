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

module.exports = { ChainCal };
