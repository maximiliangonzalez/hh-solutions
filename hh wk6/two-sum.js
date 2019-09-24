/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// brute force O(n^2)
function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !==j && arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}

// better brute force but still O(n^2)
function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }  
  return false;
}

// using a set O(n)
function twoSum(arr, n) {
  const cache = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (cache.has(n - arr[i])) {
      return true;
    }
    cache.add(arr[i]);
  }
  return false;
}

module.exports = twoSum;