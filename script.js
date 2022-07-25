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
