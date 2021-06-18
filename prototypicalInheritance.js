
function Shape(color, texture){
    this.color = color;
    this.texture = texture;
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color, texture){
    Shape.call(this, color, texture);
    
    this.radius = radius;
}

Shape.prototype.draw = function(){
    
}

//this line declares the prototypical inheritance. 
Circle.prototype = Object.create(Shape.prototype);
//thi code must be after the inheritance if it is to maintain the spin function.
Circle.prototype.spin = function(){
    console.log('The circle is spinning.');
}
//this line gives the Circle access to its constructor again.
//without this, the only constructor it has access to is its base's, ie. Shape's constructor.
Circle.prototype.constructor = Circle;

function Square(sideLength, color, texture){
    Shape.call(this, color, texture);

    this.sideLength = sideLength;
}

extend(Square, Shape);

const circle = new Circle(5, 'red', 'smooth');
const square = new Square(4, 'blue', 'grainy');