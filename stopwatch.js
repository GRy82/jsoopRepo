function Stopwatch(){
    this.duration;

    let startTime;

    this.start = function(){
        startTime = this.set(new Date());
    };
    this.stop = function(){
        duration = Date.parse(new Date() - this.get(startTime)) / 1000;
    };
    this.reset = function(){
        duration = 0;
    };

    Object.defineProperty(this, 'startTime', {
        get: function(){
            return startTime;
        },
        set: function(time){
            startTime = time;
        }
    });
}

const sw = new Stopwatch();

sw.start();
await sleep(2500);
sw.stop();
console.log(sw.duration);