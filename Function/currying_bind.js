//function decleration/ function statemenent
function multiply(x, y) {
  console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

// function expression
const addition = function (x, y) {
  console.log(x + y);
};
let additionByTwo = addition.bind(this, 2);
additionByTwo(10);
