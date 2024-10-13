// Simulate chopping vegetables (a simple function)
const chopVegetables=() => {
    console.log("Chopping vegetables...");
  }
  
// Simulate cooking (a simple function)
const  cook = (ingredients)=> {
    console.log(`Cooking with ingredients: ${ingredients}`);
}

// Simulate preparing ingredients (a promise)
const prepareIngredients=()=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ingredients = "Chopped vegetables, spices, and meat";
        resolve(ingredients); // Simulating the completion of ingredient preparation
      }, 4000);
    });
}

// Async function to prepare dinner
 const prepareDinner=async()=> {
    console.log("Preparing dinner...");
    const ingredients = await prepareIngredients(); // 'await' pauses until ingredients are ready
    console.log("Ingredients are ready! ");
    chopVegetables();
    console.log("Vegetables are chopped!");
    cook(ingredients);
    console.log("Dinner is ready!");
  }

//Confirm Order for preapre dinner
prepareDinner().then(() => {
    console.log("Here is your dinner ! Have Nice Lanuch");
});


  /*
  
   "async and await make promises easier to write"
    async makes a function return a Promise
    await makes a function wait for a Promise

  Async:
  Imagine you're a chef in a busy restaurant. You have a helper (a promise) to prepare ingredients, but you also need to chop vegetables. Instead of waiting for your helper to finish before you start chopping, you can say, "I'm going to do some other tasks while you prepare the ingredients." In JavaScript, you use the async keyword to declare a function as asynchronous. This means the function can perform other tasks while waiting for something to complete.
   
  await:
  when you tell your helper (a promise) to prepare ingredients, you don't just leave and forget about it. You say, "I'll wait until you're done, then give me the ingredients." In JavaScript, the await keyword is used inside an async function to pause its execution until a promise is resolved. It allows you to work with the result of that promise when it's ready.

  -In above code you code see because of async keyword function become asynchronous and await will pause the execution of function at particular line until promise get resolved/rejected.
  -without await keyword function will execute all code and then at last promise will get resolved/rejected(You can see by removing await keyword).
  -without async , await not work but vica-versa works.


  */