class Customer
{
    constructor(name)
    {
        this.name = name ;
    }

    data1 = 30;              //We dont need to write this outside the constructor
     buy()
     {
        console.log(this.name);
     }
}
class Customer1 extends Customer
{
    buy1()
    {
       console.log("You are in Customer1 Construction");
    }  
}


var c = new Customer("Siddhesh Pawar") ;
var c1 = new Customer1("siddhesh") ;       //I have to assign the value (inheritance) 

// console.log(c);
// console.log(c.data1);
// c.buy();
//---------------------------------------------------------------------------------
console.log(c1);
c1.buy1();
c1.buy();
console.log(c1.data1);