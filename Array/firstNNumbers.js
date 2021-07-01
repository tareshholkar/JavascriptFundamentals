function first(arr, len) {
  if (len == undefined) {
    return arr[0];
  } else if (len < 0) {
    arr.length = 0;
    return arr;
  } else if (arr.length < len) {
    return arr;
  } else if (arr.length >= len) {
    arr.length = len;
    return arr;
  }
}

console.log(first([7, 9, 0, -2])); //7
console.log(first([], 3)); //[]
console.log(first([7, 9, 0, -2], 3)); //[7,9,0]
console.log(first([7, 9, 0, -2], 6)); //[7,9,0,-2]
console.log(first([7, 9, 0, -2], -3)); //[]
