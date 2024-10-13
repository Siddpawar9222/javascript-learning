// + Operator
let a = 10 + " 20" ;
console.log(a);     
console.log(typeof a);

let a1 = "20 " + 10  ;
console.log(a1);     
console.log(typeof a1);

let b =  20  + 30 + 40  + " 10"  ;
console.log(b);     
console.log(typeof b);

// - Operator
let c = "10 " - 50 ;
console.log(c + " " + typeof c);

let d =  50 - " 100";
console.log(d + " " + typeof d);

let e =  "50 " -" 10 " - "20 " + 40 ;
console.log(e + " " + typeof e);


console.log("vinoid" - "thapa");   // NaN(Not a Number)
console.log(true + true);         // 1 for true and 0 for false

// ** means power 
console.log(9**3);
console.log(10** -1); //   1/10 
console.log(10** -2);  // 1/10  * 1/10


console.log("10" % "3")
/*
+ Operator : 
when you use the + operator to combine a number and a string, the number is converted to a string and then perform concatenation . Result is String

- Operator :
when you use the - operator between a number and a string, JavaScript tries to convert the string into a number and then performs the subtraction . Result is number .
Same concept will apply for other operator like *,/,% etc.

-console.log("vinoid" - "thapa"); 
   Here JavaScript try to convert spring into number because of negative operator and that's why it gives me NaN .
*/