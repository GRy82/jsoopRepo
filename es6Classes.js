// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('drawing circle');
//     }
// }

class Circle {
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log('moving circle');
        }
    }

    draw(){
        console.log('drawing circle');
    }
}

const c = new Circle(5);


//FUNCTION DECLARATIONS ARE HOISTED.  FUNCTION EXPRESSION ARE NOT
//This means that a funcion declaration can be called before compiler reaches
//its code.  Cannot do that with 'unhoisted' function expressions.

//Classes can be defined as class declarations OR class expressions.
//Both are NOT HOISTED.