let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

let result = [];

function flat(come) {
  come.map((item) => {
    if (Array.isArray(item)) {
      flat(item);
    } else {
      result.push(item);
    }
  });
}
flat(arr);
console.log(result);
