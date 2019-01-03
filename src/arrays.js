const getNthElement = (index, array) => {
  return index > array.length - 1 ? array[index % array.length] : array[index];
};

const arrayToCSVString = (array) => {
  return array.join((","));
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  function revStr(str) {
    return str.split('').reverse().join('');return arr.reverse(strings);
  }
  return strings.map(revStr);
};

const onlyEven = (numbers) => {
  return numbers.filter(number => number % 2 === 0 )
};

const removeNthElement2 = (index, array) => {
  return array.filter(arrFil => arrFil !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter(arrFil => arrFil.charAt(0) === 'a' ||
    arrFil.charAt(0) === 'e' || arrFil.charAt(0) === 'i' || 
    arrFil.charAt(0) === 'o' || arrFil.charAt(0) === 'u' || 
    arrFil.charAt(0) === 'A' || arrFil.charAt(0) === 'E' || 
    arrFil.charAt(0) === 'I' || arrFil.charAt(0) === 'O' ||
    arrFil.charAt(0) === 'U')
};

const removeSpaces = (string) => {
  return string.replace(/\s/g,'');
};

const sumNumbers = (numbers) => {
  return numbers.reduce(function(total,curVal) {
  return  total + curVal;
 })
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}
