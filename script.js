//Functions - arrow

const sum = () => {
  const result = 5 + 5;
  console.log(result);
};

sum();

//Functions - declaration

function dec(a, b) {
  const res = a + b;
  console.log(res);
}
dec(5, 3);

function computeReminder(a, b) {
  if (b === 0) {
    console.log("Infinity");
  } else {
    return a % b;
  }
}

computeReminder(10, 2);

//Loops

for (let number = 10; number <= 50; number++) {
  console.log(number);
}

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 10);

let number1 = 0;
let number2 = 0;

while (number1 < 3) {
  number1++;
  console.log(number1);
}

// Split ()

const string = "Hello my name is Lilia";
const words = string.split(" ");
console.log(words);
console.log(words[2]);

const characters = string.split("");
console.log(characters);
console.log(characters[0]);

// Reversing a string using split

const string = "Lilia";
const reverse = string.split("").reverse().join("");
const reverseButNotJoin = string.split("").reverse();

console.log(reverseButNotJoin);

console.log(reverse);

const newstr = "Jan/uary, Feb/ruary, Mar/ch";
const strings = newstr.split("");
console.log(strings);

// identify the separator next time.
// if you add a space on the separator " ", then it will separate words not letter by letter, but if you do "", note there is no space between the quotes, then it will break the string word by word. THE SEPARATOR IS WHATEVER YOU WANT TO LOOK FOR IN THE STRING AND MAKE THE SEPARATION THERE!! AH!!!
const word = newstr.split(" ");
const slash = newstr.split("/");
console.log(slash);

// Splice

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

days.splice(1, 0, "Tue");
console.log(days);

days.splice(3, 0, "hello");
console.log(days);

let animals = ["leon", "fish", "dog", "cat"];
let removeFish = animals.splice(1, 1);
console.log(removeFish);
console.log(animals);

//Slice
const fruits = [
  "banana",
  "apple",
  "orange",
  "strawberry",
  "watermelon",
  "kiwi",
];

console.log(fruits.slice(2));

console.log(fruits.slice(1, 3));

//Spread operator ...()

let number = [0, 1, 2, 3, 4, 5];

let newNumber = 12;

number = [...number, newNumber];
//  no need to console.log, when this runs, the number 12 will be added over and over on a new array.

// Reverse() method

const arrayOriginal = ["one", "two", "three", "four", "five", "six"];
console.log("original array:", arrayOriginal);

const reversedArray = arrayOriginal.reverse();
console.log("reversed array:", reversedArray);

// NOTE: The original array has changed. if you console log the original array, it will print the reversed array. reverse is destructive, it changes the original array.

// join method
const itmes = ["table", "chair", "tv", "lamp"];
console.log(items.join());
//this creates a string of all the items with a coma

console.log(itmes.join(""));
//this creates a string of all the items with no coma
console.log(items.join("-"));
//this creates a string of all the items with a dash between the items

// Binary Search algorith
const hairMetal = [
  "Kiss",
  "Guns n Roses",
  "Van Halen",
  "Sammy Hagar",
  "Aerosmith",
  "Twisted Sister",
  "Motley Crue",
  "White Snake",
  "Poison",
  "Europe",
];
let searchTerm = "Def Leppard";
let found = false;
let index = -1;
for (let i = 0; i < hairMetal.length; i++) {
  if (hairMetal[i] === "Def Leppard") {
    found = true;
    index = i;
  }
}
if (found) {
  console.log(`${searchTerm} is located at index ${index} in the array`);
} else {
  console.log(`${searchTerm} not found`);
}

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log(i + " fizzbuzz");
    } else if (i % 3 === 0) {
      console.log(i + " fizz");
    } else if (i % 5 === 0) {
      console.log(i + " buzz");
    }
  }
}

fizzBuzz(30);

//Write a function that takes an integer minutes and converts it to seconds. Edabit exercise 7/20

function convert(minutes) {
  let seconds = minutes * 60;
  console.log(seconds);
  return seconds;
}

convert(10);

function giveMeSomething(a) {
  return "something " + a;
}

giveMeSomething("is better than nothing");
giveMeSomething("interesting");
giveMeSomething("something");

function findPerimeter(length, width) {
  return length * 2 + width * 2;
}

findPerimeter(6, 7);

function remainder(x, y) {
  return x % y;
}

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);

function convert(minutes) {
  return minutes * 60;
}

convert(5);
convert(3);

function howManySeconds(hours) {
  return hours * 60 * 60;
}

howManySeconds(2);
howManySeconds(50);
howManySeconds(100);

function isSameNum(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

isSameNum(4, 8);
isSameNum(2, 2);
isSameNum(2, "2");

// why is this function better?
// because strict equality (see line 221 in concepts html)

function isSameNum(num1, num2) {
  return num1 === num2;
}

isSeven(4) ➞ false

isSeven(9) ➞ false

isSeven(7) ➞ true



// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
	return arr[0];
}

getFirstValue([1, 2, 3])
getFirstValue([80, 5, 100])


// Create a function that takes a boolean variable flag and returns it as a string.


function boolToString(flag) {
	return flag.toString();
}
boolToString(true)


// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.


// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function sumPolygon(n) {
	return (n - 2) * 180;
}

function and(a, b) {

	return a > 0 && b > 0;
}

// arrow function 

arrowFunc = (n) => n;

arrowFunc(3);
arrowFunc(true);

// eval()
console.log(eval('2+2'));

function calculator(str) {
	return eval(str);
}

calculator("23+4")

function calculator(str) {
	return Function(str);
}

calculator("23+4")


function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)]  //note the coma to get the correct result 
}
minMax([1, 2, 3, 4, 5])  // [1, 5]
minMax([2334454, 5])   // [5, 2334454]
minMax([1])   // [1, 1]

//Buggy code | order of if else statements 
function greeting(name) {
  if(name === "Mubashir") {
   return "Hello, my Love!";
  } else{
   return "Hello, " + name + "!";
    }
 }

 function addUp(num) {
	let b = num / 2;
	let c = 2 * 1;
	let d = num - 1;
	
	return b * (c + d);
	
}

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

//  the above function works, but heres a better answer. 

function addUp(num) {
  return (num * (num + 1))/2;
}


//  Ternary Operation 

function isSeven(x) {
	return x == "7" ? true : false;
}

// isSeven(4) ➞ false

// isSeven(9) ➞ false

// isSeven(7) ➞ true


const convert = (hours, minutes) => hours * 3600 + minutes * 60

//convert(1, 3) ➞ 3780

//convert(2, 0) ➞ 7200

//convert(0, 0) ➞ 0


function divisible(num) {
	return num % 100 === 0;
}

// or arrow function yields the same result

divisible = (num) => num % 100 === 0;

// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true


// See this code note the difference between arrow function and regular functions, both are correct

function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay) {
		return true;
	} else {
		return false;
	}
}

profitableGamble = (prob, prize, pay) => prob * prize > pay;

// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true

function divisibleByFive(n) {
	return n % 5 === 0;
}
  // or arrow function 
divisibleByFive = (n) => n % 5 === 0;


//  ternary operator
return (a + b == 10 || a == 10 || b== 10 ? true : false)


function calculateFuel(n) {
	return ( n * 10 < 100 ? 100 : n * 10 );
}

// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

function getVoteCount(votes) {
	return (votes.upvotes - votes.downvotes);
}

getVoteCount({ upvotes: 13, downvotes: 0 }) /* 13 */

getVoteCount({ upvotes: 2, downvotes: 33 })  /* -31 */

getVoteCount({ upvotes: 132, downvotes: 132 })  /*  0 */

// ternary operation with 1 + conditions 
const equilibrium = x => x > 0 ? 'positive' : x < 0 ? 'negative' : true;

// this is the same as the above
function equilibrium (x) {
	if (x > 0) return "positive";
	if (x < 0) return "negative";
	return true;
}

// Destructuring arrays

const arr = [1, 2, 3, 4, 5, 6]
let [a, b] = arr /*but this is a better answer

or */

let a = arr[0];
let b = arr[1];

// Math.abs()
function returnNegative(n) {
	return -Math.abs(n);
}

// Math.round
function imposterFormula(i, p) {
	let result = Math.rloor(100 * (i / p));
	return `${result}`;
}

// Logical Not (!)

function flipBool(b) {
	return !b === true ? 1 : 0;
}

// better simpler code.  note that we don't need the ! becuase b is getting evaluated already 
const flipBool=b=> b ? 0 : 1;

flipBool(true)
flipBool(false)
flipBool(1)
flipBool(0)

// join method

function arrayToString(arr) {
	return arr.join('');
}


// string to number and number to string conversion 

function intToString(num) {
	return `${num}`;
}

intToString(4)


function stringToInt(num) {
	return num * 1
}

stringToInt("4")

// leap year order of operations 

function leapYear(year) {
	return ((0 == year % 4) && (0 != year % 100) || (0 == year % 400));
}
leapYear(2020);

//eval() method

function operate(num1, num2, operator) {
	return eval(num1 + operator + num2)
}

operate(7, 10, "-")

// decimals

function areaShape(base, height, shape) {
	return shape === "triangle" ?  (base * height) / 2 : base * height;
}

// either of these will work

function areaShape(base, height, shape) {
	return shape === 'triangle' ? 0.5 * base * height : base * height;
}

// areaShape(2, 3, "triangle") ➞ 3

// areaShape(8, 6, "parallelogram") ➞ 48

// areaShape(2.9, 1.3, "parallelogram") ➞ 3.77


// concatenating with spread operator and the concat method 
function concat(arr1, arr2) {
  return [...arr1,...arr2]
  }

  function concat(arr1, arr2) {
    return arr1.concat(arr2);
  }

  // recursion

  let countdown = (n) => {
    console.log(n)
    if(n === 0){
      console.log("Countdown Complete!")
    } else {
      countdown(n - 1)
    }
  }


  //this is how you sum the elements of an array 

  function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
   return sum
  }

  sumArray([1, 2, 3, 4, 5]);


  //arguments.lenght
  function func1(a, b, c) {
    console.log(arguments.length);
  }

  //array filter

  function arrBetween(num1, num2, arr) {
    return arr.filter(arr => arr > num1 && arr < num2)
  }
 
  //or this 

  function arrBetween(num1, num2, arr) {
    return arr.filter(n=> n > num1 && n < num2);
  }

  // note n or arr could be any letter not necesarly the array name
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

//arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

//arrBetween(7, 32, [1, 2, 3, 78]) ➞ []