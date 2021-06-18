
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
//this line gives the Circle access to its constructor again.
//without this, the only constructor it has access to is its base's, ie. Shape's constructor.
Circle.prototype.constructor = Circle;

const circle = new Circle(5);