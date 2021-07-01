const a = { user: "Taresh", name: { racfId: "tholkar" } };
const b = a;
const c = { ...a }; //only 1level is deep copy and rest all are refrenced
const shallowCopy = Object.assign({}, a); // same as spread operator
const deepCopy = JSON.parse(JSON.stringify(a));

b.user = "Diksha";
b.name.racfId = "not a racfid";

console.log(a);
console.log(b);
console.log(c);
console.log(shallowCopy);
console.log(deepCopy);
