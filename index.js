function Stopwatch(){
    let startTime, stopTime, running, duration = 0;

    this.start = function(){
        if(running)
            throw new Error('stop watch is already running');

        running = true;

        startTime = new Date();
    };
    this.stop = function(){
        if(!running)
            throw new Error('stop watch is already stopped');

        running = false;

        stopTime = new Date();
        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function(){
        duration = 0;
        running = false;
        startTime = null;
        stopTime = null;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    });
}

const sw = new Stopwatch();

sw.start();
sw.stop();
console.log(sw.duration);
sw.reset();

//factory function

// function createCircle(radius){
//     return {
//         radius,
//         draw : function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

// //constructor function

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
//     this.shmobject = {};
// }

// const someCircle = new Circle(1);

// for (let key in someCircle){
//     if(typeof someCircle[key] !== 'function')
//         break;
//         //console.log(someCircle[key]);
// }

// const keys = Object.keys(someCircle);

// console.log(keys);

// if('shmobject' in someCircle)
//     console.log('Yeah, it\'s there.');