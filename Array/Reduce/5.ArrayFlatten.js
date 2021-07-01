function flatten(arr) {
  let result = arr.reduce((acc, currentValue) => {
    acc = [...acc, ...currentValue];
    return acc;
  });
  return result;
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
