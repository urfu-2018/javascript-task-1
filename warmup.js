'use strict';


function abProblem(a, b) {
    if (Number.isInteger(a) === false) {
        throw new TypeError("Integer error a")
    }

    if (Number.isInteger(b) === false) {
        throw new TypeError("integer error b")
    }

    return a + b
}
console.log(abProblem(4, 7))





function centuryByYearProblem(year) {

    if(Number.isInteger(year)===false) {
        throw new TypeError("Integer error")
    }
    if(year<=0) {
        throw new RangeError('only positive numbers')
    }
    let roundedCentury=(year/100)
    return Math.ceil(roundedCentury)
}
console.log(centuryByYearProblem(2018));
/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== "string") {
        throw new TypeError("цвет только строкой")
    }
    if (hexColor.length !== 7) {
        throw new RangeError('число выходит за допустимые пределы')
    }
    if (hexColor[0]!=='#')
        throw new RangeError('# обязателен')
    let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)

        let r = parseInt(rgb[1], 16),  g = parseInt(rgb[2], 16),  b= parseInt(rgb[3], 16)
    return '(' + r + ', ' + g + ', ' + b + ')'
}
console.log(colorsProblem('#fff32f'))

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (Number.isInteger(n) === false) {
        throw new TypeError('n-это целое число')
    }
    if (n < 0) {
        throw new RangeError('n-положительное число')
    }
    let sums
    if (n >= 2) {
        sums = fibonacciProblem(n - 1) + fibonacciProblem(n - 2)}
        else {
        sums=n
        }
return sums

}
console.log(fibonacciProblem(4))

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if(Array.isArray(matrix)===false){
    throw new TypeError('должен быть массив')
    }
    if (matrix.every(Array.isArray)===false){
        throw new TypeError('должен быть двумерный массив')
    }

    {
        let m = matrix.length, n = matrix[0].length, cell= [];
        for (let i = 0; i < n; i++)
        { cell[i] = [];
            for (let j = 0; j < m; j++) cell[i][j] = matrix[j][i];
        }
        return cell;
    }
}console.log(matrixProblem
([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
]))



function numberSystemProblem(n, targetNs) {
    if (!Number.isInteger(n)) {
        throw new TypeError('должно быть число')
    }
    if (!Number.isInteger(targetNs)) {
        throw new TypeError('Систеа счисления должна быть числом')
    }
    if ((2 <= targetNs <= 36) === false) {
        throw new RangeError('Система счисления от 2 до 36')
    }
    return n.toString(targetNs)
}
console.log(numberSystemProblem(3000, 36));

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== "string"){
        throw new TypeError('')
    }
    let pattern = /8-800-\d{3}-\d{2}-\d{2}/
    return pattern.test(phoneNumber)
}
console.log(phoneProblem('8-800-333-51-73'))


/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !=="string") {
        throw new TypeError("string only")
    }

    let result = text.match(/\(-:|:-\)/ig)
    if (result===null){
        throw new TypeError("Смайликов не найдено")
    }
    return result.length
}
console.log(smilesProblem('(-:'))

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const win = [];
    for (let i = 0; i < field.length; i++) {
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            win.push(field[0][i]);
        }
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            win.push(field[i][0]);
        }
    }
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        win.push(field[1][1]);
    }

    if (win.includes('o') !== false) {
        return 'o';
    }
    if (win.includes('x') !== false) {
        return 'x';
    }
    if (win.includes('o') === false && win.includes('x') === false) {
        return 'draw';
    }
}
console.log(ticTacToeProblem(['x', 'x', 'x'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o']))

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
