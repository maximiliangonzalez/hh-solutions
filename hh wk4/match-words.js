// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

const matchWord = str => {
    const stack = [];
    const letter = /[A-Za-z]/;
    let currentWord = '';
    for (let i = 0; i < str.length; i++) {
        if (letter.test(str[i])) {
            currentWord += str[i];
        } 
        if (currentWord !== '' && (!letter.test(str[i]) && letter.test(str[i - 1])) || (letter.test(str[i]) && i === str.length - 1)) {
            const reversedCurrentWord = currentWord.split('').reverse().join('').toLowerCase();
            if (stack[stack.length - 1] === reversedCurrentWord) {
                stack.pop();
            } else {
                stack.push(currentWord.toLowerCase());
            }
            currentWord = '';
        }
    }
    console.log(stack);
    return stack.length === 0;
}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord; 