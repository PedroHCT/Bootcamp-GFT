/*

-- Parte 4 -- 


*/

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

                    setTimeout(function () {
                        console.log(processedData + '\n' + processedData2);
                    }, 1000);
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