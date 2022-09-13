// In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.
// We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.
// camel, pascal, snake, kebab, title, vowel, consonant, upper, lower
// Our function should be able to handle all of these cases.

const makeCase = function(input, stringCase) {

  let newString = '';

  switch (stringCase) {
    case 'camel':

      for (let x = 0; x < input.length; x++) {
        if (input[x] === ' ') {
          x += 1;
          newString += input[x].toUpperCase();
        } else {
          newString += input[x];
        }
      }

      break;
    case 'pascal':

      newString += input[0].toUpperCase();

      for (let x = 1; x < input.length; x++) {
        if (input[x] === ' ') {
          x += 1;
          newString += input[x].toUpperCase();
        } else {
          newString += input[x];
        }
      }
      
      break;
    case 'snake':

      newString = input.replaceAll(' ', '_');
      
      break;
    case 'kebab':
      
      newString = input.replaceAll(' ', '-');

      break;
    case 'title':
      
      newString += input[0].toUpperCase();
      for (let x = 1; x < input.length; x++) {
        if (input[x] === ' ') {
          newString += ' ';
          x++;
          newString += input[x].toUpperCase();
        } else {
          newString += input[x];
        }
      }

      break;
    case 'vowel':
      
      for (let x = 0; x < input.length; x++) {
        if (input[x] === 'a' ||input[x] === 'e' ||input[x] === 'i' ||input[x] === 'o' ||input[x] === 'u') {
          newString += input[x].toUpperCase();
        } else {
          newString += input[x]
        }
      }

      break;
    case 'consonant':
      
      for (let x = 0; x < input.length; x++) {
        if (input[x] === 'a' ||input[x] === 'e' ||input[x] === 'i' ||input[x] === 'o' ||input[x] === 'u') {
          newString += input[x]
        } else {
          newString += input[x].toUpperCase();
        }
      }

      break;
    case 'upper':
      
      for (let x = 0; x < input.length; x++) {
        newString += input[x].toUpperCase();
      }

      break;
    case 'lower':
      
      for (let x = 0; x < input.length; x++) {
        newString += input[x].toLowerCase();
      }

      break;
  }

  return newString;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));