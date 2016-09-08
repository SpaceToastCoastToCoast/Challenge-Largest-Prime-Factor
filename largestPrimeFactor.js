exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here

  function primeFactorization(x) {
    let pN = x;
    let i = 2;
    let sqrt = Math.floor(Math.sqrt(x));

    while(i <= sqrt)
    {
      i++;
      if(i === 2) {
        return i;
      }
      if (x % i === 0 && isPrime(i)) {
        pN = i;
      }
    }
    return pN;
  }

  function isPrime(x) {

    if(x < 2) {
      return false;
    } else {
      for(let i = 2; i < x; i++) {
        if (x % i === 0) {
          return false;
        }
      }
      return true;
    }

  }

  primeNumber = primeFactorization(n);

  return primeNumber;
};