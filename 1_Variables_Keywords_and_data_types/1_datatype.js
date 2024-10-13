//primitives(String , Number , Boolean , null ,undefined)
let a1 = 12 ;
console.log(typeof a1);

let a2 = "Siddesh" ;
console.log(typeof a2);

let a4 = false;
console.log(typeof a4);

let a3  ;
console.log(typeof a3);

var myName=null;
console.log(typeof myName); 

//let a3="prince"


/*
-undefined : Just like reserved player(We dont know the role of player)
-null : Empty
*/

//----------------------------------------------------------------

//Reference(Objects , Function ,Array , Date and more)

let p1 = {
    name: "Siddhesh",
  };
console.log(typeof p1);

let dt = new Date();
console.log(typeof dt) ;

let arr =["Siddhesh" ,22 ,"Goood"]
console.log(typeof arr);

let p2 =( ) =>{
  console.log("hii")
} ;
console.log(typeof p2);

var k = null ;
console.log(typeof k);


/*
          var myName=null;
          console.log(typeof(myName));   //object
It is a common JavaScript quirk(behaviour that is strange). This is actually a historical mistake in JavaScript . This behavior is a long-standing bug in JavaScript, and it has not been fixed to maintain backward compatibility.

The null value is actually a primitive data type, not an object. So, it's technically incorrect for typeof to return "object" in this case. However, due to legacy issues in JavaScript, it remains this way for historical reasons.


*/

/*
"Backward compatibility " is the ability of a newer version of a product or system to work with data, software, or hardware that was designed for an older version.

For example, a software application that is backward compatible may allow users to open and edit files created with an older version of the software, even if the file format has been updated in the newer version. Similarly, a game console that is backward compatible can play games designed for previous generations of the console.
*/