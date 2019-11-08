// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

// NOTE - THE TESTS SPELL NINETY WRONG

function numToWords(num) {
  // We only use the word 'Zero' with 0 by itself, not in any other places where 0 appears, so we can just deal with this by itself
  if (num === 0) {
    return 'Zero';
  }

  // I leave empty strings in the array just to get the numbers aligned with their proper indexes (so I don't have to add or subtract anything later)
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const groups = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

  // we want to process our number in groups of 3
  // for example if we have the number 400,400,400 it will be FourHundredMillionFourHundredThousandFourHundred
  // we see that the FourHundred repeats, the only difference is what comes after
  // the only edge case here is that the first group might only have 1 or 2 numbers to deal with
  const processChunk = str => {
    // if a chunk is just '000' then we don't want to add anything
    if (str === '000') {
      return '';
    }

    let chunk = '';
    // If there are 3 characters, we add the equivalent to the first character in the ones array and add 'Hundred'
    // If we have 444, we now have FourHundred - we reassign our string to 44 and deal with the next two characters
    if (str.length === 3) {
      chunk += `${ones[Number(str[0])]}Hundred`;
      str = str[1] + str[2];
    }
    // There are two different cases if our string has 2 characters
    // If the first digit is greater than 1 (e.g. 44) we can look in the 10s array, find the proper multiple of 10, then reassign our string to 4 and deal with the 4
    // If the digit is one, then it's one of the edge case numbers (anything between 10-19) - we want to add this number to our string and then return the chunk as is
    if (str.length === 2) {
      if (Number(str[0] > 1)) {
        chunk += tens[Number(str[0])]
      } else if (str[0] !== '0') {
        chunk += ones[(Number(str[0]) * 10) + Number(str[1])];
        return chunk;
      }
      str = str[1];
    }
    // If the string has only one character, we want to add the corresponding character from our ones array
    if (str.length === 1 && Number(str[0]) !== 0) {
      chunk += ones[Number(str[0])]
    }
    console.log(chunk);
    return chunk;
  }
 
  // splits our number into chunks of 3 numbers (or 1 or 2 for the first one)
  const chunks = [''];
  const numToString = num.toString();
  for (let i = numToString.length - 1; i >= 0; i--) {
    if (chunks[0].length === 3) {
      chunks.unshift(numToString[i]);
    } else {
      chunks[0] = numToString[i] + chunks[0];
    }
  }
  
  let groupIndex = -1;
  return chunks.reduceRight((word, chunk) => {
    groupIndex++;
    let processedChunk = processChunk(chunk);
    // if processChunk returns '' we don't want to add anything to our word
    return processedChunk === '' ? word : processChunk(chunk) + groups[groupIndex] + word;
  }, '');
}

module.exports = numToWords;