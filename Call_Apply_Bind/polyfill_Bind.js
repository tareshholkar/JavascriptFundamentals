let nameA = {
  firstName: "Taresh",
  lastName: "Holkar",
};
let fullName = function (homeTown, destiny) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + destiny
  );
};
let printInfo = fullName.bind(nameA, "India", "USA");
printInfo("UK");

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let myPrint = fullName.myBind(nameA, "India");
myPrint("USA");
