/*
--- Parte 2 ---


-- rest operator ... -- 

function sum(...args) {
    return args.reduce((acc, value) => acc + value);
}



-- spread operator ... --

const arr = [1,2,3,4,5];
const arr2 = [...arr, 6, 7,8]

const obj = {
    test : 123,
    subObj : {
        subTest : 456
    }
};

const obj2 = {...obj, subObj : {...obj.subObj}};




-- Destructuring Assignment --

var arr = ['Apple', 'Banana', 'Orange'];

var[apple, banana, orange] = ['Apple', 'Banana', 'Orange'];

var obj = {
    name : 'Celso',
    subObj : {
        prop : 'test'
    }
};

var {name : nameDA} = obj;
var {subObj : {prop : propDA}} = obj;



*/