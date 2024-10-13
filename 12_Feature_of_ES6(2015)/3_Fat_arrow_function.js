//Arrow functions allow us to use the fat arrow => operator to quickly define JavaScript functions, with or without parameters. We are able to omit the curly braces and the function and return keywords when creating a new JavaScript function to write shorter function syntax.

// let sum = () => `The sum of two num is ${(a=10) +(b=44)}` 

// console.log(sum());  //calling only after function declaration


//another example

// let sample = (a,b,c) =>
// {
//     return a + b + c ;
// }
// let get = sample(10 ,20 ,30);
// console.log(get);



var t =(a ,b )=>{ return a*b } ;
console.log(t(12 ,2)) ;