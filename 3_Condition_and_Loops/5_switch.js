var myArea= "circle";
var radius=10;
var length=5 ;
var breadth =10 ;

switch(myArea)
{
    case "circle" :
        console.log("Area of circle is given by "+ Math.PI*radius*radius);
        break;
    case "square" :
        console.log("Area of square is given by "+ length*length);
        break;
    case "reactangle" :
        console.log("Area of reactangle is given by "+ length*breadth);
        break;
    default :
        console.log("You written wrong data");
        break;
    
    }

// What do we use break statement ?
// https://dev.to/sumusiriwardana/if-else-or-switch-case-which-one-to-pick-4p3h#:~:text=You%20can%20use%20a%20switch,states%2C%20object%20types%2C%20etc.