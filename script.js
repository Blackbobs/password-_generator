const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const eye = document.getElementById('eye');
const form = document.getElementById('form');


form.addEventListener('click', (e) => {
    e.preventDefault
})


let state = false;
eye.addEventListener('click', () => {

    if (state) {
        resultEl.setAttribute("type", "password");
        eye.style.color = '#7a797e';
        state = false;
    } else {
        resultEl.setAttribute("type", "text");
        eye.style.color = '#5887ef';
        state = true;
    }

})


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolEl.checked;


    resultEl.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    // console.log('typesCount:', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

    // console.log('typesArr:', typesArr);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName:', funcName)

            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword;

    return finalPassword;
}



// Generate functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48)
}

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 94) + 161)
}

// console.log(getRandomSymbol());

