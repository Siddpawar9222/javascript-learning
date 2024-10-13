//   Export and Import (Moduls)

//Foe sell
// import {user , hello , data as d} from './sell.js';
// document.body.innerHTML = user; // John
// hello();
// console.log(d) ;

//for importing all data from sell

import * as bundle from './sell.js';   //Here we made bundle as object    -----------(1)
console.log(bundle.data);
console.log(bundle.user);
bundle.hello();

//For Customer
 
import person  from './customer.js';
import ps  from './customer.js';    // we can change person name like this only because it is default otherwise(Without default) You should have needed 'as' to change(see (1))


console.log(person);
console.log(Object.values(ps));   //convert object elemets in array


import {person1} from "./customer.js" ;

console.log(person1);