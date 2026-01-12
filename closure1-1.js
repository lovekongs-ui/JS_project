function createCounter(initialValue = 0) {
  let value = initialValue;

  return {
    increment: () => {
      value = value + 1;
      return value;
    },
    decrement: () => {
      value = value - 1;
      return value;
    },
    getValue: () => value,
    reset: () => {
      value = initialValue;
      return value;
    },
  };
}

const counter = createCounter(10);

console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.getValue());  // 11
console.log(counter.reset());     // 10
console.log(counter.getValue());  // 10
