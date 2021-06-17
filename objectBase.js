let person = { name: 'Greg' };
let objectBase = person.getPrototypeOf(person);
let propDescriptor = objectBase.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(propDescriptor);


Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

person.name = "Paul";

console.log(person);

let keys = Object.keys(person);

delete person.name;