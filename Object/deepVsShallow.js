const obj = {
  name: "Taresh",
};

const a = JSON.parse(JSON.stringify(obj));
a.name = "Holkar";
console.log(obj);
console.log(a);
