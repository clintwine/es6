//spread operator -- takes an entry and spreads it
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
//*****************************************************

//Template string 
//*****************************************************
let myName = 'John';
let d = `Hello ${myName} you are 20`; //'Hello John you are 20'
//*****************************************************

//destructuring
//*****************************************************
let [thirty, fourty] = a;  //destructuring used to take vaules from a into our new vales
console.log(thirty) //30
console.log(fourty) //40

let animals = ['lion', 'monkey', 'birds'];
let [mufasa, wiseman  ] = animals;
console.log(mufasa, wiseman);

let kings = {name: "mufasa" , kingdom: "zambezi", kids: 1 }


//  let name = kings.name
//  let kids = kings.kids

//with destructuring we can write this as
let {name, kids} = kings
console.log(name, kids); // mufasa 1

//if had used let to declare name and kids before, to run we use brackets
//({name, kids} = kings)
//*****************************************************

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




 
