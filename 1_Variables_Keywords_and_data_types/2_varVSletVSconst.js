/// According to re-update or declare

// var myName = "siddhesh";
// console.log(myName);
// myName = "Pawar";
// console.log(myName);  // In var value can Change/update


// var myName1 = "siddhesh";
// console.log(myName1);
// myName1 = "Pawar";
// console.log(myName1);  // In let value can Change/update

// const myName2 = "siddhesh";
// console.log(myName2);
// myName2 = "Pawar";
// console.log(myName2);  // In const value can`t be Change/update



//// According to scope 

//var have function scope or global scope.
const varScope = ()=>{
      if(true){
         var x = 10 ;
      }
    console.log(x)
}
varScope();


//// let and const variables have block scope.
const letScope =()=>{
     if(true){
         let x = 10 ;
     }
     console.log(x);  //error
}
//letScope();



//---------------------------------------------------------------------------------------