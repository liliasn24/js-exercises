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
