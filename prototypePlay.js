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