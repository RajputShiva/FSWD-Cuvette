// let arr = [50, 69, 99, 12345, "Cuvette", false, {name : "me", age : "fantastic"}]

let arr = [
  50,
  69,
  99,
  12345,
  "Cuvette",
  false,
  { name: "me", age: "fantastic" },
];
// console.log(arr);
// arr.push("javascript"); // add anything in the array you can use push method
// console.log(arr);
// arr.pop(""); // you use pop so you can remove value in the array 
// arr.pop("");
// console.log(arr);

// arr.shift(); // shift() method use krne se hum value ko aage se remove kr skte hain in the array
// console.log(arr);

arr.shift();
arr.unshift(1996); // unshift() methid se hum value ko array ke aage put kr dete hain aur shift() method ke sth use krenge unshift() method to pehle value remove hoga phir usi jagah pr ye value put hoga array me.
//console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for of here

// for (const iterator of object) { 
      
// }

// for(let i of arr) {
//     console.log(i);
// }

// for of and for in difference b/w them :- (for of) we are using in iterating in array and (for in) we are using iterating in object.

// for in here

// for (const key in object) {
    
// }

// for(let key in arr) {
//     //console.log(key);
//     console.log(arr[key]);
// }

// same both are

// for (let i in arr) {
//     console.log(i);
// }

let arr2 = [10, 20, 30, 40];

// arr2.forEach(function nothing(item){
//    console.log(item*2);
// })
// console.log(arr2);

// or

// arr2.forEach((item) => {
//     console.log(item*2);
//  })
//  console.log(arr2);

// map, filter and reduce - higher order function

// edible items list
// let foodTtems = ['carrot', 'tomato', 'corn'];

// let cookedItems = foodTtems.map(function cook(i){
//     return cooked(i);
// })

// or 

// let cookedItems = foodTtems.map((i) => {
//     return cooked(i);
// })



// tranform this to cooked things
// map function to cook each item
// ['salad', 'soup', 'popcorn']


// arr2.map(function anotherFun (i) {
//     //console.log(i);
//     return i+3;
// })

let newArr = arr2.filter((i) => {
     return i>20;
})

//  reduce function
let sum = arr2.reduce((i,acc) => {
   return acc + i;
},90)
console.log(sum);