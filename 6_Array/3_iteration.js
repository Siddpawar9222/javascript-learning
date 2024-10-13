//Traversal means navigation through array(Iteration)
let friends = [1,2,3,4,5,6] ;

// // for__in used for index
// for (let index in friends)  
// {
//     console.log(index);
// }


// //for__of used for elements
// for(let elements of friends)
// {                                 
//     console.log(elements);
// }



//for__each
// friends.forEach((element, index, array) => {
//     console.log(`Element ${element} present at index ${index} in array ${array}`);
// });
//(element, index, array) Here sequence is important 

//Update original array using forEach
let num = [1,2,3,5] ;
num.forEach((element,index)=>{
     num[index] = element*100 ;
});
console.log(num);


//map
let newFirends = friends.map((element)=>{
   return element*10 ;
})
console.log(newFirends);

//flatmap
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flatMap((subarray)=>subarray) ;
console.log(flatArray);


/*
  forEach Vs map 
  Both methods calls a function (a callback function) once for each array element.Doesnt update original array

forEach : 
-Typically used when you want to perform some action on each element but don't need to create a new array.
-The forEach method is mainly used for its side effects, such as printing elements or updating values in the original array.
-The forEach() method does not returns a  new array based on the given array.
-The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here.

map : 
-Typically used when you want to perform some action on each element and create a new array based on the results of applying a callback function to each element.
-The map method is commonly used when you want to transform the elements of an array and create a new array with the transformed values.
-return new array
-With the map() method, we can chain other methods like, reduce(),sort() etc.
*/