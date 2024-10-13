// //Rem - Remaining content
//--------------------------------------------

//Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and convenient way. It simplifies the process of working with complex data structures and helps improve code readability and maintainability.

//1]Array Destructuring:

const numbers = [1, 2, 3, 4];

// Without Destructuring
/*
 console.log(numbers[1]);
 console.log(numbers[3]);
*/

// with Destructuring
const [a, b, c, d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Ignoring some elements
const [first , , ,  forth] = numbers;
console.log(first);
console.log(forth);

// with rest operator extract subsarray as well
const [x, ...rest] = numbers;
console.log(x);
console.log(rest);

//2]object destructuring:

const person = {
  name: "John",
  age: 30,
};

const { name, age } = person;  // Here name and age must equal to key of person
console.log(name);
console.log(age);

// Renaming variables during destructuring

// personName = "Klaus" ;

const { name: personName, age: personAge } = person;
console.log(personName);
console.log(personAge);

// Default values
const { city = "Unknown" } = person;
console.log(city);

//3]Function Parameter Destructuring:

function printInfo({ name, age }) {
  console.log(`Name :${name}, Age : ${age}`);
}

printInfo(person);
