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

/*
Kata 22
How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


Url: https://www.codewars.com/kata/5601409514fc93442500010b/
*/

function betterThanAverage(classPoints, yourPoints) {
  average = 0;
  for (const points of classPoints) {
    average += points;
  }
  average /= classPoints.length;
  console.log(average);
  return yourPoints > average ? true : false;
}

/*
Kata 21
Are You Playing Banjo?

Description:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

Url: https://www.codewars.com/kata/53af2b8861023f1d88000832/
*/

function areYouPlayingBanjo(name) {
  charArray = name.split("");
  return charArray[0] === "R" || charArray[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not plays banjo`;
}

/*
Kata 22
Binary Addition


Description:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

Url: https://www.codewars.com/kata/551f37452ff852b7bd000139
*/

function addBinary(a, b) {
  return (a + b).toString(2);
}

/*
Kata 23
Categorize New Member

Description:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

Url: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
*/

function openOrSenior(data) {
  const output = [];
  for (const [i, n] of data) {
    console.log(i, n);
    if (i >= 55 && n > 7) output.push("Senior");
    else output.push("Open");
  }
  return output;
}

/*
Kata 24
Opposites Attract

Description:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

Url: https://www.codewars.com/kata/555086d53eac039a2a000083
*/

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

/*
Kata 25
DNA to RNA Conversion

Description:
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

Url: https://www.codewars.com/kata/5556282156230d0e5e000089/
*/

function DNAtoRNA(dna) {
  const charArray = dna.split("");
  for (let i = 0; i < charArray.length; i++)
    if (charArray[i] === "T") charArray[i] = "U";
  return charArray.join("");
}

/*
Kata 26
Odd or Even?

Description:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Url: https://www.codewars.com/kata/5949481f86420f59480000e7
*/

function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i];
  return sum % 2 === 0 ? "even" : "odd";
}

/*
Kata 27
Find the smallest integer in the array

Description:
Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

Url: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/
*/
function findSmallestInt(arr) {
  let smallest = arr[0];
  for (const number of arr) {
    if (smallest > number) smallest = number;
  }
  return smallest;
}

/*
Kata 28
Beginner - Reduce but Grow

Description:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Url: https://www.codewars.com/kata/57f780909f7e8e3183000078
*/

function grow(x) {
  let value = 1;
  for (const number of x) {
    value = value * number;
  }
  return value;
}

/*
Kata 29
Disemvowel Trolls

Description:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

Url: https://www.codewars.com/kata/52fba66badcd10859f00097e
*/

function disemvowel(str) {
  const firstArr = [];
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const test = str.split(" ");

  for (const l of test) {
    firstArr.push(
      l
        .split("")
        .filter((cur) => (!vowels.includes(cur) ? cur : ""))
        .join("")
    );
  }
  return firstArr.join(" ");
}

/*
Kata 30
Descending Order

Description:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

Url: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/
*/

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

/*
Kata 31
Convert a string to an array

Description:
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they",  "are", "my", "favorite"]

Url: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
*/

function stringToArray(string) {
  return string.split(" ");
}

/*
Kata 32
String ends with?

Description:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Url: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
*/

function solution(str, ending) {
  arrayStr = str.split("");
  endingStr = ending.split("");
  test = arrayStr.slice(arrayStr.length - endingStr.length).join("");
  return test === ending ? true : false;
}

console.log(solution("abcde", "abc"));
