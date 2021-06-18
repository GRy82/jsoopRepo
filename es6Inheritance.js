
class Shape {
    constructor(color){
        this.color = color;
    }

    move(){
        console.log('I like to move it, move it.');
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    draw(){
        console.log('drawing circle');
    }
}

const circle = new Circle('red', 5);
