/*
Synchronous JavaScript :
-Synchronous means things happen one after the other, in a specific order. In JavaScript, when you run code synchronously, it means each line of code is executed in order, and the next line doesn't start until the previous one is finished.
-Takes more time to execute
*/

// const fun2 = () => {
//   console.log(`Function 2 is called`);
// };

// const fun1 = () => {
//   console.log(`Function 1 is Starting`);
//   fun2();
//   console.log(`Function 1 is Ending`);
// };
// fun1();

//-----------------------------------------------------------------------------
/*
Asynchronous JavaScript:
-Asynchronous means things can happen simultaneously or independently. In JavaScript, when you run code asynchronously, it means some tasks can run in the background without waiting for each other to finish.
-Takes less time to execute
*/

const fun2 = () => {
  setTimeout(()=> {
      console.log(`Function 2 is called`);
  }, 2000);
}

const fun1 = () => {
  console.log(`Function 1 is Starting`);
  fun2();
  console.log(`Function 1 is Ending`);
}

fun1();

//------------------------------------------------------------------------------

/*
-JavaScript is both synchronous and asynchronous.
-By default, JavaScript is synchronous.
-JavaScript uses features like callbacks, promises, and async/await to manage asynchronous operations.
*/