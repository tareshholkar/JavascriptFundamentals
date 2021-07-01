document.getElementById("grandParent").addEventListener(
  "click",
  function () {
    console.log("GrandParent");
  },
  false
);
document.getElementById("parent").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("Parent-Mom");
  },
  false
);
document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent-Dad");
  },
  false
);
document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child");
  },
  false
);
