module.exports = findMaxMutch = (arr, value) => {
  if (!arr.includes(value)) {
    return `The value ${value} is not contained in the array`;
  }

  let currentSum = 1;
  let resultSum = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] && arr[i] === value) {
      currentSum += 1;
      if (i === arr.length - 1) {
        resultSum = currentSum;
      }
    } else {
      if (resultSum < currentSum) {
        resultSum = currentSum;
      }
      currentSum = 1;
    }
  }

  return resultSum;
};