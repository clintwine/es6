//spread operator -- takes an iterable like an array or string and expands it
let a = [30, 40, 50]
let b = [10, 20, ...a, 60, 70];  //[ 10, 20, 30, 40, 50, 60, 70 ]

let m = { a: 1, b: 2, c: 3}
let n = { d: 1, e: 2, f: 3}
let c = {...m, ...n}  // { a: 1, b: 2, c: 3, d: 1, e: 2, f: 3 }

//Rest Operator
//*****************************************************
function print(...a){
  console.log(a);
}
print(4,5,6,3,6);  //[ 4, 5, 6, 3, 6 ]

function square(...a) {
  return a.map( e => e * 2) //collects all values of a as a variable
}
square(1,2,3,4,5,10); //[ 2, 4, 6, 8, 10, 20 ]

function add(...a) {
  return a.reduce( (accum, cValue) => (accum + cValue), 0 );
  
}
add(1,2,3,4,5,10);  //25

the rest operator needs to be the last argument 
function printer(name, ...a){
  console.log(name);
  console.log(a);
}
//*****************************************************

//Template string 
//*****************************************************
let myName = 'John';
let d = `Hello ${myName} you are 20`; //'Hello John you are 20'
//*****************************************************

//destructuring
//*****************************************************
let [thirty, fourty] = a;  //destructuring used to unpack values from data structures(arrays, objects)
console.log(thirty) //30
console.log(fourty) //40

let animals = ['lion', 'monkey', 'birds'];
let [mufasa, wiseman] = animals;
console.log(mufasa, wiseman);

//using default value with destructuring
let fiat, honda;
[fiat = "60km", honda = "20km"] = ["10km"]
console.log(fiat, honda); //10km , 20km

// --------------------------------
// Assigning the rest of an array to a variable
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
// --------------------------------

// ----------------------------------------------------------------
//we can use functions to return the values for the array
function f() {
	return ['lion', 'monkey', 'birds'];
}

[mufasa, , birdy] = f()  // Here we are returning the values ['lion', 'monkey', 'birds'], Mufasa the gets value lion and birdy gets the value birds
let kings = {name: "mufasa" , kingdom: "zambezi", kids: 1 }
// ----------------------------------------------------------------

//  let name = kings.name
//  let kids = kings.kids

//with destructuring we can write this as
let {name, kids} = kings
console.log(name, kids); // mufasa 1


({name, kids} = kings)  //if we had used let to declare name and kids previously, to run this we need to use the brackets

//renaming the variables
const num = { x: 100, y: 200 };
const { x: newVar1, y: newVar2 } = num; // here both x and y become undefined and newVar1 ==> 100 , newVar2 ==> 200
//*****************************************************

// -------------------------------
// Example 2
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// The (w) & (h) property is essentially renaming the (width) & (height) props

function showMenu({
  title = "Untitled", //creating a default value
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2], // items first element goes to item1, second to item2
}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu(options);
// -------------------------------


//Nested destructuring
const songs = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "Just Like You", singer: "NF", duration: 3.23 },
  { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
];

// const [, , { singer }] = songs;
const [, , { singer: s }] = songs;
console.log(s);

//arrow functions are anonymous functions
//Map, filter, reduce
let greater30 = b.filter((e) => e > 30); //[ 40, 50, 60, 70 ]
//The filter function will create an array with every elemt that returned a true


//es6 helper methods

//String.repeat() returns a new string with concatenated copies
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'

//Searching with startsWith, endsWith, includes
console.log("butterfly".startsWith("butter")); //true
console.log("butterfly".endsWith("butter")); //false
console.log("butterfly".endsWith("fly")) //true
console.log("butterfly".includes("tt"));

//Number cheking
Number.isFinite(10);
Number.isSafeInteger(Math.pow(2, 54)); //false   -- because it produces number too high for javasript
Number.isSafeInteger(Math.pow(2, 50));  //true

//Modules, import and export
//modules are used to separate/break up code, so its not so many

//to export a function or variable, we use export { variableName }
/***
 * e.g
 * const fellow = ['james', 'henry', 'tudor']
 * export { fellow } //exports this variable fellow
 * then we go to the file where wer need fellow
 * import { fellow } from theFileWhereFellowIs.js 
 * **/
 
 //Class and constructor functions are same -- I i have illustrated this with code  -- Anima and Animal2
 
 class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	}
	
	hello() {
	  console.log(`Hi! i'm ${this.name} from Class Animal Kingdom`)
	}
}

let king = new Animal('mufase', 13);
king.hello();


function Animal2(name, height) {
  this.name = name;
  this.height = height;
}

Animal2.prototype.hello = function() { return console.log(`Hi! i'm ${this.name} from Function Animal2 Kingdom`) };
let king2 = new Animal2('mufase', 14);
king2.hello()


//can extend Animal class



//Data structures
//Set  -- like an array, but stores unique values

let f = new Set();
f.add(10);
f.add('hello');
f.add({x: 1, y: 12});
f.add(name);
f.add(10);  // this is not entered as its a duplication

console.log(f);  //Set { 10, 'hello', { x: 1, y: 12 }, 'mufasa' }

//set methods
f.has(10);
f.size;
let g = new Set([4,5,6,7]); //Set { 4, 5, 6, 7 }

//g.values == produces an iterator, so we need a for loop to go through iterator

for(let element of g.values()){
  console.log(element);
}


let g_array = new Array(...g); //creating an array from a set [ 4, 5, 6, 7 ]

//Map
//a Map is a better collection of data, it allows us to use primitives, objects, functions as key value
let f = new Map();

f.set("string key", "yes i know");
f.set({x : 1}, "an object key");

let key_3 = () => "I am a function";

f.set(key_3, "This is a function key");

//also Maps can be created by passing 1 x 2 arrays(an iterable)

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let numMap = new Map(numArr);
console.log(numMap);  // Map { 1 => 'one', 2 => 'two', 3 => 'three' }


let typedString = "fkdhf;kvbnadguigityhenvegahnvaoptueybvb";
let newMap =  new Map()

typedString.split('').map( e => {
  if(!newMap.has(e)) {
    newMap.set(e, 1);
  }else {
    newMap.set(e, newMap.get(e) + 1)
  }
  
});

//Promises

const root = 'http://jsonplaceholder.typicode.com/posts/1';

fetch(root, {method: "GET"})
.then(response => response.json())
.then(json => console.log(json))

//Generators


function* countMaker() {
	let count = 0;
	while(count < 3) {
		yield ++count ;
	}
}

let countGen = countMaker();
console.log(countGen.next());
console.log(countGen.next());
console.log(countGen.next());
console.log(countGen.next());
console.log(countGen.next());

function* evenGen() {
  let count = 0;
  while(true) {
    let reset = yield count += 2;   //the reset value is gotten when you write evens.next(true)
    if(reset) count = 0;
  }
}


let evens = evenGen();
for( let i = 0; i < 10; i++) {
  console.log(evens.next().value);
}


/*
*FOR IN prints the INDEX of an array
*FOR OF prints the Values of the array
*
*/

let names = ["james", "Jon", "paul"];

//FOR IN
for( let index in names ) {
  console.log(
    `index: ${index}
    values: ${names[index]}`);
    
}

//FOR OF
for( let i of names ) {
  console.log(i);
};

//objects
let family = {"fam" : "Ago"}
let me = {"name" : "chi"}
//To make family a protype of the "me" object we do

Object.setPrototypeOf(me, family)  //Or let chi = Object.create(family);

//To know what prototype an object is made from we do Object.getPrototypeOf(me)
Object.getPrototypeOf(me);

//We can check if family is the protype of me by doing family.isPrototypeOf(me); returns true/false
family.isPrototypeOf(me); 

//we can check if an object has a certain property
me.hasOwnProperty('name'); //true
me.hasOwnProperty('fam'); //false as this is on its prototype

//Classes
//the constructor function runs everytime a new instance is created using the new keyword
//the new operator creates the Object

class Widget {
  constructor(name, description, url){  //the constructor function runs everytime the new operator is called
  
  }
  
  parse() {
    
  }
  
  render(){
    //...
  }
}

//to use the class to create an object we do
let WidgetInstance = new Widget('name', 'description', 'url'); 


class SponsorWidget extends Widget {
  constructor(name, description, url){  //the constructor function for SponsorWidget
    super();  //caused the parent class constructor to be invoked
    this.name = name;
  }
  render(){
    let parsedName = super.parse(this.name);  //the super here references the data in the parent class
  }
}


//Modules
//when importing a class , you have to run the new keyword to get it to create an instance of the class


//In flash-message.js file
/* export default class FlashMessage {
    // ...
 }
*/

/* In app.js File
import FlashMessage from './flash-message';  

let flash = new FlashMessage("Hello");  // here we create an instance
flash.renderAlert();
flash.renderLog();

*/

//Instead of creating the same const = MAX_REPLIES in various functions
//we can create one file that has all the constants and then import them to various other theFileWhereFellowIs

/* Inthe constant.js file
const MAX_USERS = 3;
const MAX_REPLIES = 3;
export { MAX_USERS, MAX_REPLIES };
*/

/* in the list-replies.js file 
import { MAX_REPLIES } from './constants';
function listReplies(replies = []){
  if(replies.length > MAX_REPLIES){
    //...
  }
}

*/

/* in the display-watchers.js file 
import { MAX_USERS } from './constants';
function displayWatchers(watchers = []){
  if(watchers.length > MAX_USERS){
    //...
  }
}
*/

 



 
