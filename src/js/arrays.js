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
    addFirstItem: (...items) => fruits.unshift(...items),
    print,
    findByName: (fruitName) => fruits.find((fruit) => fruit === fruitName),
    filterFruit: (fruitName) => fruits.filter((fruit) => fruit !== fruitName),
    removeLastItem: () => fruits.pop(),
    mergeArray: (array) => fruits.concat(array),
  };
};

module.exports = { fruitsFunction };
