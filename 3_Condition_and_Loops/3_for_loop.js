// for(var i=1 ; i<=10 ; i++)
// {
//     console.log(2*i);
// }

/* ****************************** */

//break
//The break statement "jumps out" of a loop.(only one loop(current loop))
for(var i= 1 ; i<=10 ; i++)
{
    if(i==3){
        for(var j= 1 ; j<=10 ; j++){
            console.log(`j's loop :${j}` );
            break;
        }
    }
    console.log(`i's loop :${i}`);
}


/* ****************************** */


//continue
//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
for(var i= 1 ; i<=10 ; i++)
{
     if(i==3){
        continue ;
     }
     console.log(i);
}



/* ****************************** */

//Not possible

// for(const i=1 ; i<10;i++){
//     console.log(`${i}`)
// }