let dt = new Date();    
//  console.log(dt);   // shows GMT time
//  console.log();
//console.log(dt.toLocaleString());
 console.log(dt.toString());
// console.log(Date.now());     //gives millisec since 1/1/1970


// Way to Declare
// let dt1 = new Date(2022  , 11 ,  20 ) ;
// console.log(dt1.toLocaleString());   //0 for january and 11 for december
// let dt2 = new Date("December 25 , 1995 23:15:00")
// console.log(dt2.toLocaleString());
// let dt3 = new Date(1661257294024);  //We write millisecond
// console.log(dt3.toLocaleString());

//  let dt4 = new Date("December 24 , 1995 23:15:00");
// // // //get
// console.log(dt4.getDay());    // 0 for sunday and so on
// console.log(dt4.getDate());
// console.log(dt4.getFullYear());       

// //set
// let dt5 = new Date()
// dt5.setMonth(6) ;
// dt5.setDate(20) ;
// dt5.setHours(14);
// dt5.setFullYear(2000);
// // Its give milisecond in vs code .in browser it give ok value
// console.log(dt5.toString());