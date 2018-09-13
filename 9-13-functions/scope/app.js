
// Scope is the restriction of where in your code that you can
//access or use variables


//Block Scope local scope
//global scope

//Let and cost are only available in the block
//that they are declared

// {
//   const item = ' book';
//   console.log(item);
// }

//console.log(item);

//Hoisting, leaks out of the block

//In general,, we want to control our scope as tightly as possible
//so thats why we want to use const and let
//
// const book = 'dharma bums';
//
// {
//   const item = 'wallet';
//   console.log(book);
//   console.log(item);
//   {
//     console.log(item)
//     if () {
//       if () {
//         //both of these would work
//         console.log(item)
//         console.log(book)
//       }
//     }
//   }
// }

//Scope flows from the outside in


//
// const setItem = () => {
//   const item = 'meatball';
//   return item;
// }
//
// const getItem = () => {
//   return item;
// }
//
// // --> would not work
// console.log(getItem());

//Activity

// let count = 0;
//
// for (var i = 0; i < 10; i++) {
// }
// console.log(count);


const checkSquare = (num) => {
  if (Math.sqrt(num) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSquare(49));
console.log(checkSquare(2));

//Write function checkToLimit that will loop up to arbitrary
//limit brought in as a param (say, 100), and console console.log
//whether each number is a perfet square. Call upon previously
//defined checkQuare funciton

const checkToLimit = (limit) => {
  for(let i = 0; i <= limit; i++) {
    console.log(checkSquare(i));
  }
}

checkToLimit(50);
