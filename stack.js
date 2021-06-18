
class Stack extends Array{
    constructor(){
        super();
        this.count = 0;
    }

    peek(){
        if(this.count === 0) throw new Error('the stack is empty.');
        let removal = super.pop();
        super.push(removal);
        return removal;
    }

    push(value){
        super.push(value);
        this.count++;
    }

    pop(){
        if(this.count === 0) throw new Error('the stack is empty.');
        let removal = super.pop();
        this.count--;
        return removal;
    }
}
