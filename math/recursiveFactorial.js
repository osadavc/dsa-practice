const recursiveFactorial = (n) => {
  if (n == 0) {
    return 1;
  }

  if (n == 1) {
    return n;
  }

  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(3));
