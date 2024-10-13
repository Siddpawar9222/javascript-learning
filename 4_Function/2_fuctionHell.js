function hello() {
    console.log("Example of Function Hell");
    return function () {
    console.log("Hey, This is function Hell");
    return function () {
      console.log("Hello World, This is last one");
    };
  };
}

let a = hello();
let b = a();
b();


/*
Function Hell : 
-This code defines a function expression and immediately invokes it. The function hello returns another anonymous function, which is then stored in the variable a. Finally, a is invoked as a function by calling a()
-In this code, hell1 is a Higher-Order Function, because it returns a function. The function returned by hello is immediately stored in the a variable and can be invoked later by calling a().
*/




