/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

const subsetSum = (array, target) => {
  if (target === 0) {
    return true;
  }

  if (array.length === 0) {
    return false;
  }

  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
};

// THIS DOES NOT WORK IF THERE ARE ANY NEGATIVE NUMBERS IN THE ARRAY
const subsetSumDP = (array, target) => {
  // try refactoring this to an object
  const table = [];

  // filling the first column with 'true' since 0 can always be made with an empty set
  for (let i = 0; i < array.length; i++) {
    table.push([true]);
  }

  // filling the first row with false unless the element at index 0 equals i
  // (because a set with only one number can sum to a target if that one number is the target)
  for (let i = 1; i <= target; i++) {
    table[0].push(array[0] === i);
  }

  for (let i = 1; i <= target; i++) {
    for (let j = 1; j < array.length; j++ ) {
      // if the current array element is bigger than the current target, we get the value from one column up
      if (array[j] > i) {
        table[j][i] = table[j - 1][i];
      } else {
        // otherwise: if the value one column up is true, this value in the table should also be true
        if (table[j - 1][i] === true) {
          table[j][i] = true;
        // if not, we get the value from one column up and as many columns to the left as the value at array[j]
        // (this is why it doesn't work with negative numbers - let me know if you find a way to deal with this edge case!)
        } else {
          table[j][i] = table[j - 1][i - array[j]];
        }
      }
    }
  }

  // the last value in the table should be the answer
  return table[array.length - 1][target];
};

// console.log(subsetSumDP([16, 632, 36, 3636], 16)) // T
// console.log(subsetSumDP([3, 34, 4, 12, 5, 12], 32)) // T
// console.log(subsetSumDP([8, 2, 4, 12], 13)) // F
// console.log(subsetSumDP([-2, 8, 1, -3], 5)) // T
// console.log(subsetSumDP([0, -1, 6, 9, 2], 5));
// console.log(subsetSumDP([200, -50, 555, 3623, 748, 636], 150));

module.exports = subsetSum;