// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function bruteForce(num) {
  var count = 0;
  str = String(num);

  for (var i = 2; i <= num; i++) {
    var subStr = String(i);

    for (var j = 0; j < str.length; j++) {
      if (subStr[j] === '2')
        count++;
    }
  }

  return count;
}

function countTwos(num) {
  // create digits array
  const digits = num.toString().split('').reverse();
  // reduce it!!!
  return digits.reduce((count, strDigit, idx, arr) => {
    // turn string into number
    const digit = Number(strDigit);
    // case for first digit
    if (idx === 0) {
      if (digit >= 2) count += 1;
    } else {
      // use formula to add to count based on digit and index
      count += digit * idx * Math.pow(10, idx - 1);
      // add 10 to the index power for digits > 2
      if (digit > 2) {
        count += Math.pow(10, idx);
      } else if (digit === 2) {
        // for digits === 2, add the total of all previous digits to the count
        // CORRECTION: if this solution was emailed to you, it was missing `reverse()` on this line. It needs to be there!!!
        count += Number(arr.slice(0, idx).reverse().join('')) + 1;
      }
    }
    // return updated count
    return count;
    // include initial value of 0
  }, 0);
}

// console.log(bruteForce(30261312));
console.log(countTwos( 30261312));
console.log(bruteForce( 30261312));
