//Origanal content of String doesnt change in String data type


//var str =   "We are the so-called Vikings from the north Vikings" ;
// console.log(str.indexOf("the",3));
// console.log(str.lastIndexOf("from" ,10 ));
// console.log(str.search("Vikings"));  //  support only single value
//----------------------------------------------------------------------------------
//slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the start position, and the end position (end not included) (end_value-1)
// console.log(str.slice(1 ,7));       //It will print extracted part
// console.log(str.slice(1 ,-7));       // remove the parts between 1 to -7 print sentance
// console.log(str.slice(-5 , -2));    // both -ve means extracted parts executed
// console.log(str.slice(-20 , 10));    //It wont works   


// //Task (280 letter )
//  var letter =  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sunt dolorem animi? Expedita, optio voluptate! Voluptatibus id neque porro a, dolores excepturi ducimus quam vel autem accusantium sit rerum est sed, facilis modi culpa quisquam iusto reiciendis facere nemo maxime vitae optio? Obcaecati voluptates ipsa fuga inventore quas itaque, magni illo? Illo sequi tempore natus provident? Fugit voluptates necessitatibus aspernatur quos? Ipsum, at totam est saepe quibusdam cupiditate culpa perspiciatis eveniet, distinctio qui beatae quia amet debitis corrupti dolores. Nostrum quis sunt qui ea enim adipisci nemo sequi rem eum incidunt. Reprehenderit praesentium dolores pariatur odit, repudiandae tenetur animi cumque libero autem reiciendis, deleniti corrupti! Assumenda, dignissimos dolores! Natus ex repellendus voluptates esse modi. Eligendi architecto dignissimos tempora aspernatur. Debitis aliquid alias at numquam doloribus eligendi dolor nemo ut delectus quod illo harum excepturi doloremque totam, laudantium, dolorum nesciunt eum cumque reiciendis maiores soluta repudiandae culpa. Itaque ab tempora fuga soluta ipsa explicabo nobis perspiciatis molestiae adipisci totam recusandae quos eveniet, quae neque sit. Ipsa quis omnis quae earum voluptates esse aperiam ad mollitia sequi ratione optio repudiandae explicabo, dolorum reiciendis hic quisquam magnam incidunt, numquam molestias ipsam. Perferendis libero asperiores assumenda minus dolorum sed quae veritatis tempora exercitationem sapiente excepturi nobis, consequuntur illum at amet quas iure molestiae consectetur cupiditate" 

//  console.log(letter.slice(0,279));

//  var str1 = "mango , banna , apple , kiwi" ;
//  console.log(str1.substring(10));  //If you omit the second parameter, substr() will slice out the rest of the string. // no -ve number if given it print "start_value" digits-1
//  console.log(str1.substring(1 , 5));  // this will (first , second-1)
//  console.log(str1.substring(9 , 3));  //First highesh and second small then result will (first-1 , second)
// console.log(str1.substr(-5));      //support -ve number , we can print last value like this
// console.log(str1.replace("apple" , "orange"));  //Replace only first match  
                                                //There is no other method like replace all

var str2 = "$ello World" ;
console.log(str2.charAt(2));
console.log(str2.charCodeAt(0));   //return unicode(ASCII)
let a = str2.length -1 ;
console.log(str2.charCodeAt(a));   // for d
 
// let b = "Siddhesh ";
// let c = "Pawar";
// console.log(b.concat(c));

//property Access
var d = "   House Of Dragan";
console.log(d.toLocaleLowerCase());
 console.log("hey " + d[9]);         //It act like a array
 console.log(d.toLowerCase());
 console.log(d.trim());

//Converting string into array
var str5 = "a , b ,c , d , e , d" ;

console.log(str5.split(",")); // split the string into array on the basis on comma( , )
console.log(str5.split(" ")); // split the string into array on the basis on space

/*
slice and substring are both string methods in JavaScript that allow you to extract a portion of a string
slice supports negative indices and can be used for extracting characters from the end of the string, while substring treats negative indices as 0.
Both methods return a new string and do not modify the original string.
*/

