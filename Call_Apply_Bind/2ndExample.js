let nameA = {
  firstName: "Taresh",
  lastName: "Holkar",
};
let fullName = function (homeTown, destiny) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + destiny
  );
};

// Call Method -> calles/invokes at same time while called
fullName.call(nameA, "Jersy City"); // Taresh Holkar Jersy City undefined
fullName.call(nameA, "Jersy City", "NewYork"); // Taresh Holkar Jersy City NewYork

// Apply Method
fullName.apply(nameA, ["Jersy City", "NewYork", "London"]); // Taresh Holkar Jersy City NewYork

// Bind Method -> Binds the function with object and returns the copy of that name for later call
let printMyName = fullName.bind(nameA, "Jersy City", "Paris");
console.log(printMyName());
