// Function to reverse a number
function reverseNumber(num) {
  return parseInt(num.toString().split("").reverse().join(""), 10);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  let cleanedStr = str.replace(/\s+/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Function to generate all combinations of a string
function stringCombinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

// Function to return a string with letters in alphabetical order
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}

// Function to capitalize the first letter of each word in a string
function capitalizeFirstLetterOfEachWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Testing the functions
let num = 32243;
console.log(reverseNumber(num)); // Expected Output: 34223

console.log(isPalindrome("madam")); // Expected Output: true
console.log(isPalindrome("nurses run")); // Expected Output: true
console.log(isPalindrome("hello")); // Expected Output: false

console.log(stringCombinations("dog")); // Expected Output: ['d', 'do', 'dog', 'o', 'og', 'g']

console.log(alphabeticalOrder("webmaster")); // Expected Output: 'abeemrstw'

console.log(capitalizeFirstLetterOfEachWord("the quick brown fox")); // Expected Output: 'The Quick Brown Fox'
