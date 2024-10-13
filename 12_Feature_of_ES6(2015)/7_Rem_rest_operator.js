//  function add(a , b)
// {
//      var res = a + b ;
//      console.log(res);
// }
// add(1,2,3,4,5);   //Here there is limitation of input

//Here we need rest operator

//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function add(...input1)  //Take input in form of array(now input1 is array)
{
    // console.log(...input1);
     var sum=0 ;
     for(var i=0 ; i<input1.length ; i++)
     {
         sum += input1[i];
     }
     console.log(sum);
}
add(1,2,3,4,5,6,7); 
