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
  let positiveNum = 0,
    negativeSum = 0;

  if (!Array.isArray(input) || input.length < 1) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      input[i] > 0 ? positiveNum++ : (negativeSum += input[i]);
    }
    return [positiveNum, negativeSum];
  }
}

/*
Kata 10
Keep Hydrated!

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

Url: https://www.codewars.com/kata/582cb0224e56e068d800003c
*/

function litres(time) {
  return Math.trunc(0.5 * time);
}

/*
Kata 11
Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

Url: https://www.codewars.com/kata/53369039d7ab3ac506000467
*/

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

/*
Kata 12
Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = {"Ryan", "Kieran", "Jason", "Yous"}
Output = {"Ryan", "Yous"}

Input = {"Peter", "Stephen", "Joe"}
Output = {}

Url: https://www.codewars.com/kata/55b42574ff091733d900002f
*/

function friend(friends) {
  friendArray = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) friendArray.push(friends[i]);
  }
  return friendArray;
}

/*
Kata 13
Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.


Url: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
*/

function removeChar(str) {
  charArray = str.split("");
  charArray.pop();
  charArray.shift();
  return charArray;
}

/*
Kata 14
Ones and Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

Url: https://www.codewars.com/kata/578553c3a1b8d5c40300037c
*/

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

/*
Kata 15
Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

Url: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
*/

function findAverage(array) {
  sum = 0;
  if (array.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
}

/*
Kata 16
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1*1 + 2*2 + 2*2 = 9

Url: https://www.codewars.com/kata/515e271a311df0350d00000f
*/

function squareSum(numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] * numbers[i];
  }
  return sum;
}

/*
Kata 17
Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Url: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
*/

function reverseWords(str) {
  newArray = str.split(" ");
  arrayHolder = [];
  for (let i = 0; i < newArray.length; i++) {
    test2 = newArray[i].split("");
    for (let k = test2.length - 1; k >= 0; k--) {
      arrayHolder.push(test2[k]);
    }
    arrayHolder.push(" ");
  }
  arrayHolder.pop();
  return arrayHolder.join("");
}

/*
Kata 18
Sum Arrays

Description:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0"

Url: https://www.codewars.com/kata/53dc54212259ed3d4f00071c
*/

// Sum Numbers
function sum(numbers) {
  count = 0;
  if (!numbers) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      count += numbers[i];
    }
    return count;
  }
}

/*
Kata 19
Function 1 - hello world

Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

Url: https://www.codewars.com/kata/523b4ff7adca849afe000035
*/

const greet = () => {
  return "hello world!";
};

/*
Kata 20
List Filtering

Description:
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Url: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
*/

function filter_list(l) {
  newChar = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== "string") {
      newChar.push(l[i]);
    }
  }
  return newChar;
}

/*
Kata 21
Counting sheep...

Description:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
Url: https://www.codewars.com/kata/54edbc7200b811e956000556
*/

function countSheeps(sheep) {
  count = 0;
  if (sheep.length <= 0) {
    return count;
  } else {
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i] === true) count++;
    }
    return count;
  }
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
