function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    };
}

HtmlElement.prototype.focus = function(){
    console.log('focused');
}

function HtmlSelectElement(items = []){
    this.items = items;

    this.addItem = function(item){
        this.items.push(item);
    };

    this.removeItem = function(item){
        if(!this.items.includes(item)) throw new Error('that item is not in items.');
        this.items.splice(this.items.indexOf(item), 1);
    };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;



