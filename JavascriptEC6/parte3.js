/*
--- Parte 3 ---



-- Symbols --

const uniqueID = Symbol('Hello');

*Well know symbols*

Symbol.iterator
Symbol.split
Symbol.toStringTag


var arr = [1, 2, 3, 4];
var  it = arr[Symbol.iterator]();

for(let value of arr){
    console.log(value);
}

const obj = {
    values : [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return { 
            next : () =>{
                i++;

                return {
                    value : this.values[i-1],
                    done : i > this.values.length
                };
            }
        };
    }
};

for(let value of obj){
    console.log(value);
}


//-- Generators --
const obj = {
    values : [1, 2, 3, 4],
    *[Symbol.iterator](){
        for(var i=0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for(let value of obj){
    console.log(value);
}

*/