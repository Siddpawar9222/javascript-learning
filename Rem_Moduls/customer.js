var person = 
{
 name1 : "siddhesh Pawar"   

}

//console.log(person);
//const k = Object.values(person);
//console.log(k);

 export default person  ; //only one default export in a file 
  


//---------------------------------------------------------------------------------------
//  Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value.

// Concerning the default export, there is only a single default export per module. A default export can be a function, a class, an object or anything else. This value is to be considered as the “main” exported value since it will be the simplest to import.



var person1 ={
    name: "Siddhesh",
    surname:"pawar",
}
let a ;
export {person1 , a}    //We can also do like this .Send Elements in objects