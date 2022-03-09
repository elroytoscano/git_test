const fruitsFunction = function () {
  const fruits = [];

  const print = () => console.log(fruits);

  return {
    addFruits: (...items) => {
      fruits.push(...items);
    },
    addSingleFruit: (fruit) => {
      fruits.push(fruit);
    },
    removeFirstItem: () => fruits.shift(),
    print,
  };
};

module.exports = { fruitsFunction };
