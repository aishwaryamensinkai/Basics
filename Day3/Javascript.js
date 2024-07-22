function reverseNumber() {
  const input = document.getElementById("reverseNumberInput").value;
  const output = document.getElementById("reverseNumberOutput");
  const reversed = input.split("").reverse().join("");
  output.textContent = `Output: ${reversed}`;
}

function checkPalindrome() {
  const input = document.getElementById("palindromeInput").value;
  const output = document.getElementById("palindromeOutput");
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  output.textContent = `Output: ${
    reversed === normalized ? "Palindrome" : "Not Palindrome"
  }`;
}

function generateCombinations() {
  const input = document.getElementById("combinationsInput").value;
  const output = document.getElementById("combinationsOutput");
  const combinations = [];
  for (let i = 0; i < 1 << input.length; i++) {
    let combination = "";
    for (let j = 0; j < input.length; j++) {
      if (i & (1 << j)) combination += input[j];
    }
    if (combination) combinations.push(combination);
  }
  output.textContent = `Output: ${combinations.join(", ")}`;
}

function sortLetters() {
  const input = document.getElementById("sortLettersInput").value;
  const output = document.getElementById("sortLettersOutput");
  const sorted = input.split("").sort().join("");
  output.textContent = `Output: ${sorted}`;
}

function capitalizeWords() {
  const input = document.getElementById("capitalizeInput").value;
  const output = document.getElementById("capitalizeOutput");
  const capitalized = input.replace(/\b\w/g, (char) => char.toUpperCase());
  output.textContent = `Output: ${capitalized}`;
}

function findLongestWord() {
  const input = document.getElementById("longestWordInput").value;
  const output = document.getElementById("longestWordOutput");
  const words = input.split(" ");
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");
  output.textContent = `Output: ${longest}`;
}

function countVowels() {
  const input = document.getElementById("countVowelsInput").value;
  const output = document.getElementById("countVowelsOutput");
  const count = (input.match(/[aeiou]/gi) || []).length;
  output.textContent = `Output: ${count}`;
}

function checkPrime() {
  const input = parseInt(document.getElementById("primeInput").value, 10);
  const output = document.getElementById("primeOutput");
  if (isNaN(input) || input <= 1) {
    output.textContent = "Output: Not Prime";
    return;
  }
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      output.textContent = "Output: Not Prime";
      return;
    }
  }
  output.textContent = "Output: Prime";
}

function getType() {
  const input = document.getElementById("typeInput").value;
  let type;

  // Check if the input is an empty string
  if (input.trim() === "") {
    type = "empty string";
  }
  // Check if the input is a number
  else if (!isNaN(input) && input.trim() !== "") {
    type = "number";
  }
  // Check if the input is a boolean (true or false)
  else if (input.toLowerCase() === "true" || input.toLowerCase() === "false") {
    type = "boolean";
  }
  // Otherwise, it's a string
  else {
    type = "string";
  }

  const output = document.getElementById("typeOutput");
  output.textContent = `Output: ${type}`;
}

function generateIdentityMatrix() {
  const size = parseInt(
    document.getElementById("identityMatrixInput").value,
    10
  );
  const output = document.getElementById("identityMatrixOutput");
  if (isNaN(size) || size <= 0) {
    output.textContent = "Output: Invalid size";
    return;
  }
  const matrix = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i === j ? 1 : 0)).join(" ")
  ).join("\n");
  output.textContent = `Output:\n${matrix}`;
}

function findSecondNumbers() {
  const input = document
    .getElementById("secondNumbersInput")
    .value.split(",")
    .map(Number);
  const output = document.getElementById("secondNumbersOutput");
  const unique = [...new Set(input)].sort((a, b) => a - b);
  const secondLowest = unique[1] || "N/A";
  const secondGreatest = unique[unique.length - 2] || "N/A";
  output.textContent = `Output: ${secondLowest}, ${secondGreatest}`;
}

function checkPerfectNumber() {
  const input = parseInt(
    document.getElementById("perfectNumberInput").value,
    10
  );
  const output = document.getElementById("perfectNumberOutput");
  if (isNaN(input) || input <= 1) {
    output.textContent = "Output: Not Perfect Number";
    return;
  }
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      sum += i;
      if (i !== input / i && i !== 1) {
        sum += input / i;
      }
    }
  }
  output.textContent = `Output: ${
    sum === input ? "Perfect Number" : "Not Perfect Number"
  }`;
}

function computeFactors() {
  const input = parseInt(document.getElementById("factorsInput").value, 10);
  const output = document.getElementById("factorsOutput");
  if (isNaN(input) || input <= 0) {
    output.textContent = "Output: Invalid number";
    return;
  }
  const factors = [];
  for (let i = 1; i <= input; i++) {
    if (input % i === 0) factors.push(i);
  }
  output.textContent = `Output: ${factors.join(", ")}`;
}

function convertToCoins() {
  let amount = parseInt(document.getElementById("amountInput").value, 10);
  const coins = document
    .getElementById("coinsInput")
    .value.split(",")
    .map((num) => parseInt(num.trim(), 10)) // Trim spaces and convert to numbers
    .sort((a, b) => b - a);
  const output = document.getElementById("coinsOutput");

  if (isNaN(amount) || amount <= 0 || coins.some(isNaN)) {
    output.textContent = "Output: Invalid input";
    return;
  }

  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      result.push(coin);
      amount -= coin;
    }
  }

  output.textContent = `Output: ${result.join(", ")}`;
}

function computePower() {
  const base = parseFloat(document.getElementById("baseInput").value);
  const exponent = parseInt(document.getElementById("exponentInput").value, 10);
  const output = document.getElementById("powerOutput");
  if (isNaN(base) || isNaN(exponent)) {
    output.textContent = "Output: Invalid input";
    return;
  }
  const result = Math.pow(base, exponent);
  output.textContent = `Output: ${base}^${exponent} = ${result}`;
}

function extractUniqueCharacters() {
  const inputString = document.getElementById("uniqueCharsInput").value;
  const output = document.getElementById("uniqueCharsOutput");
  const uniqueChars = [...new Set(inputString)].join("");
  output.textContent = `Output: ${uniqueChars}`;
}

function countLetters() {
  const str = document.getElementById("countLettersInput").value;
  const output = document.getElementById("countLettersOutput");
  const count = {};
  for (let char of str) {
    if (char.match(/[a-zA-Z]/)) {
      count[char] = (count[char] || 0) + 1;
    }
  }
  output.textContent = `Output: ${JSON.stringify(count)}`;
}

function binarySearch() {
  const array = document
    .getElementById("binarySearchInput")
    .value.split(",")
    .map(Number);
  const target = parseInt(
    document.getElementById("binarySearchTarget").value,
    10
  );
  const output = document.getElementById("binarySearchOutput");
  if (!array.length || isNaN(target)) {
    output.textContent = "Output: Invalid input";
    return;
  }
  let left = 0,
    right = array.length - 1,
    found = false;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      found = true;
      break;
    }
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  output.textContent = `Output: ${found ? "Found" : "Not Found"}`;
}

function elementsLargerThan() {
  const array = document
    .getElementById("largerThanInput")
    .value.split(",")
    .map(Number);
  const number = parseInt(
    document.getElementById("largerThanNumber").value,
    10
  );
  const output = document.getElementById("largerThanOutput");
  if (!array.length || isNaN(number)) {
    output.textContent = "Output: Invalid input";
    return;
  }
  const result = array.filter((el) => el > number);
  output.textContent = `Output: ${result.join(", ")}`;
}

function generateRandomId() {
  const length = parseInt(document.getElementById("randomIdLength").value, 10);
  const output = document.getElementById("randomIdOutput");
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  output.textContent = `Output: ${result}`;
}

function getSubsets() {
  const array = document
    .getElementById("subsetsInput")
    .value.split(",")
    .map(Number);
  const length = parseInt(document.getElementById("subsetLength").value, 10);
  const output = document.getElementById("subsetsOutput");
  if (!array.length || isNaN(length) || length <= 0) {
    output.textContent = "Output: Invalid input";
    return;
  }
  const subsets = [];
  function generate(current, start) {
    if (current.length === length) {
      subsets.push(`[${current.join(", ")}]`);
      return;
    }
    for (let i = start; i < array.length; i++) {
      generate([...current, array[i]], i + 1);
    }
  }
  generate([], 0);
  output.textContent = `Output: ${subsets.join(", ")}`;
}

function countSpecificLetter() {
  const str = document.getElementById("specificLetterInput").value;
  const letter = document.getElementById("specificLetter").value;
  const output = document.getElementById("specificLetterOutput");
  if (!letter || letter.length !== 1) {
    output.textContent = "Output: Invalid letter";
    return;
  }
  const count = (str.match(new RegExp(letter, "g")) || []).length;
  output.textContent = `Output: ${count}`;
}

function findFirstNonRepeated() {
  const str = document.getElementById("firstNonRepeatedInput").value;
  const output = document.getElementById("firstNonRepeatedOutput");
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  const result = [...str].find((char) => count[char] === 1) || "None";
  output.textContent = `Output: ${result}`;
}

function bubbleSort() {
  const array = document
    .getElementById("bubbleSortInput")
    .value.split(",")
    .map(Number);
  const output = document.getElementById("bubbleSortOutput");
  if (!array.length) {
    output.textContent = "Output: Invalid input";
    return;
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  output.textContent = `Output: ${array.join(", ")}`;
}

function longestCountryName() {
  const countries = document
    .getElementById("longestCountryNameInput")
    .value.split(",");
  const output = document.getElementById("longestCountryNameOutput");
  if (!countries.length) {
    output.textContent = "Output: Invalid input";
    return;
  }
  const longest = countries.reduce(
    (long, current) => (current.length > long.length ? current : long),
    ""
  );
  output.textContent = `Output: ${longest}`;
}

function longestSubstringWithoutRepeating() {
  const str = document.getElementById(
    "longestSubstringWithoutRepeatingInput"
  ).value;
  const output = document.getElementById(
    "longestSubstringWithoutRepeatingOutput"
  );
  let longest = "";
  let current = "";
  const seen = new Set();
  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      current += char;
      if (current.length > longest.length) {
        longest = current;
      }
    } else {
      seen.clear();
      current = char;
    }
  }
  output.textContent = `Output: ${longest}`;
}

function longestPalindrome() {
  const str = document.getElementById("longestPalindromeInput").value;
  const output = document.getElementById("longestPalindromeOutput");
  const isPalindrome = (s) => s === s.split("").reverse().join("");
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const substring = str.slice(i, j + 1);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  output.textContent = `Output: ${longest}`;
}

function passFunctionAsParameter() {
  const number = parseInt(
    document.getElementById("functionParameterInput").value,
    10
  );
  const output = document.getElementById("functionParameterOutput");
  if (isNaN(number)) {
    output.textContent = "Output: Invalid number";
    return;
  }
  const double = (num) => num * 2;
  output.textContent = `Output: ${double(number)}`;
}

function exampleFunction() {
  // This is the function whose name we want to get
}

function getFunctionName(fn) {
  return fn.name;
}

function showFunctionName() {
  const functionName = getFunctionName(exampleFunction);
  const output = document.getElementById("functionNameOutput");
  output.textContent = `Output: ${functionName}`;
}
