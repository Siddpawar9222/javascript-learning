const prepareDinner =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data = "Preparing Dinnner !";
            if(data){
                resolve(data);
            }else{
                reject("Error : We dont have Receipe Today ! Sorry")
            }
        }, 5000);
    })
}

//Using promises 
console.log(prepareDinner()); //  For 5sec fetchData will be pending

prepareDinner()
 .then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

/*
                     "I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code. 

Promises are a way to handle asynchronous operations in JavaScript more cleanly and easily. They help you work with asynchronous code in a more organized and readable manner

Imagine you order food from a restaurant for delivery. The restaurant gives you a promise. This promise says that they will deliver your food when it's ready. You don't have to wait at the restaurant; you can do other things until your food arrives. When the food is ready, they fulfill their promise by delivering it to your door.

In JavaScript, a promise works similarly:

Pending: When you initiate(Intially) an asynchronous task (like data loading), you get a promise in a pending state. It means the task is in progress.

Fulfilled: When the task is completed successfully, the promise is fulfilled. It's like getting your food delivered. You can now access the result of the task.

Rejected: If the task encounters an error, the promise is rejected. This is like if there was an issue with your food order, and it couldn't be delivered. You can handle the error in this case.

Promises provide a structured way to handle these states. You can attach .then() to a promise when it's fulfilled and .catch() when it's rejected. It allows you to write code that's easy to understand and manage asynchronous operations.
*/