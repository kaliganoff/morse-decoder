const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseSymbols = expr.replaceAll('**********', '**').match(/.{1,2}/g);
    let result = '';
    for (symbol of morseSymbols) {
        switch (symbol) {
            case '**':
                result += '     ';
                break;
            case '00':
                result += '&';
                break;
            case '10':
                result += '.';
                break;
            case '11':
                result += '-';
                break;
        }
    }
    let symbols = result.match(/.{1,5}/g);
    let finalResult = '';
    for (symbol of symbols) {
        if (symbol === '     ') {
            finalResult += ' ';
        } else {
        symbol = symbol.replaceAll('&', '');
        finalResult += MORSE_TABLE[symbol];
        }
    }
    return finalResult;
}

module.exports = {
    decode
}