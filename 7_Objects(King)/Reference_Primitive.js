//primitives(String , Number , Boolean , null ,undefined)
//Reference(Objects , Function ,Array , Date and more)
//---------------------------------------------------
//In primitive copy of variable is passed

let name = "John";
let anotherName = name; // Copy the value

name = "Doe";

console.log(name);          // Output: "Doe"
console.log(anotherName);   // Output: "John"



//------------------------------------------------------------


// In Reference datatype reference is passed
const person = { name: "Alice" };
const anotherPerson = person; // Copy the reference

anotherPerson.name = "Bob";

console.log(person.name);           // Output: "Bob"
console.log(anotherPerson.name);    // Output: "Bob"

  
let numbers = [1, 2, 3];
let copyOfNumbers = numbers; // Copy the reference

numbers.push(4);

console.log(numbers);         // Output: [1, 2, 3, 4]
console.log(copyOfNumbers);  // Output: [1, 2, 3, 4]



