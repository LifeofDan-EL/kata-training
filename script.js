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

/*
Kata 33
Convert number to reversed array of digits

Description:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]


Url: https://www.codewars.com/kata/5583090cbe83f4fd8c000051
*/

function digitize(n) {
  return n.toString().split("").map(Number).reverse();
}

/*
Kata 34
Remove String Spaces

Description:
Write a function that removes the spaces from the string, then return the resultant string.

Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

Url: https://www.codewars.com/kata/57eae20f5500ad98e50002c5/
*/
function noSpace(x) {
  return x.replaceAll(" ", "");
}

/*
Kata 35
Highest and Lowest

Description:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

Url: https://www.codewars.com/kata/554b4ac871d6813a03000035/
*/

function highAndLow(numbers) {
  const test = numbers
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  return `${test[0]} ${test[test.length - 1]}`;
}

highAndLow("1 2 -3 4 5");

/*
Kata 36
The highest profit wins!

Description:
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

Url: https://www.codewars.com/kata/554b4ac871d6813a03000035/
*/

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/*
Kata 37
Area or Perimeter

Description:
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

Url: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/
*/

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : l * 2 + w * 2;
};

/*
Kata 38
Two Oldest Ages

Description:
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

Url: https://www.codewars.com/kata/511f11d355fe575d2c000001/
*/

function twoOldestAges(ages) {
  const num = ages.sort((a, b) => b - a);
  return [num[1], num[0]];
}

/*
Kata 39
Bubblesort Once

Description:
Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how not to sort a list. Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.

At the heart of Bubblesort is what is known as a pass. Let's look at an example at how a pass works.

Consider the following list:

9, 7, 5, 3, 1, 2, 4, 6, 8
We initiate a pass by comparing the first two elements of the list. Is the first element greater than the second? If so, we swap the two elements. Since 9 is greater than 7 in this case, we swap them to give 7, 9. The list then becomes:

7, 9, 5, 3, 1, 2, 4, 6, 8
We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to the last two elements. When the pass is complete, our list becomes:

7, 5, 3, 1, 2, 4, 6, 8, 9
Notice that the largest value 9 "bubbled up" to the end of the list. This is precisely how Bubblesort got its name.

Task
Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.

Url: https://www.codewars.com/kata/56b97b776ffcea598a0006f2/
*/

function bubblesortOnce(a) {
  let result = [...a];
  let pass;
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] > result[i + 1]) {
      pass = result[i + 1];
      result[i + 1] = result[i];
      result[i] = pass;
    }
  }
  return result;
}

/*
Kata 40
Square Every Digit

Description:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

Url: https://www.codewars.com/kata/546e2562b03326a88e000020/
*/

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((a) => Number(a) * Number(a))
      .join("")
  );
}

/*
Kata 41
Beginner Series #3 Sum of Numbers

Description:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Your function should only return a number, not the explanation about how you get that number.

Url: https://www.codewars.com/kata/55f2b110f61eb01779000053/
*/

function getSum(a, b) {
  let sum = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) sum += i;
  } else if (a > b) {
    for (let i = a; i >= b; i--) sum += i;
  }
  return sum;
}

/*
Kata 42
Make a function that does arithmetic!

Description:
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!

Url: https://www.codewars.com/kata/583f158ea20cfcbeb400000a
*/

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

/*
Kata 43
Sort the odd

Description:
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

Url: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
*/

function sortArray(array) {
  const oddArr = array.filter((a) => a % 2 !== 0).sort((a, b) => a - b);

  let k = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = oddArr[k];
      k++;
    }
  }
  return array;
}

/*
Kata 44
Find the stray number

Description:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

Url: https://www.codewars.com/kata/57f609022f4d534f05000024
*/

function stray(numbers) {
  const test = numbers.sort((a, b) => a - b);
  return test[0] !== test[1] ? test[0] : test[test.length - 1];
}

/*
Kata 45
Will there be enough space?

Description:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

Url: https://www.codewars.com/kata/5875b200d520904a04000003/
*/

function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : on + wait - cap;
}

/*
Kata 46
Twice as old

Description:
Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

Url: https://www.codewars.com/kata/5b853229cfde412a470000d0
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

/*
Kata 47
Number of People in the Bus

Description:
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

Url: https://www.codewars.com/kata/5648b12ce68d9daa6b000099/
*/

var number = function (busStops) {
  let enter = 0;
  let alighted = 0;

  for (let [n, k] of busStops) {
    enter += n;
    alighted += k;
  }

  return enter - alighted;
};

/*
Kata 48
Powers of 2

Description:
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


Url: https://www.codewars.com/kata/57a083a57cb1f31db7000028
*/

function powersOfTwo(n) {
  arr = [];
  for (let i = 0; i <= n; i++) arr.push(2 ** i);
  return arr;
}

/*
Kata 49
Complementary DNA

Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

Url: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/
*/

function dnaStrand(dna) {
  const test = dna.split("");

  for (let i = 0; i < test.length; i++) {
    test[i] === "A"
      ? (test[i] = "T")
      : test[i] === "T"
      ? (test[i] = "A")
      : test[i] === "C"
      ? (test[i] = "G")
      : (test[i] = "C");
  }

  return test.join("");
}

/*
Kata 50
Growth of a Population

Description:
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

Url: https://www.codewars.com/kata/563b662a59afc2b5120000c6/
*/

function nbYear(p0, percent, aug, p) {
  let count = 0;
  while (p0 < p) {
    p0 = Math.trunc(p0 + p0 * (percent / 100) + aug);
    count++;
  }
  return count;
}

/*
Kata 51
Count by X

Description:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]

Url: https://www.codewars.com/kata/5513795bd3fafb56c200049e
*/
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

/*
Kata 52
Century From Year

Description:
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here


Url: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
*/

function century(year) {
  return Math.ceil(year / 100);
}

/*
Kata 53
Exes and Ohs

Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Url: https://www.codewars.com/kata/55908aad6620c066bc00002a/
*/

function XO(str) {
  const test = str.toLowerCase().split("");
  let xCount = 0;
  let oCount = 0;

  for (let e of test) {
    if (e === "x") xCount++;
    else if (e === "o") oCount++;
  }

  return xCount === oCount ? true : false;
}

/*
Kata 54
Sort array by string length

Description:
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

Url: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/
*/

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

/*
Kata 55
Money, Money, Money

Description:
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

Url: https://www.codewars.com/kata/563f037412e5ada593000114/
*/
function calculateYears(principal, interest, tax, desired) {
  let y = 0;
  while (desired > principal) {
    interestAmount = principal * interest;
    taxableSum = interestAmount * tax;
    principal += interestAmount - taxableSum;
    y++;
  }
  return y;
}

/*
Kata 56
Count the Digit

Description:
Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Url: https://www.codewars.com/kata/566fc12495810954b1000030/
*/

function nbDig(n, d) {
  let testArr = [];
  let count = 0;
  for (let i = 0; i <= n; i++) {
    testArr.push(String(i * i).split(""));
  }

  for (let num of testArr.flat()) {
    if (Number(num) === d) count++;
  }

  return count;
}

/*
Kata 57
L1: Set Alarm

Description:
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false

Url: https://www.codewars.com/kata/568dcc3c7f12767a62000038
*/

function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}

/*
Kata 58
Find Multiples of a Number

Description:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

Url: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
*/

function findMultiples(integer, limit) {
  let numArr = [];
  for (let i = 1; i <= limit; i++) {
    if (integer * i <= limit) numArr.push(integer * i);
  }
  return numArr;
}

/*
Kata 59
Parse nice int from char problem

Description:
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


Url: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
*/
function getAge(inputString) {
  return Number(inputString.split("")[0]);
}

/*
Kata 60
The museum of incredibly dull things

Description:
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]


Url: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/
*/
function removeSmallest(numbers) {
  const smallestIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, index) => index !== smallestIndex);
}

/*
Kata 61
Find the unique number

Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

Url: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/
*/

function findUniq(arr) {
  const test = arr.sort((a, b) => a - b);
  return test[0] !== test[1] ? test[0] : test[test.length - 1];
}

/*
Kata 62
Reverse List Order

Description:
Output
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

Url: https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/
*/

function reverseList(list) {
  return list.reverse();
}

/*
Kata 63
Transportation on vacation

Description:
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

Url: https://www.codewars.com/kata/568d0dd208ee69389d000016/
*/

function rentalCarCost(d) {
  const initialCost = d * 40;
  return d >= 7 ? initialCost - 50 : d >= 3 ? initialCost - 20 : initialCost;
}

/*
Kata 64
Sum The Strings

Description:
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

Url: https://www.codewars.com/kata/5966e33c4e686b508700002d/
*/

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

/*
Kata 65
Sort Numbers

Description:
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

Url: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/
*/
function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

/*
Kata 66
Sum of two lowest positive integers

Description:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Url: https://www.codewars.com/kata/558fc85d8fd1938afb000014/
*/
function sumTwoSmallestNumbers(numbers) {
  const test = numbers.sort((a, b) => a - b);
  return test[0] + test[1];
}

/*
Kata 67
Will you make it?

Description:
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

Url: https://www.codewars.com/kata/5861d28f124b35723e00005e/
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

/*
Kata 68
Beginner - Lost Without a Map

Description:
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]

Url: https://www.codewars.com/kata/57f781872e3d8ca2a000007e
*/

function maps(x) {
  return x.map((a) => a * 2);
}

/*
Kata 69
5 without numbers !!

Description:
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)

Url: https://www.codewars.com/kata/59441520102eaa25260000bf/
*/

function unusualFive() {
  charArr = ["a", "b", "c", "d", "e"];
  return charArr.length;
}

/*
Kata 70
Are they the "same"?

Description:
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Url: https://www.codewars.com/kata/550498447451fbbd7600041c/t
*/

function comp(array1, array2) {
  if (array1 != null && array2 != null) {
    const a1 = array1
      .map((a) => a * a)
      .sort((a, b) => a - b)
      .join(",");
    const a2 = array2.sort((a, b) => a - b).join(",");
    return a1 == a2;
  } else return false;
}

/*
Kata 71
Double Char

Description:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!

Url: https://www.codewars.com/kata/56b1f01c247c01db92000076/
*/

function doubleChar(str) {
  return str
    .split("")
    .map((a) => a + a)
    .join("");
}

/*
Kata 72
Find the capitals

Description:
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]

Url: https://www.codewars.com/kata/539ee3b6757843632d00026b
*/

var capitals = function (word) {
  const test = word.split("");
  let arr = [];
  for (let i = 0; i < test.length; i++) {
    if (test[i] === test[i].toUpperCase()) arr.push(i);
  }
  return arr;
};

/*
Kata 73
A Needle in the Haystack

Description:
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"

Url: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
*/

function findNeedle(haystack) {
  let num;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      num = i;
    }
  }
  return `found the needle at position ${num}`;
}

/*
Kata 74
Find Maximum and Minimum Values of a List

Description:
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes
You may consider that there will not be any empty arrays/vectors.

Url: https://www.codewars.com/kata/577a98a6ae28071780000989
*/

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

/*
Kata 75
Switch it Up!

Description:
When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".

If your language supports it, try using a switch statement.

Url: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/
*/

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}

/*
Kata 76
Is he gonna survive?

Description:
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

Url: https://www.codewars.com/kata/59ca8246d751df55cc00014c
*/

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

/*
Kata 77
Count the divisors of a number

Description:
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

Url: https://www.codewars.com/kata/542c0f198e077084c0000c2e
*/

function getDivisorsCnt(n) {
  let count = 0;
  const sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      count += 2;
      if (i === sqrt) {
        count--;
      }
    }
  }
  return count;
}

/*
Kata 78
Two to One

Description:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Url: https://www.codewars.com/kata/5656b6906de340bd1b0000ac
*/

function longest(s1, s2) {
  return [...new Set((s1 + s2).split("").sort())].join("");
}

/*
Kata 79
Is it a palindrome?

Description:
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

Url: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
*/

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

/*
Kata 80
Reversed sequence

Description:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

Url: https://www.codewars.com/kata/5a00e05cc374cb34d100000d/
*/

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) arr.push(i);
  return arr;
};

/*
Kata 81
Array.diff

Description:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


Url: https://www.codewars.com/kata/523f5d21c841566fde000009/
*/

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

/*
Kata 82
Grasshopper - Check for factor

Description:
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.


Url: https://www.codewars.com/kata/523f5d21c841566fde000009/
*/

function checkForFactor(base, factor) {
  return base % factor === 0;
}
console.log(checkForFactor(10, 2));
