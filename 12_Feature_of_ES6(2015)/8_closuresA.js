//Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function
//Example :
// function myFunction() {
//     a = 4;
//   }
//   myFunction();
//   console.log(a*a);

const message = "Hello from Outside";

function outer() {
  const message = "Hello"; // The 'message' variable is part of the closure.

  function inner() {
    console.log(message); // The inner function "closes over" the 'message' variable.
  }

  return inner; //return inner function + memory of variables/fuctions
}

const innerFunction = outer(); // 'innerFunction' now holds a closure.
innerFunction(); // It can access the 'message' variable, even though 'outer' has finished.

/*
Closure :
Imagine you have a box (the function) that contains some items (variables). When you close the box (the function finishes executing), you can still remember and access the items inside it. This "memory" of the variables is what's called a closure.
In above example think outer() method as box , I took particular item from box . When i was taking particular item , i also got hepler items with main item .

-A closure is a feature in JavaScript that allows inner functions to access the outer scope of a function.
-Closures can be used to store variables in a private scope, which can be useful for data privacy.(Here const message = "Hello"; This is private variable)
-Closures can be used for a variety of purposes, such as data privacy, function binding, and event handling
*/

