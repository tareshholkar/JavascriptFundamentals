// 2
// 4 4
// 6 6 6
// 8 8 8 8
// 10 10 10 10 10
let output = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    output += i * 2 + " ";
  }
  console.log(output);
  output = "";
}
