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
