"use strict";

{

  // 素数の判定
  function primeNumber(n) {
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
   }

   console.log(primeNumber(1));
   console.log(primeNumber(2));
   console.log(primeNumber(3));

}
