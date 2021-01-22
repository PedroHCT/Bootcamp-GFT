/*
--- Parte 1 ---

var sum = (a, b) => a+b;

console.log(sum(8,5));

var obj = { 
    onLoad : function(){
        // usando arrow function para o this ser do obj
        setTimeout(() => {
            this.log('testee');
        }, 1000)
    },
    log : function(text){
        console.log(text);
    }
}

obj.onLoad();


function randomNumber(){
    return Math.random()*10;
}

*podemos colocar um default value nos parametros da função, para quando deixar de passar algum parâmetro, ele determinar um valor default naquele parâmetro*
function multiply(a, b = 1){
    return a*b;
}

console.log(multiply(5));

-- lazy evaluation --

function multiply(a, b = randomNumber()){
    return a*b;
}

console.log(multiply(5));
*/




