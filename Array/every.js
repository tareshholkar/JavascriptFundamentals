let arr = [1, 4, 6, 8, 4, 3, 7, 8, 0, 5, 3, 4, 6, 7, 9, 0];
let b = arr.every((item) => {
  return item > 20;
});
console.log(b);
