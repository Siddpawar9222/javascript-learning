// var num7 = [1,2,3,4,5];
// var numUp= num7.reduce((accumulator , Element,index ,Array) =>{
//     return accumulator += Element
// } ,45 )       // here 45 is already stored number in accumulator(Initial value of accumulator)
// console.log(numUp);



//Practice 
var arr = [ 45 , 45 , 90 ];
const k = arr.reduce((accumulator,Elements ,index ,Arrays)=>{
    return (accumulator +=Elements) ;
}, 100) ;

console.log(k);