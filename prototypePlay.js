function Circle(radius){
    this.radius = radius;
    this.configurePage = function(){
        let page = this.retrievePaper();
        console.log('page has been configured:' + page);
    }
}

let circle = new Circle(5);

Circle.prototype.draw = function(){
    this.configurePage();
    console.log('draw');
}

Circle.prototype.retrievePaper = function() {
    return ['this is a page'];
}

Circle.prototype.toString() = function(){
    return 'The radius of this circle is ' + this.radius;
};

//Object.keys = instance members only, ie. radius, configurePage
let instanceMembers = Object.keys(circle);

//will log instance members, and also properties of protoype, ie. radius, configurePage, Draw, retrievePaper, etc..
for(let key in circle) console.log(key);

let hasDraw = circle.hasOwnProperty('draw');
//false

let hasConfigurePage = circle.hasOwnProperty('configurePage');
//true