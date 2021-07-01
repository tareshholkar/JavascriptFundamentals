document.getElementById("grandParent").addEventListener(
  "click",
  function () {
    console.log("GrandParent");
  },
  false
);
document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent");
  },
  false
);
document.getElementById("child").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("Child");
  },
  false
);
