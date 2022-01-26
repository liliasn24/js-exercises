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
  number++;
  console.log(number1);
}
