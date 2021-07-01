for (var i = 0; i < 10; i++) {
  function a(x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  }
  a(i);
}
