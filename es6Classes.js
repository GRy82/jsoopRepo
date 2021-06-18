// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('drawing circle');
//     }
// }


//symbol is a primitive type. Symbol provisions a unique identifier. don't use 'new'
const _color = Symbol();
const _setSurface = Symbol();

class Circle {
    constructor(radius){
        this.radius = radius;
        this[_color] = color; //this notation makes it somewhat private. can't be accessed with Object.getOwnPropertyNames
                                //can be accessed with Object.getOwnPropertySymbols
        this.move = function(){
            console.log('moving circle');
        }
    }

    [_setSurface]() { //this is a private method using Symbol primitive type. Not ideal way to implement pvt. method.

    }
    
    draw(){
        console.log('drawing circle');
    }

    static parse(json){
        const radius = JSON.parse(json).radius;
        return new Circle(radius);
    }
}

const c = new Circle(5);


//FUNCTION DECLARATIONS ARE HOISTED.  FUNCTION EXPRESSION ARE NOT
//This means that a funcion declaration can be called before compiler reaches
//its code.  Cannot do that with 'unhoisted' function expressions.

//Classes can be defined as class declarations OR class expressions.
//Both are NOT HOISTED.

//'use strict'; at the top of a js file will ensure that method calls without
//an instance will not modify the window or global object.  
//Without use strict, methods called as functions will modify window/global obj.
//with classes however, their methods 'use strict' by default. 'this' will be undefined.