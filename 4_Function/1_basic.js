//Ways to write functions in Javascript

//1] Function declaration

function mySum(a,b,c)
{
    var result= a + b + c ;
     return result ;
}

var a= mySum(40,6,9);
console.log(a);


//------------------------------------------------------------------------

//2]Function Expression(anonymous function) 
//Anonymus Function ---> A function without a name

 var myExp = function(a , b , c)
   {
     return result1 = a + b + c ;
   }

console.log(myExp);       // -----> returns [Function: myExp]
var sum = myExp(50,60,70);
console.log((sum));

//------------------------------------------------------------------------
  
//3] Fat arrow function

let fatArrowFunction =(a,b)=> a+b ;
console.log(fatArrowFunction(50,100));


//-------------------------------------------------------------------------

