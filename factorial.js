const factorial = (n) => {
  let number = 1;

  for (let i = n; i >= 1; i--) {
    number = number * i;
  }

  return number;
};

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(5));
