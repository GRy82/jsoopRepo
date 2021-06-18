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

    this.render = function(){
        return `<select>${this.items.map(el => 
            `<option>${el}</option>`)
            .join('')}</select>`;
    }
}

function HtmlImageElement(src = undefined){
    this.src = src;

    this.render = function(){
        return `<img src="${this.src}" />`;
    };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;



