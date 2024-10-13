//computed properties  allowing you to create objects with dynamic property names .

const fruit ='apple' ;
const price = 2.99 ;

// without computed properties
const groceryList = {
    fruit : price ,
}
console.log(groceryList);
//Here fruit is property name(static) and price is an variable(dynamic) means key-value pair .


// with computed properties
const groceryList1 ={
    [fruit] : price ,
}

console.log(groceryList1);
//Here we created key as dynamic

