//Bang Operator or not operator !
// let toggle = true;
// console.log('this is toggle', toggle);
//
// toggle = !toggle;
//
// console.log('this is toggle now', toggle);

//All values in javascript have an implicit 'Truthiness'
//meaning they can be evaluated as true or false

//All of these are 'Falsey' values
//false
//0
//""
//NaN
//null
//undefined
//
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(NaN));


//Equality Operators

//==, !=, ===, !==

//We want to try to stick with the ===, because we want to make
//sure we know what datatype we are working with


//Comparison Operators
//implicity convert strings to numbers
//<, >, <=, >=

12 >= "12"
// => true

"A" > "a"
// => false
"b" > "a"
// => true
"z" > "abc"
// => true

//lower case takes precedent over uppercase and throughout the
//alphabet z would be the greatest. a the least

//Logical Operators

//&& // checks to see if both conditions are true

// if(true && 1) {
//
// }

//|| // checks to see if either statements are true
//as soon as it finds a true value it evaluates to true
// if(color === 'red' || color === 'blue') {
//
// }

// const input = 'kermit';
//
// if(input === 'kermit') {
//   console.log("You're allowed in kermit");
// } else {
//   console.log('no soup for !');
// }

// 
// const number = 9;
//
// if(number %2 === 0){
//   console.log('this number is even');
// } else {
//   console.log('this is an odd number');
// }
