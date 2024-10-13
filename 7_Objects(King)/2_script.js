// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used
//--------------------------------------------
//Alone this refer to global object(Window)
//console.log(this);   
//Output is window
//--------------------------------------------
//In regular function this refer to global object(Window)

//  function sum ( a , b)
//  {
//     console.log(`Addition is ${a+b}`);
//     console.log(this);
//  }
    
//  sum(20, 20);

//Output is window
//--------------------------------------------
//In a method this refers to the owner object 
const biodata ={
    Name:"Siddhesh" ,
    Age:22,
     sum: function(a ,b)
    {
    console.log(`Addition is ${a+b}`);
    console.log(this);
    console.log(this.Name);
 }
}

biodata.sum(10,10);
//Output is current object(biodata)
//--------------------------------------------
//In a function in strict mode this is undefined

// "use strict" 

//  function sum ( a , b)
//  {
//     console.log(`Addition is ${a+b}`);
//     console.log(this);
//  }
    
//  sum(20, 20);

//----------------------------------------------
//// this object will not work with arrow function bcz arrow function is bound to class.
// const obj = {
//     n : "Siddhesh",
//     a :  26 ,
//     fun : ()=>
//     {
//         console.log(this.n); // it refers to the current context and that is window global object 
//     }
// }
// obj.fun();