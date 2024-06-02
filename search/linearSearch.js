const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(binarySearch([-5, 2, 10, 4, 6], 10));
console.log(binarySearch([-5, 2, 10, 4, 6], 6));
console.log(binarySearch([-5, 2, 10, 4, 6], 20));
