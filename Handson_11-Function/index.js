function sum() {
    console.log(10 + 20);
  }
  sum();
  
  function printSum(a, b) {
    const result = a + b;
    console.log(`${a}+${b}=${result}`);
  }
  
  printSum(3, 4);
  
  hello = () => {
    return "Hello World!";
  };
  
  var x = 21;
  var girls = function () {
    console.log(x);
    var x = 20;
  };
  girls();
  
  var x = 21;
  g();
  console.log(x);
  function g() {
    console.log(x);
    var x = 20;
  }
  
  var x = 21;
  a();
  b();
  
  function a() {
    x = 20;
    console.log(x);
  }
  function b() {
    x = 40;
    console.log(x);
  }
  console.log(x);
  
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));