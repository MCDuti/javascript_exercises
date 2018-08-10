const romanNummerals = Object.freeze(["I", "V", "X", "L", "C", "D", "M", "v", "x", "l", "c", "d"]);

function selectRomanNumber (digitIndex) {
    if (digitIndex < ((romanNummerals.length/3)*2)) {
        let index = (2 * digitIndex) - 2;
        let romanCharacterLower = romanNummerals[index];
        let romanCharacterMedium = romanNummerals[index+1];
        let romanCharacterUpper = romanNummerals[index+2];
        return [romanCharacterLower,romanCharacterMedium,romanCharacterUpper];
    } else {
        return console.log("Ahh, the number you chose does not seem to be accepted, try a different one")
    }
}

function romanConversion (inputNumber, digitIndex) {
    const [romanLower, romanMedium, romanUpper] = selectRomanNumber(digitIndex);

    if(inputNumber < 4) {
        return romanLower.repeat(inputNumber);
    } else if (inputNumber === 4){
        return romanLower + romanMedium;
    } else if (inputNumber === 5){
        return romanMedium; 
    } else if (inputNumber < 9 ){
        return romanMedium + romanLower.repeat(inputNumber-5);
    } else {
        return romanLower + romanUpper;
    }
}

function fullRomanString(input){
    const inputString = input.toString();
    let string = "";

    for (let i = inputString.length; i > 0 ; i--){
        const input = Number(inputString.charAt(i-1));
        string = romanConversion(input, Math.abs(inputString.length-(i-1))) + string;
    }
    return string;
}

console.log(fullRomanString(3486));

module.exports = {
    selectRomanNumber,
    romanConversion,
    fullRomanString,
};