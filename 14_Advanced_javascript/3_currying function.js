// Currying function technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence.
// It helps you to avoid passing the same variable again and again. It divides your function into multiple smaller functions that can handle one responsibility.

function sum(num1) {
  return function (num2) {
    return function (num3) {
      console.log(num1 + num2 + num3);
    };
  };
} 
sum(5)(4)(5);

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
//  sum(1)(2)(3);
