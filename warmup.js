'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (Math.trunc(a) !== a || Math.trunc(b) !== b) {
        throw new TypeError();
    }

    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    throw new TypeError();
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (Math.trunc(year) !== year) {
        throw new TypeError();
    }

    if (typeof year !== 'number') {
        throw new TypeError();
    }

    if (year < 0) {
        throw new RangeError();
    }

    if (year % 100 !== 0) {
        return Math.trunc(year / 100) + 1;
    }

    if (year % 100 === 0) {
        return year / 100;
    }
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }

    if (hexColor.length !== 7) {
        throw new RangeError();
    }

    if (!/#[a-f|A-F|0-9]{6}/.test(hexColor)) {
        throw new RangeError();
    }

    const red = parseInt(hexColor.substr(1, 2), 16);
    const green = parseInt(hexColor.substr(3, 2), 16);
    const blue = parseInt(hexColor.substr(5, 2), 16);

    return `(${red}, ${green}, ${blue})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number') {
        throw new TypeError();
    }

    if (n < 1 || Math.trunc(n) !== n) {
        throw new RangeError();
    }

    let n1 = 0;
    let n2 = 1;

    for (let i = 1; i <= n - 1; i++) {
        let n11 = n1;
        n1 = n2;
        n2 = n11 + n2;
    }

    return n2;

}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {

    if (matrix.length === 0) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError();
        }
    }

    let matrixResult = [];

    for (let x = 0; x < matrix[0].length; x++) {
        let row = [];
        for (let y = 0; y < matrix.length; y++) {
            row.push(matrix[y][x]);
        }

        matrixResult.push(row);
    }

    return matrixResult;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
const abc = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// eslint-disable-next-line
function numberSystemProblem(n, targetNs) {
    if (typeof n !== 'number') {
        throw new TypeError();
    }

    if (typeof targetNs !== 'number') {
        throw new TypeError();
    }

    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    if (n < 0) {
        n = -n;
    }

    let [int, d] = n.toString().split('.');
    let result = toTargetNs(int, targetNs);

    if (d) {
        result += '.';
        d = n - parseInt(int);
        while (d !== 0) {
            d = d * 2;
            const [i] = d.toString().split('.');
            result += abc[i.toString()];
            d = d - i;
        }
    }

    if (n < 0) {
        result = '-' + result;
    }

    return result.toLowerCase();
}

function toTargetNs(n, targetNs) {
    let result = '';

    while (n >= targetNs) {
        const ost = n % targetNs;
        result = result + abc[ost];
        n = (n - ost) / targetNs;
    }

    if (n !== 0 || result.length === 0) {
        result += abc[n];
    }

    result = result.split('')
        .reverse()
        .join('');

    return result.toLocaleLowerCase();
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /^8-800-\d\d\d-\d\d-\d\d$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    const matchResult = text.match(/(:-\))/g);
    const matchResult2 = text.match(/(\(-:)/g);
    let result = 0;

    if (matchResult) {
        result += matchResult.length;
    }

    if (matchResult2) {
        result += matchResult2.length;
    }

    return result;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
// eslint-disable-next-line
function ticTacToeProblem(field) {

    for (let i = 1; i <= 2; i++) {
        if (field[0].join('') === 'xxx') {
            return 'x';
        }
        if (field[0].join('') === 'ooo') {
            return 'o';
        }
        if (field[1].join('') === 'xxx') {
            return 'x';
        }

        if (field[1].join('') === 'ooo') {
            return 'o';
        }

        if (field[2].join('') === 'xxx') {
            return 'x';
        }

        if (field[2].join('') === 'ooo') {
            return 'o';
        }

        field = matrixProblem(field);
    }

    const diag1 = field[0][0] + field[1][1] + field[2][2];
    const diag2 = field[0][2] + field[1][1] + field[2][0];

    if (diag1 === 'xxx') {
        return 'x';
    }

    if (diag1 === 'ooo') {
        return 'o';
    }

    if (diag2 === 'xxx') {
        return 'x';
    }

    if (diag2 === 'ooo') {
        return 'o';
    }

    return 'draw';

}

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
