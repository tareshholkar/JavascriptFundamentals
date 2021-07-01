function stringConcat(arr) {
  let result = arr.reduce((acc, currentItem) => {
    acc = String(acc).concat(String(currentItem));
    return acc;
  });
  console.log(typeof result);
  return result;
}

console.log(stringConcat([1, 2, 3])); // "123"
