/*
Kata 1

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number

Url: https://www.codewars.com/kata/544675c6f971f7399a000e79
*/
const stringToNumber = function (str) {
  return Number(str);
};

/*
Kata 2

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

Url: https://www.codewars.com/kata/514b92a657cdc65150000006
*/

function solution(number) {
  arr = [];

  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
      sum = arr[i] + sum;
    }

    if (number < 0) return 0;
  }
  return sum;
}

/*
Kata 3
A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
Fundamentals

Url: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/
*/

var isSquare = function (n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else return false;
};

/*
Kata 4
Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"


Url: https://www.codewars.com/kata/5265326f5fda8eb1160004c8/
*/

function numberToString(num) {
  return String(num);
}

/*
Kata 5
Vowel Count

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

Url: https://www.codewars.com/kata/54ff3102c1bad923760001f3/
*/

function getCount(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const charArray = str.split("");

  for (let i = 0; i < charArray.length; i++) {
    if (vowels.includes(charArray[i])) {
      count++;
    }
  }
  return count;
}

/*
Kata 6
Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

Url: https://www.codewars.com/kata/56747fd5cb988479af000028/
*/

function getMiddle(s) {
  const charArray = s.split("");
  let num = Math.trunc(charArray.length / 2);
  return charArray.length % 2 === 0
    ? `${charArray[num - 1]}${charArray[num]}`
    : charArray[num];
}

/*
Kata 7
Find the divisors!

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"

Url: https://www.codewars.com/kata/544aed4c4a30184e960010f4/
*/

function divisors(integer) {
  arr = [];
  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  arr.shift();
  arr.pop();

  return arr.length === 0 ? `${integer} is prime` : arr;
}

/*
Kata 8
Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Url: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/
*/

function solution(str) {
  str.split("");
  newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join("");
}

console.log(solution("word"));

/*
Kata 9
Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Url: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
*/

function countPositivesSumNegatives(input) {
  positiveNum = [];
  negativeNum = [];
  let negativeSum = 0;

  if (input.length < 1 || input === null) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      input[i] > 0 ? positiveNum.push(input[i]) : negativeNum.push(input[i]);
    }

    for (let i = 0; i < negativeNum.length; i++) {
      negativeSum = negativeSum + negativeNum[i];
    }
    return [positiveNum.length, negativeSum];
  }
}

countPositivesSumNegatives([10, 6, -11]);
