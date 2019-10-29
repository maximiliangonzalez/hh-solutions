  
/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

const getAllProductsBruteForce = nums => {
  return nums.map((num, i) => {
    return [...nums.slice(0, i), ...nums.slice(i + 1)]
      .reduce((product, current) => product * current);
  });
};

// NOT A REAL SOLUTION
const getAllProductsWithoutZero = nums => {
  const product = nums.reduce((product, current) => product * current);
  return nums.map(num => product / num);
};

const getAllProducts = nums => {
  let numberOfZeros = 0;
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      numberOfZeros++;
      if (numberOfZeros > 1) {
        return nums.map(num => 0);
      }
      continue;
    }
    product *= nums[i];
  }

  return nums.map(num => {
    if (num === 0) {
      return product;
    } else {
      return numberOfZeros === 1 ? 0 : product / num;
    }
  });
};

console.log(getAllProducts([1, 7, 0, 3, 4]))

module.exports = getAllProducts;