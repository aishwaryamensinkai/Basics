// 1. Reverse a number
function reverseNumber(x) {
  return parseInt(x.toString().split("").reverse().join(""));
}
console.log(reverseNumber(32243)); // Expected Output: 34223

// 2. Check if a string is palindrome
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam")); // Expected Output: true
console.log(isPalindrome("nurses run")); // Expected Output: true

// 3. Generate all combinations of a string
function stringCombinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
console.log(stringCombinations("dog")); // Expected Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

// 4. Sort letters of a string in alphabetical order
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}
console.log(alphabeticalOrder("webmaster")); // Expected Output: 'abeemrstw'

// 5. Convert the first letter of each word to upper case
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter("the quick brown fox")); // Expected Output: 'The Quick Brown Fox'

// 6. Find the longest word within a string
function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = words[0];
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("Web Development Tutorial")); // Expected Output: 'Development'

// 7. Count the number of vowels in a string
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("The quick brown fox")); // Expected Output: 5

// 8. Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // Expected Output: true

// 9. Return the type of an argument
function getType(arg) {
  return typeof arg;
}
console.log(getType(42)); // Expected Output: 'number'

// 10. Return n x n identity matrix
function identityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
}
console.log(identityMatrix(3)); // Expected Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

// 11. Find the second lowest and second greatest numbers
function secondLowestGreatest(arr) {
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
}
console.log(secondLowestGreatest([1, 2, 3, 4, 5])); // Expected Output: [2, 4]

// 12. Check if a number is perfect
function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}
console.log(isPerfectNumber(6)); // Expected Output: true

// 13. Compute the factors of a positive integer
function factors(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}
console.log(factors(15)); // Expected Output: [1, 3, 5, 15]

// 14. Convert an amount to coins
function amountToCoins(amount, coins) {
  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // Expected Output: [25, 10, 10, 1]

// 15. Compute the value of b^n
function power(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(power(2, 3)); // Expected Output: 8

// 16. Extract unique characters from a string
function uniqueCharacters(str) {
  return [...new Set(str)].join("");
}
console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog")); // Expected Output: 'thequickbrownfxjmpsvlazydg'

// 17. Count the number of occurrences of each letter in a string
function letterOccurrences(str) {
  let occurrences = {};
  for (let char of str) {
    if (occurrences[char]) {
      occurrences[char]++;
    } else {
      occurrences[char] = 1;
    }
  }
  return occurrences;
}
console.log(letterOccurrences("thequickbrownfoxjumpsoverthelazydog"));

// 18. Binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Expected Output: 2

// 19. Return array elements larger than a number
function elementsLargerThan(arr, num) {
  return arr.filter((el) => el > num);
}
console.log(elementsLargerThan([1, 2, 3, 4, 5], 3)); // Expected Output: [4, 5]

// 20. Generate a string ID of random characters
function randomStringId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log(randomStringId(10)); // Expected Output: random string of length 10

// 21. Get all possible subsets of a fixed length
function fixedLengthSubsets(arr, length) {
  let result = [];
  function generateSubsets(current, start) {
    if (current.length === length) {
      result.push(current);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      generateSubsets(current.concat(arr[i]), i + 1);
    }
  }
  generateSubsets([], 0);
  return result;
}
console.log(fixedLengthSubsets([1, 2, 3], 2)); // Expected Output: [[1, 2], [1, 3], [2, 3]]

// 22. Count the number of occurrences of a specified letter within a string
function countLetterOccurrences(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) count++;
  }
  return count;
}
console.log(countLetterOccurrences("microsoft.com", "o")); // Expected Output: 3

// 23. Find the first not repeated character
function firstNonRepeatedCharacter(str) {
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) charCount[char]++;
    else charCount[char] = 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  return null;
}
console.log(firstNonRepeatedCharacter("abacddbec")); // Expected Output: 'e'

// 24. Apply Bubble Sort algorithm
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

// 25. Return the longest country name
function longestCountryName(countries) {
  return countries.reduce(
    (longest, country) => (country.length > longest.length ? country : longest),
    ""
  );
}
console.log(
  longestCountryName(["Australia", "Germany", "United States of America"])
); // Expected Output: "United States of America"

// 26. Find longest substring without repeating characters
function longestUniqueSubstring(str) {
  let seen = {};
  let start = 0;
  let maxLen = 0;
  let startIndex = 0;
  for (let end = 0; end < str.length; end++) {
    if (seen[str[end]] !== undefined) {
      start = Math.max(start, seen[str[end]] + 1);
    }
    seen[str[end]] = end;
    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      startIndex = start;
    }
  }
  return str.substring(startIndex, startIndex + maxLen);
}
console.log(longestUniqueSubstring("abcabcbb")); // Expected Output: 'abc'

// 27. Find the longest palindrome in a given string
function longestPalindrome(str) {
  let maxPalindrome = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substring = str.substring(i, j + 1);
      if (
        substring === substring.split("").reverse().join("") &&
        substring.length > maxPalindrome.length
      ) {
        maxPalindrome = substring;
      }
    }
  }
  return maxPalindrome;
}
console.log(longestPalindrome("bananas")); // Expected Output: 'anana'

// 28. Pass a function as parameter
function executeFunction(func, param) {
  return func(param);
}
function sampleFunction(param) {
  return `Hello, ${param}!`;
}
console.log(executeFunction(sampleFunction, "World")); // Expected Output: 'Hello, World!'

// 29. Get the function name
function getFunctionName(func) {
  return func.name;
}
console.log(getFunctionName(getFunctionName)); // Expected Output: 'getFunctionName'
