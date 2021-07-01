let arr = [1, 4, 6, 8, 4, 3, 7, 8, 0, 5, 3, 4, 6, 7, 9, 0];
let b = [];
for (let i = 0; i < arr.length; i++) {
  if (b.indexOf(arr[i]) === -1) {
    b.push(arr[i]);
  }
}
let bSorted = b.sort((a, b) => a - b);
console.log(b);
console.log(bSorted);
