// const obj = { a: 1, b: 2 };
// console.log(Object.values(obj)); // [1, 2]

// const obj2 = { 100: 'd', 2: 'e', 7: 'f' };
// console.log(Object.values(obj2)); // ['e', 'f', 'd'] -->  If the keys are numbers, then they are  returned in with the keys in increasing order
// console.log(Object.keys(obj2));

//  console.log(Object.values('bca')); 

//.......................................................................................................


// const obj = { 0: 'x', 1: 'y', 2: 'z' };
// console.log(Object.entries(obj)); // [ ['0', 'x'], ['1', 'y'], ['2', 'z'] ]

// const obj2 = { 100: 'x', 2: 'y', 7: 'z' };
// console.log(Object.entries(obj2)); // [ ['2', 'x'], ['7', 'y'], ['100', 'z'] ]  -->  If the keys are numbers, then they are returned in with the keys in increasing order

// console.log(Object.entries('abc')); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// console.log(Object.entries(100)); // [ ]


// Object.entries(obj).forEach(([key, value]) => 
// {
//   console.log(`${key} ${value}`);
// });

//...........................................................................................
//padStart
// console.log("siddhesh".padStart(12));
// console.log("siddhesh".padStart(13 , "pawar"));
// console.log('def'.padEnd(6,"123465"));
// console.log('def'.padEnd(8, "0"));
// console.log('def'.padEnd());


//padEnd
'def'.padEnd(10);         // "def       "
'def'.padEnd(10, "123");  // "def1231231"
'def'.padEnd(6,"123465"); // "def123"
'def'.padEnd(8, "0");     // "def00000"
'def'.padEnd(1);          // "def"


const obj = {
    a: 1,
  };
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  console.log(descriptors);


  // IN ES2018 JavaScript started support rest and spread operator for Objects 