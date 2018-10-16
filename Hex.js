'use strict'

const HEX_SYMBOLS = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
const HEX_BASE = 16;

/**
 * Определяет является ли символ шеснадцатиричным 
 * @param {String} symbol Шестнадцатиричный символ, в виде строки длины 1
 * @returns {Boolean} Когда символ шестнадцатиричный, то true, а иначе false
 */
function IsHexadimal(symbol) {
    return HEX_SYMBOLS.includes(symbol);
}

/**
 * Переводит Шестнадцатиричный символ в десятичное число
 * @param {String} symbol Шестнадцатиричный символ, в виде строки длины 1
 * @returns {Number} Десятичнеое число, переведённое из шестнадчатиричного символа
 */
function GetNUmberBySymbal(symbol) {
    return HEX_SYMBOLS.indexOf(symbol);
}

module.exports = {
    HEX_BASE,
    IsHexadimal,
    GetNUmberBySymbal
}