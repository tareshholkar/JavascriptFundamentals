document.querySelector("#category").addEventListener("click", function (e) {
  console.log(e.target.id);
  window.location.href = "/" + e.target.id;
});
document.querySelector("#form").addEventListener("keyup", function (e) {
  console.log("object");
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
