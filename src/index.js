const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let ArrSubstring = [];
    for (let i = 0; i < expr.length; i += 10) {
        ArrSubstring.push(expr.substring(i, i + 10));
    }

    let decodedWord = ArrSubstring.reduce((str, item) => {
        if (item === `**********`) {
            str += ' ';
        } else {
            item = item.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            str += MORSE_TABLE[item];
        }
        return str;
    }, "")

    return decodedWord;
}

module.exports = {
    decode
}