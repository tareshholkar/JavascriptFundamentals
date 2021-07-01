var array = [
  { Id: "001", qty: 1 },
  { Id: "002", qty: 2 },
  { Id: "001", qty: 2 },
  { Id: "003", qty: 4 },
];
let result = [];
let final = array.reduce((acc, curr) => {
  if (!acc[curr.Id]) {
    acc[curr.Id] = { Id: curr.Id, qty: 0 };
    result.push(acc[curr.Id]);
  }
  acc[curr.Id].qty += curr.qty;
  return acc;
}, {});

console.log(final);
