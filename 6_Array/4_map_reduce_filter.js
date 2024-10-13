var sp =["avinash", "Akshay" , "Audii" , "Shinde" ,"Vk" , "Dk"] ;
let spUpdate = sp.map( (Element , Index , Array) =>{
   return `The element is ${Element} ,index is ${Index} and array is ${Array}`
})
console.log(spUpdate);



// var num = [4,16,25,49,64];
// var numSquare = num.map((Element)=> {
//     return Math.sqrt(Element);
// })
// console.log(numSquare);

// var numMul = num.map((Element) => {
//      return 2*Element ; 
// }).filter((Element)=>{
//     return Element>10 ;
// })
// console.log(numMul);


//How to fatten the array [ fatten means converting 2d or 3d array into one dimensional array]

// const arr = [
//               ["zone 1" , "zone 2" ] ,
//               ["zone 2" , "zone 3" ] ,
//               ["zone 5" , "zone 6" ] ,
//               ["zone 7" , "zone 8" ] ,
//              ] ;    

// let arr1 = arr.reduce( (accum , Element) => {
//          return accum.concat(Element);
// })             
// console.log(arr1);