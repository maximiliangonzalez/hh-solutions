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

const matchWord1 = str => {
    const words = str.match(/[A-Za-z]+/gi);
    if (!words) {
        return true;
    }

    const stack = [];
    words.forEach(word => {
        const reversedWord = word.split('').reverse().join('');
        if (reversedWord.toLowerCase() === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(word.toLowerCase());
        }
    });
    
    return stack.length === 0;
}

const matchWord = str => {
    const stack = [];
    const letter = /[A-Za-z]/;
    let currentWord = '';

    for (let i = 0; i < str.length; i++) {
        if (letter.test(str[i])) {
            currentWord += str[i];
        } 
        // for some reason, letter.test(undefined) returns true -___-
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
    
    return stack.length === 0;
}

console.log(matchWord1('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord; 