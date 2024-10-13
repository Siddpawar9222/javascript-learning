/*
falsy values in javascript :
0 , ""(empty string) , null , undefined , NaN , false
*/

const a = 0;
console.log(Boolean(a));

/* ****************************** */

/*
In JavaScript, the && operator evaluates the expressions from left to right. It returns the first falsy value it encounters or, if all values are truthy, it returns the last truthy value.
*/

const b = undefined && "pawar";  // "" is falsy
console.log(b);    // Output: undefined

const c = "hello" && "pawar"; // "hello" is truthy
console.log(c);   // Output: "pawar"

/* ****************************** */


/*
The || (OR) operator evaluates expressions from left to right and returns the first truthy value it encounters. If all values are falsy, it returns the last value.
*/

const d = "" || 0 || undefined; // "" is falsy, 0 is also falsy
console.log(d);

const e = "hello" || "pawar"; // "hello" is truthy
console.log(e);


