const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
};

console.log(isPowerOfTwo(2048));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(1));
