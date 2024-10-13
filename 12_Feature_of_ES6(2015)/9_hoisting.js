/*
Hoisting is JavaScript's default behavior of moving declarations to the top.
Means variable and function can be used before it has been declared.
JavaScript only hoists declarations, not initializations.
*/


// call();
// function call()
// {
//     console.log("Hii");
// }

//------------------------------------------------------------------------
/*
Hoisting with var:
The declaration is hoisted, but the assignment remains in place. As a result, a var variable is initialized with undefined
*/
console.log(a);
var a  ; //Undefined
a = 10 ;  //Still it will gives undefined(JavaScript only hoists declarations, not initializations.)
      
//------------------------------------------------------------------------
/*
Hoisting with let and const:
let and const variables are not initialized and remain in the temporal dead zone(TDZ) until their declaration is reached in the code.
*/
console.log(k);
let k = 10 ; //Error

//------------------------------------------------------------------------

//Function expression(anonymous function) and class expression are not hoisted in JavaScript

console.log(getRectArea(3, 4));
var getRectArea = function(width, height) {
    return width * height;
};

