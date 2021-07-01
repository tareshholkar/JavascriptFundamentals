let obj = { num: 1 };
let a = function (a, b, c, d) {
  return this.num + a + b + c + d;
};

let b = a.call(obj, 2, 3, 4, 5);
console.log(b);

let arr = [2, 3, 4, 5];
let c = a.apply(obj, arr);
console.log(c);

let d = a.bind(obj);
console.log(d(2, 3, 4, 5));
