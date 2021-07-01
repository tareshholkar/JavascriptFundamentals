function z() {
  var a = 10;
  (function y() {
    console.log(a);
  })();
}
z();

const counter = function () {
  let count = 1000;
  return {
    count: 0,
    getCount: function () {
      return console.log(count, this.count);
    },
  };
};
