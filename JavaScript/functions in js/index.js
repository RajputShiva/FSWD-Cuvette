// function declaration

// returnType nameOfThe Function(type argument1,tye argument2,...,ect){}
// don't neet to write dataType in function

// function fun1(a, b) {
//   // this is argument of the function
//   // body of the function
//   let c = a + b;
//   // return c;
//   console.log(c);
// }
// fun1(10, 9);
// or
// let ans = fun1(10,9);
// console.log(ans);
// or
//console.log(fun1(10,9)); // this is parameter of the function

// function expression

// let fn = function multiply (a, b){
//     return a*b;
//    // console.log(a*b);
// }
// //fn(3,4);
// console.log(fn(3,4));

// arrow functions

// let arrFn = function abc(a, b){
    
// }
 
// aise bhi likh skte hain bs (=>) lgana hoga  

// let arrFn = (a, b) => {
//     return a % b;
// }

// console.log(arrFn(9,4));

// addEventListener(event, nameOfFunction or define the whole of the function here)
// it means ki hum ek function ke under function bna skte hain.
// function can accept another function as an argument

// function test() {
//     console.log('Hello i am a function test');
// }

// let arrFn = (a, b, funcT) => {
//     funcT();
//     return a % b;
// }

// console.log(arrFn(9, 4, test));

// functions can also return functions

function test() {
    console.log('Hello i am a function test');
}

let arrFn = (a, b) => {
   // funcT();
   function test2 (){
    return "Hello i am function test2";
   }
   return test2; 
}

let ans = arrFn(9, 4);
console.log(ans());