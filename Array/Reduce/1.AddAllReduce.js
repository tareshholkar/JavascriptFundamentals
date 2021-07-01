function total(arr) {
  console.log(arr);
  let result = arr.reduce((acc, currentElement) => {
    acc = acc + currentElement;
    return acc;
  });
  console.log(result);
}

console.log(total([1, 2, 3])); // 6
