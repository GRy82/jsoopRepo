//this example exhibits Composition over Inheritance. Inheritance would require multilevel.
//this is why inheritance is used instead.

function mixin(object, ...actions){
    Object.assign(object, ...actions);
}

const canEat = {
    eat: function(){
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('swim');
    }
};

function Person(){
}

function Goldfish(){
}

mixin(Person.prototype, canEat, canWalk);
mixin(Goldfish.prototype, canEat, canSwim);

const person = new Person();
const goldfish = new Goldfish();