const fibonacci = (n) => {
  const sequence = [0, 1];

  if (n == 0) {
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  }

  for (let i = 0; i < n - 2; i++) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  return sequence;
};

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));
