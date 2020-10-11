module.exports = function toReadable(number) {
    const obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred'
    };
    const numberArr = number.toString().split('');
    const numberLen = numberArr.length;
    let result = ''

    if (obj.hasOwnProperty(number)) {
        return obj[number]
    }
    if (numberLen === 2) {
        if (obj[numberArr[1]] !== 0) {
            result += obj[numberArr[0] + 0] + ' ' + obj[numberArr[1]]
        } else {
            result += obj[numberArr[0] + 0]
        }
    } else if (numberLen === 3) {
        if (Number(numberArr[1]) === 0 && Number(numberArr[2]) === 0) {
            result += obj[numberArr[0]] + ' hundred';
        } else if (Number(numberArr[1]) === 0) {
            result += obj[numberArr[0]] + ' ' + 'hundred' + ' ' + obj[numberArr[2]]
        } else
            result += obj[numberArr[0]] + ' hundred ' + (obj[numberArr[1] + numberArr[2]] || obj[numberArr[1] + 0] + ' ' + obj[numberArr[2]]);
    }
    return result
}
