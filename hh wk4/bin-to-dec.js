/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let decimal = 0;
  let powerOf2 = 1;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
      decimal += powerOf2;
    }
    powerOf2 *= 2;
  }
  return decimal;
}

function binToDec(binary) {
  let decimal = 0;
  const length = binary.length;
  for (let i = 0; i < length; i++) {
    decimal += binary[i] * (2 ** (length - i - 1));
  }
  return decimal;
}

function binToDec(binary) {
  let length = binary.length;
  return binary.split('').reduceRight((acc, curr, i) => {
    return acc + (curr * (2 ** (length - i - 1)));
  }, 0);
}

console.log(binToDec('0'));
console.log(binToDec('11'));
console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('0101'));

module.exports = binToDec;