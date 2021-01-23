/*

-- Parte 4 -- 




**Promises**

const doSomethingPromise = () => new Promise((resolve, reject) => {
    try {
        setTimeout(function () {
            console.log('First');
        }, 800);
    } catch (error) {
        //handle error
    }
});
const doOtherThingPromise = () => new Promise((resolve, reject) => {
    try {
        setTimeout(function () {
            console.log('Second');
        }, 1000);
    } catch (error) {
        //handle error
    }
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});

**callbacks**
function doSomething(callback) {
    setTimeout(function () {
        callback('First Data');
    }, 1000)
}

function doOtherThing(callback) {
    setTimeout(function () {
        callback('Second Data');
    }, 1000)
}

function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data;

            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2;
                    try {
                        setTimeout(function () {
                            console.log(processedData + '\n' + processedData2);
                        }, 1000);
                    } catch (error) {
                        //handle error
                    }
                });
            } catch (error) {
                //handle error
            }
        });
    } catch (error) {
        //handle error
    }
}

doAll();



**async & await**
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('teste asyncTimer');
    }, 1000);
});

const simpleFunc = async () =>{
    const data = await asyncTimer();
    return data;
};

simpleFunc().then(data =>{
    console.log(data);
}).catch(error =>{
    console.log(error);
});



** Event Emitter **

*/

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data =>{
    console.log(data);
});

emitter.emit('User logged', {user: 'Celso Henrique'});