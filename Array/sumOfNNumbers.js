var arr = [3, 5, 1, 2];
var n = arr.length + 1;
var total = n * ((n + 1) / 2);
for (var i of arr) {
  total -= i;
}
console.log(total);
