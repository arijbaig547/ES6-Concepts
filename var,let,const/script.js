
//=======var========//
// //Redeclaration var//:

// var name="Arij";
// var name="Baig";
// console.log(name)//Output:Baig
// //Conclusion:var can be redeclared

// //Reinitialize var//:
// var name="Arij";
// name="Baig";
// console.log(name)//Output:Baig
// //Conclusion:var can be reinitialized too


//=======let=========//
// //Redeclaration let//:

// let name="Arij"
// let name="Baig"
// console.log(name);//Output:Uncaught SyntaxError: Identifier 'name' has already been declared 
// //Conclusion:let can not be redeclared//

//Reinitialization let//:

// let name="Arij"
// name="Baig"
// console.log(name)//Output:Baig
// //Conclusion:let can be reinitialized//



//======const======//
//Redeclaration const//:
// const name="Arij";
// const name="Baig"
// console.log(name);//Output:Uncaught SyntaxError: Identifier 'name' has already been declared

// //Conclusion:const cant be reinitialized//

//Reinitialization const//:
// const name="Arij";
// name="Baig";
// console.log(name)//Output:script.js:44  Uncaught TypeError: Assignment to constant variable.//
// // //Conclusion:const cant be redeclared//


//======HOISTING====///

//Hoisting var//:

// console.log(fruit);
// var fruit="Apple"
// //Output:undefined
//Conclusion:var can be hoisted//


//Hoisting let//:

console.log(vegetable);
let vegetable="Potato"
//Output:script.js:60  Uncaught ReferenceError: Cannot access 'vegetable' before initialization//
//Conclusion:let cant be hoisted due to temporial dead zone,if we want to hoist let,
// we first need to remove temporial deadzone which is not possible//
