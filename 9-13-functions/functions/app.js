console.log('hi');

// if(BOOLEAN EXPRESSION) {
//   //this block runs if the EXPRESSION is true
//
// }


//for(let i 0; i < 10; i++) {
  //blocks to be repeated until condition is meant
//}

// Functions, act like variables and the store a code block
//for later use

// arrow function (new with es6)
const funct = () => {
  //code execute later
}

//This is defining a function
const printBoo = () => {
  //this block of code with run when the function is executed
  //or invoked
  console.log('boo');
}

//The is executing a function invoking or calling a function
printBoo();

const printSum = (num1, num2) => {
  console.log(num1 + num2)
}

printSum(10, 10);

const printTriangle = () => {
  console.log('#');
  console.log('##');
  console.log('###');
  console.log('####');
  console.log('#####');
}

printTriangle();

//Functions as a general rule of thumb should do one thing
//and do it really well

//Input is called a parameter
const checkInputLength = (input) => {
  // were expecting input to be a string
  if(input.length > 10) {
    console.log('input is greater than ten')
  } else {
    console.log('input is too small');
  }
};

//calling the function
//with an argument
checkInputLength('anything we want we can put here');

const sayName = (name) => {
  console.log(`hello! ${name}`);
  //the is the same thing
  console.log("hello!" + name);
}

sayName('jerry');
sayName('kramer');

//when start repeating yourself its an indictiation that you could
//use a funciton

//repeating yourself with minor differences
console.log(`Hello Jerry`);

const printParameter = (input) => {
  console.log(input);
}

printParameter('x');

const minusOne = (num) => {
    console.log(num - 1);
}

minusOne(10);
minusOne(100);
minusOne(Infinity);

const getLastElement = (arr) => {
  console.log(arr[arr.length - 1])
}

getLastElement([1, 2, 3]);


const multiply = (num1, num2) => {
  console.log(num1 * num2);
}

multiply(4, 5);


// To give a function a value we must return that value from the
// function. remember console.log is for you to see what is going on

const divide = (a, b) => {
  return a / b;
}

console.log(divide(9, 3), 'this is the output');

const divisionResult = divide(9, 3);

console.log(divisionResult);

//Activity
const calculateArea = (width, length) => {
  return width * length;
}

console.log(calculateArea(2, 4));

//Activty and Research
const sum = (a, b, c) => {
  let s = a + b + c;
  return s.toString();
}
console.log((sum(1,2,3)));

//Palindrome

//We want to write a function to see if a string is a Palindrome

const isPalindrome = (word) => {
console.log(word.split('').reverse().join(""));
const reversedWord = word.split('').reverse().join("");
if(word === reversedWord) {
  return true
} else {
  return false
  }
}

console.log(isPalindrome('taco'));
isPalindrome('race car');
