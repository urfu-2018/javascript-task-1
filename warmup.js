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

    if (typeof year !== 'number') {
        throw new TypeError();
    }

    if (year < 0) {
        throw new RangeError();
    }

    return Math.trunc(year / 100) + 1;
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

    if (hexColor.length > 7) {
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
    if (!Array.isArray(matrix)) {
        throw new TypeError();
    }

    let matrixResult = [];

    for (let x = 0; x < matrix.length; x++) {
        if (!Array.isArray(matrix[x])) {
            throw new TypeError();
        }

        let row = [];
        for (let y = 0; y < matrix[x].length; y++) {
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

    const abc = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B',
        'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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

    return result;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /8-800-\d\d\d-\d\d-\d\d/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    const matchResult = text.match(/(:-\))/g);

    if (matchResult) {
        return matchResult.length;
    }

    return 0;
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

    for (let i = 1; i <= 2; i++) {
        let result = '';

        for (let j = 0; j <= 2; j++) {
            result = result + field[j][j];
        }

        if (result === 'xxx') {
            return 'x';
        }

        if (result === 'ooo') {
            return 'o';
        }
        field = matrixProblem(field);
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
