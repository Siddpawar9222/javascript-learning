// let oldnumber  = Number.MAX_SAFE_INTEGER ;
// console.log(oldnumber);
// console.log(oldnumber + 200 ); // it will not show correct output because it reached its max value

// //BigInt
// let out = 9007199254740991n + 200n ;
// console.log(out);
// console.log(typeof(out));

//Nullish Coalescing
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
 
 var a = false ?? "Siddhesh";
 var b = undefined ?? "Pawar";
 var c = null ?? "pawar" ;
 console.log(a);
 console.log(b);
 console.log(c);
//---------------------------------------------------------------
// "use strict"
//  x = 3.14 ;
// console.log(x);
// console.log(typeof x);