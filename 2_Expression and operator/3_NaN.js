console.log(0/0); //NaN
console.log(Number.NaN);

console.log(isNaN('30/20/1'));
console.log(isNaN("Hello"));
console.log(Number.isNaN("Hello"));
console.log(Number.isNaN(0/0));


/*
NaN : 
The NaN stands for "Not a Number" in JavaScript. It is a numerical value that represents an invalid or unreliable result, often resulting from an arithmetic operation that cannot be performed, such as dividing by zero or taking the square root of a negative number. NaN is a primitive value in JavaScript and can be tested for using the isNaN() function, which returns true if the value is Not a Number.


isNaN:
-The isNaN function is a global JavaScript function.
-It attempts to convert the argument into a number before checking if it's NaN. This means that it can sometimes give unexpected results. For example, isNaN("Hello") will return true because it tries to convert the string "Hello" into a number, which results in NaN.

 Number.isNaN :
-Number.isNaN is a method that is available on the `Number` object. It was introduced in ECMAScript 6 (ES6).
-It specifically checks if the provided value is NaN and does not attempt any type conversion. This makes it more reliable for checking if a value is NaN.
-It returns true only if the value is exactly NaN.
*/