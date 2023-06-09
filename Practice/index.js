
/*
setTimeout(() => {console.log(1);
  setTimeout(() => {console.log(2);
      setTimeout(() => {console.log(3);
          setTimeout(() => {console.log(4);
              setTimeout(() => {console.log(5);
                  setTimeout(() => {console.log(6);
                      setTimeout(() => {
                          console.log(7);
                      }, 7000);
                  }, 6000);
              }, 5000);
          }, 4000);
      }, 3000);
  }, 2000);
}, 1000);
*/

/*
function printNumberWithDelay(number)
 {
  console.log(number);
  if (number < 7) {
    setTimeout(function() {
      printNumberWithDelay(number + 1);
    }, number * 1000);
  }
}*/


function isPrime(num) {
  return new Promise(function(resolve, reject) {
    if (num <= 1) {
      reject("Error: Number is not prime.");
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        reject("Error: Number is not prime.");
      }
    }
    resolve("Success: Number is prime.");
  });
}
isPrime(15)
  .then(function(result) {console.log(result);})
  .catch(function(error) {console.log(error);});