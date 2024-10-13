// Spread Operator allows you to expand elements(copy) from arrays, objects, or other iterable data structures in places where multiple elements or properties are expected. It is represented by three dots ... followed by the iterable.

//1] Array Spread:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); 


//2]Object Spread:

const obj1 = { name: 'John', age: 30 };
const obj2 = { occupation: 'Engineer', city: 'New York' };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);



//3]Function Arguments:

const numbers = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const result = sum(...numbers);
console.log(result); 
