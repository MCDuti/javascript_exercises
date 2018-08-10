const { selectRomanNumber, romanConversion, fullRomanString } = require('./romannum');

function testSelectRomanNumber(){
    const test = selectRomanNumber(3);
    if (test[0] === "C") {
        console.log(`selectRomanNumber Passed!, ${test[0]} was received and C was expected.`)
    } else {
        console.error(`This was a mistake!, ${test} was received`)
    }
}

function testRomanConversion(){
    const test = romanConversion(4, 2);
    const expected = "XL";
    if (test === expected) {
        console.log(`romanConversion Passed!, ${test} was received, while ${expected} was expected.`)
    } else {
        console.error(`This was a mistake!, ${test} was received, while ${expected} was expected.`)
    }

}

function testFullRomanString(input, expected) {
    const test = fullRomanString(input);
    if (test === expected) {
        console.log(`fullRomanString Passed!, we expected ${expected} and received ${test}.`)
    } else {
        console.log(`fullRomanString Failed, we expected ${expected} and received ${test}.`)
    }
}

// takes the start number as input and # of results you would like to get starting from your start number
function testRomannum (start, results)  {
    for (let i = start; i < start + results; i++) {
        console.log(`${i} = ${fullRomanString(i)}`);
    }
}

// takes the number of results you want to get as input and returns test results based on random numbers
function testRandom (results) {
    let randomAssign = Math.floor(Math.random()*10);
    if (randomAssign < 5) {
        for (let i = 0; i < results; i++) {
            const randomNumber = Math.floor(Math.random()*100);
            console.log(`${randomNumber} = ${fullRomanString(randomNumber)}`);
        }
    } else {
        for (let i = 0; i < results; i++) {
            const randomNumber = Math.floor(Math.random()*1000);
            console.log(`${randomNumber} = ${fullRomanString(randomNumber)}`);
        }        
    }
}

testSelectRomanNumber();
testRomanConversion();
testFullRomanString(352, "CCCLII");