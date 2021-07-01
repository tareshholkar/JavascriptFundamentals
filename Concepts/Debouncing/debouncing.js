const getData = function () {
  console.log("getdata");
};
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};
const betterFuntion = debounce(getData, 500);
