//NEVER CODE LIKE THIS. IT RUINS THE SENSE OF ABSTRACTION. OBJECT STATES CAN BE MESSED WITH
//IN WAYS YOU WOULD NOT WANT. 

//ONLY OPTIMIZE USING PROTOTYPE METHODS WHEN YOU WILL HAVE MANY INSTANCES OF AN OBJECT
//NOT WORTH DOING WITH A STOP WATCH, SINCE YOU'LL LIKE ONLY HAVE A 1 OR FEW INSTANCES.
//WHEN YOU HAVE LOTS OF INSTANCES, IT MIGHT BE WORTH IT, BECAUSE YOU SAVE MEMORY.

function Stopwatch(){
    let startTime, stopTime, duration, running;

    Object.defineProperty(this, 'startTime', {
        get: function(){ return startTime; }
    });
    Object.defineProperty(this, 'stopTime', {
        get: function(){ return stopTime; }
    });
    Object.defineProperty(this, 'running', {
        get: function(){ return running; }
    });
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; }
    });
}

Stopwatch.prototype.start = function(){
    if(this.running)
        throw new Error('stop watch is already running');

    this.running = true;

    this.startTime = new Date();
}

Stopwatch.prototype.stop = function(){
    if(!this.running)
        throw new Error('stop watch is already stopped');

    this.running = false;

    this.stopTime = new Date();
    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
}

Stopwatch.prototype.reset = function(){
    this.duration = 0;
    this.running = false;
    this.startTime = null;
    this.stopTime = null;
};

const sw = new Stopwatch();

sw.duration = 'whatever I want it to be';
