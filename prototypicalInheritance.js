
function Shape(color, texture){
    this.color = color;
    this.texture = texture;
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, ...props){
    Shape.call(this, ...props);
    
    this.radius = radius;
}

Shape.prototype.draw = function(){
    console.log('drawing shape');
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

function Square(sideLength, ...props){
    Shape.call(this, ...props);

    this.sideLength = sideLength;
}

extend(Square, Shape);

//This is how you override parent draw method. Musst be after extend, ie. act of assigning inheritance.
Circle.prototype.draw = function(){
    //this is how you call the base method first.  
    Shape.prototype.draw.call(this);

    console.log('drawing circle');
}

const circle = new Circle(5, 'red', 'smooth');
const square = new Square(4, 'blue', 'grainy');