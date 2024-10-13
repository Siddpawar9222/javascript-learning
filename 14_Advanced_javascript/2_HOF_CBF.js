/*
Higher Order Function :
function which takes another function as an arguments is called HOF 

Callback Function
function which get passed as an argument to another function is called CBF . 
*/


    
    const subs = (a,b) => {
        return Math.abs(a-b);
    }
     

    const calculator = (num1,num2, operator) => {
      return operator(num1,num2);
    }

    console.log(calculator(5,2,subs));
    //Here calculator is HOF and subs is CBF 


//----------------------------------------------------------------------------------------    

//Callback Hell
//Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

setTimeout(()=>{
    console.log(`1 works is done`);    
    setTimeout(()=>{
        console.log(`2 works is done`); 
        setTimeout(()=>{
            console.log(`3 works is done`);  
            setTimeout(()=>{
                console.log(`4 works is done`); 
                setTimeout(()=>{
                    console.log(`5 works is done`);   
                    setTimeout(()=>{
                        console.log(`6 works is done`);    
                    }, 1000) 
                }, 1000)   
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)
