
//An array is a list they go between square brackets


const list = ['chair', 'charger', 'nook'];

const numbers = [1, 2, 3, 4];

const mixedDatatypes = [[1,2,3], 1, 'string', {}, null, NaN];

const empty = [];

const faveFoods = ['sushi', 'tacos', 'cheese'];

// console.log(faveFoods);

const shirts = ['T-shirt', 'polo', 'v-neck'];

// console.log(shirts[1]);
//
// console.log(shirts.length, 'length');

//Looping over an array

// const kitchenSink = ['dirty spoon', 'sponge', 'soap', 'water'];
// //print each value of the array
// for (let i = 0; i < kitchenSink.length; i++) {
//   console.log('This is in my sink: ' + kitchenSink[i]);
// }

const drSeuss = ['cat in the hat', 'sam i am', 'grinch', 'thing one', 'thing two', 'cindy loo who', 'jojo mcdodd'];

//Print all elements in array
//
// for (let i = 0; i < drSeuss.length; i++) {
//   console.log(drSeuss[i]);
// }
//
// //Print odd numbers
//
// for (let i = 1; i < drSeuss.length; i+=2){
//   console.log(drSeuss[i]);
// }

//log index number and item of every odd on separate lines
// for (let i = 1; i < drSeuss.length; i+=2){
//   console.log(drSeuss[i]);
//   console.log(i);
// }

//use conditionals to solve following

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
                        "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

//even number items using a conditionals

// for (let i = 0; i < looneyTunesChars.length; i++) {
//   if(i % 2 === 0){
//     console.log(looneyTunesChars[i]);
//   }
// }

//even numbered items, and 3 index

// for (let i = 0; i < looneyTunesChars.length; i++) {
//   if(i % 2 === 0 || i === 3){
//     console.log(looneyTunesChars[i]);
//   }
// }

//odd numbered items
//
// for (let i = 0; i < looneyTunesChars.length; i++) {
//   if(i % 2 != 0){
//     console.log(looneyTunesChars[i]);
//   }
// }


//push and pop are methods


//Loops Lab

//1.
// for ( let num = 50; num >= 20; num--) {
//   if (num % 3 === 0) {
//     console.log(num);
//   }
// }

//2.
// for (let num = 1; num >= 0; num++) {
//   console.log(num);
// }

//3.
// const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];
//
// for (let i = 1; i < presidents.length; i+=2) {
//     console.log(presidents[i]);
//   }

//4.
// const menu = [{name: "pizza", glutenFree: false},
//   {name: "salad", glutenFree: true},
//   {name: "donut", glutenFree: false},
//   {name: "steak", glutenFree: true},
//   {name: "chicken", glutenFree: true},
//   {name: "cheeseburger", glutenFree: false}];
//
// let array = [];
//
// for (let i = 0; i < menu.length; i++) {
//   if (menu[i].glutenFree === true) {
//       array.push(menu[i]);
//   }
// }
//
// console.log(array);

//5.
// const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts',
// 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " +
// " Medicine Show", 3, 2, "I want the calzone from pizanos",
// "Death blow", "Firestorm", "48", 30]
//
// let array = [];
//
// for (let i = 0; i < mixedArray.length; i++) {
//   if (typeof mixedArray[i] !== 'number') {
//     array.push(mixedArray[i]);
//   }
// }
// console.log(array);

//BONUS
const league = [ {
  name: "NFL",
  players:[{ name: "Tom Brady", goat: false},{name: "Walter Payton", goat: true}]
  },
  {
    name: "NBA",
    players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},
  {
    name: "MLB",
    players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]
  } ]

let array = [];

for (let i = 0; i < league.length; i++) {
  for (let j = 0; j < league[i].players.length; j++) {
    if (league[i].players[j].goat === true) {
      array.push(league[i].players[j]);
    }
  }
}

console.log(array);
