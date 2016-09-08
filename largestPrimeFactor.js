exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here
  var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  for(let i = 0; i < primeNumbers.length; i++) {
    if(n % primeNumbers[i] === 0) {
      primeNumber = primeNumbers[i];
    }
  }

  return primeNumber;
};