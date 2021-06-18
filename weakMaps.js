
//a WeakMap is a dictionary where keys are objects, and values can be anything.
//keys are 'weak'.  If there are no references to keys, they're garbage colelcted.

//WeakMaps can be used to set and get private properties, abstracted from outside view.
const privateProps = new WeakMap();

class Circle{
    constructor(radius){
        privateProps.set(this, {
            radius: this.radius,
            move: () => {
                console.log('move');
            }
        });
    }

    draw(){
        privateProps.get(this).move();
        let radius = privateProps.get(this).radius;
        console.log('drawing circle with radius ' + radius);
    }
}