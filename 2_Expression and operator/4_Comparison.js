//   == vs ===
/*
   == checks only value it performs type coercion, which means it can convert the operands to the same type before making the comparison.
   
   == checks value as well as datatype
*/

//  var  a = 5;
//  var b = '5';
//  console.log(a==b);  // == check only value
//  console.log(a===b);  // == check  value as well as data type


console.log(NaN===NaN);

/*
console.log(NaN===NaN);
If I have you two boxes, and tell you that neither of them contains an apple, would you tell me that the boxes contain the same thing ?

NaN contains no information about what something is, just what it isn't. Therefore these elements can never definitely be said to be equal.

NaN can be get by 0/0 or tries to convert string into number , So compiler doesnt know which one it is .
*/