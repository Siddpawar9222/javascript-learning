var friends = ["avinash", "Akshay" , "Audii" , "Shinde" , "Akshay1"] ;
// console.log(friends.indexOf("Audii",0));        //Start searching Audii word from index 0
//  console.log(friends.lastIndexOf("Shinde" , 3)); //start searching Shinde Shinde from index 3 to the beginning .
// console.log(friends.includes("Akshay" , 2));  //Boolean

 const num = [ 600 , 300 ,400 , 460 ,800 ,7000] ;
// const findNum = num.find( (Element) => Element>450 );  // returns the value of the first element that passes a test ,  returns undefined if no elements are found . The find() method does not change the original array.
// console.log(findNum);

// const findNum1 = num.find((Element)=> console.log(Element>450) ) ;  //Note 

// const findIndNum = num.findIndex( (Element) => Element>450 );
// console.log(findIndNum);   //  returns the index (position) of the first element that passes a test. It does not change the original array.

//FILTER

// const numFind = num.filter( (Element , index) => (Element>400 && index>4) );
// console.log(numFind );

//sorting

var num3 = ['Siddhesh' , "Pawar" , "How " , "Are" , "Strange" ] ;
console.log(num3.sort());
var num4 = [ 400 , 800 ,1200 ,966] ;
console.log(num4.sort());             // Only first digit consider it , in accending order

