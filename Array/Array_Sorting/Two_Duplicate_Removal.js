let arr = [1, 4, 6, 8, 4, 3, 7, 8, 0, 5, 3, 4, 6, 7, 9, 0];
let arrSorted = arr.sort((a, b) => a - b);
let b = [];
let _temp = null;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== _temp) {
    b.push(arr[i]);
    _temp = arr[i];
  }
}

console.log(b);
