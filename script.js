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

const newstr = "January, February, March";
const strings = newstr.split("/");
console.log(strings);

// identify the separator next time.
