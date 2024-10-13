let a = "Hello guys. "; // global scope

const first = () => {
  let b = " How are you?";

  const second = () => {
    let c = " Hii, I am fine thank you🙏";
    console.log(a + b + c);
  };
  //second();
  console.log(a + b); // we can't use c
};

first();
/*
-We have seen closure is a feature in JavaScript that allows inner functions to access the outer scope of a function.
-Lexical Scoping means Now, the inner function can get access to
their parent functions variables But the vice-versa is not true.
*/

