var list = ["avinash", "Akshay" , "Audii" , "Shinde"] ;
// console.log(list.push("NoName"));    //Return the lenght of array
//  console.log(list)                     //adds new items to the end of an array.      
// console.log(list.unshift("SK") );                    //adds new elements to the beginning of an array.
//  console.log(list);   

// list.pop();
// console.log(list);           // removes (pops) the last element of an array , returns the removed element
// list.shift();                //removes the first item of an array,returns the removed element
// console.log(list);


//splice IMP method 
//overwrites the original array.
list.splice(1,0,"Vk");
console.log(list);  // Add element at 1 index and existing elememt at 1 push ahead
list.splice(list.length,0,"Vk");
console.log(list); 

const l = list.splice(0,1);
console.log(l); 
console.log(list); 

list.splice(1,3,"akshay1");
console.log(list);

// //We can delete any element in array as follow

// const a = list.indexOf("Shinde") ;
// if(a!= -1)
// {
//     list.splice(a , 2);         // 2 means elements ahead of a will not consider(Deleted)
//     console.log(list);      
// }
// else
// {
//     console.log("Element not found");
// }


