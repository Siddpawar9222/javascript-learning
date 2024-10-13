// import person from  "./Rem_Export_Import/customer";


//useState() internal working, re-assign the value


// let loginInfo = {
//      "emailId" : "kkkkkk@gmail.com",
//      "password" : ""
// }


// //Computed property name
// const setLoginInfo = (obj) =>{
//      //loginInfo = obj ;
//      //loginInfo = {...loginInfo , obj}  
//      loginInfo = {...loginInfo , ...obj}
// }


// const obj = {
//      "emailId" : "kkk@email.com",
//       "password" : "123456"
// }   

// setLoginInfo(obj);
// console.log(loginInfo);













// const fun1 = (k,l,m,n)=> {
//    console.log("k = " + k + " l = " + l + " m = " + m + " n = " + n);
// }

// fun1(...'123');


// console.log();


//rest 

// const  fun2 = (...k) => {
//      console.log( k)
// }

// fun2(...'123')




// const fun3 = (a,b,c) => {
//     console.log( a + " " + b + " " + c);
// }

// fun3(["a" ,"b" ,"c"]);


// const fun4 = (a,b,c) => {
//     console.log(a + " " + b + " " + c);
// }

// fun4(..."abc");


// const  fun2 = (...k) => {
//      console.log( k)
// }

// fun2(...'123')


// const timer = setTimeout(() => {
//       console.log(timer);     
// }, 1000);


// falsy values
// 0 , "" , null , undefined , NaN , false


//const k = 0 ;

// if(k){
//        console.log("Truthy");
// }else{
//        console.log("Falsy");
// }



//const l = !undefined ;

//console.log(l)


const num = [ 600 , 300 ,400 , 460 ,800 ,7000] ;
const numFind = num.filter( (Element , index) => (Element>400 && index>4) );
console.log(numFind );


