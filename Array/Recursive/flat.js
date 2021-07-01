const arr = [0, 1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13]]]]]], 14, 15];

// function f(arr) {
//   return arr.flat() * 4;
// }
// console.log(f(arr));
let pagal = [];
function rec(kuch) {
  let result = kuch.map((item) => {
    if (Array.isArray(item)) {
      rec(item);
    } else {
      pagal.push(item);
    }
    return pagal;
  });
  return result[0];
}
console.log(rec(arr));
// let result = arr.find((ele, index, arr) => {
//   console.log(Array.isArray(ele));
//   console.log(arr.includes());
//   console.log(arr);
//   f(arr);
//   return arr;
// });

// let result = arr.reduce(
//   (acc, curr, arr) => {
//     if (acc.some((ele) => Array.isArray(ele))) {
//       acc.flat();
//     } else {
//       acc.push(curr);
//     }
//     return acc;
//   },
//   [arr]
// );
// console.log(result);
//
