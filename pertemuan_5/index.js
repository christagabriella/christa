// //javascript function
// // Cara 1. Function declaration
// function greetings() {
//     console.log("hello world")
// }
// greetings()// call

// // Cara 2. function expression
// let greetings2 function (){
//     console.log("hello world");
// }
// greetings2();

// //parameter & argument (input), return (output)
// function greetings1(fullName){
//     return "hello"+ fullName;
// }

// // Argument
// let output = greetings1("jhon doe");
// console.log(output);

// // cara 2
// let output2 = function(fullName){
//     return "hello" +fullName
// }
// let output = greetings2("jhon doe")
// console.log(output)

// //function hosting
// //cara 1
// let output = greetings1("jhon doe");
// console.log(output);

// // global scop & local scop
// //cara 1
// let x = 10

// function foo(){
//     let y =20; //local
//     console.log(x);//10
//     console.log(y);//20
//     if (y>10){
//         let z =30 //local block
//         console.log(z)
//     }
// }
// console.log(x)//error
// console.log(y)
// foo()