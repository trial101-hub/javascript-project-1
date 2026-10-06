// STRING FUNCTIONS

// 1. Reverse a String
function reverseString(text) {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result = result + text[i];
  }

  return result;
}

console.log(reverseString("Hello"));

// 2. Count Characters
function countCharacters(text) {
  return text.length;
}

console.log(countCharacters("Hello"));

// 3. Capitalize Words
function capitalizeWords(text) {
  let words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeWords("hello world"));

// ARRAY FUNCTIONS

// 4. Find Maximum
function findMaximum(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(findMaximum([5, 10, 3, 20]));

// 5. Find Minimum
function findMinimum(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

console.log(findMinimum([5, 10, 3, 20]));

// 6. Sum of Array
function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// 7. Filter Array
// This example keeps numbers greater than 5
function filterArray(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(filterArray([2, 6, 3, 8, 10]));

// MATHEMATICAL FUNCTIONS

// 8. Factorial
function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));

// 9. Prime Number Check
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));

// 10. Fibonacci Sequence
function fibonacci(number) {
  let sequence = [0, 1];

  for (let i = 2; i < number; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

console.log(fibonacci(8));
