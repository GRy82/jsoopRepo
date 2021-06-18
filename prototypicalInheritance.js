
function Shape(){

}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.spin = function(){
    console.log('The circle is spinning.');
}

Shape.prototype.draw = function(){

}

Circle.prototype = Object.create(Shape.prototype);

const circle = new Circle(5);