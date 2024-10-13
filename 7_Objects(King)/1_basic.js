//Object like school bag(Store functions and variables)
//Objects literals are key value pair Data structure
var bioData ={
    name : "Siddhesh Pawar",
    Age : 22 ,
    getData: function()
    {
        console.log(`My name is ${bioData.name} and age is ${bioData.Age}`);
 
    } ,
    
    // getData ()
    // {
    //     console.log(`My name is ${bioData.name} and age is ${bioData.Age}`);
 
    // },
    //Multiple Objects
    Hobbie : {
        Webseries : "AOT" ,
        cricket : "India" 
    }
}
bioData.getData();
console.log(bioData.Hobbie.Webseries);
