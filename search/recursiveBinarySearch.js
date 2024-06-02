const recursiveBinarySearch = (
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) => {
  if (leftIndex > rightIndex) {
    return -1;
  }

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return recursiveBinarySearch(arr, target, leftIndex, middleIndex - 1);
  } else {
    return recursiveBinarySearch(arr, target, middleIndex + 1, rightIndex);
  }
};

// const search = (arr, target, leftIndex, rightIndex) => {
//   if (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//     if (arr[middleIndex] === target) {
//       return middleIndex;
//     }

//     if (target < arr[middleIndex]) {
//       return search(arr, target, leftIndex, middleIndex - 1);
//     } else {
//       return search(arr, target, middleIndex + 1, rightIndex);
//     }
//   } else {
//     return -1;
//   }
// };

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
