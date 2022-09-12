// We will receive a normal string of words separated with spaces as the input. 
// Our job is to convert these strings into camel cased strings.

const camelCase = function(str) {

  let newString = '';

  for (let x = 0; x < str.length; x++) {
    if (str[x] === ' ') {
      newString += str[x+1].toUpperCase();
      x += 1;
    } else {
      newString += str[x];
    }
  }

  return newString;
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy cereal'));
console.log(camelCase('supercalifragalisticexpialidocious'));