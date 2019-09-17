/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return countStairs(n - 1) + countStairs(n - 2);
}

// console.log(countStairs(40));

const countStairsMemo = n => {
  const cache = {};
  const countStairs = n => {
    if (n === 0) {
      return 1;
    }

    if (n < 0) {
      return 0;
    }

    if (!cache.hasOwnProperty(n - 1)) {
      cache[n - 1] = countStairs(n - 1);
    }

    if (!cache.hasOwnProperty(n - 2)) {
      cache[n - 2] = countStairs(n - 2);
    }

    return cache[n - 1] + cache[n - 2];
  }
  return countStairs(n);
}

// console.log(countStairsMemo(40));



module.exports = countStairs;