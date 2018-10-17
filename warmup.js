'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError();
    }

    return a + b;
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

    return Math.ceil(year / 100);
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

    const hexColorFormat = RegExp('^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$');
    if (!hexColorFormat.test(hexColor)) {
        throw new RangeError();
    }

    const color = [];
    for (let j = 1; j < hexColor.length; j += 2) {
        color.push(parseInt(hexColor.substring(j, j + 2), 16));
    }

    return `(${color[0]}, ${color[1]}, ${color[2]})`;
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

    if (n < 0 || !Number.isInteger(n)) {
        throw new RangeError();
    }

    let previousValue = 0;
    let currentValue = 1;
    let nextValue;
    let count = 0;

    while (count !== n) {
        nextValue = currentValue + previousValue;
        previousValue = currentValue;
        currentValue = nextValue;
        count++;
    }

    return previousValue;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!isMatrix) {
        throw new TypeError();
    }

    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

function isMatrix(obj) {
    if (!(obj instanceof Array) || obj.length === 0) {
        return false;
    }

    const firstRowLength = obj[0].length;
    for (let i = 0; i < obj.length; i++) {
        if (!(obj[i] instanceof Array) || obj[i].length !== firstRowLength) {
            return false;
        }
    }

    return true;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError();
    }

    const minTargetNs = 2;
    const maxTargetNs = 36;
    if (!(minTargetNs <= targetNs <= maxTargetNs)) {
        throw new RangeError();
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const phoneFormat = new RegExp('^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$');

    return phoneFormat.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }

    return (text.match(':-[)]') || []).length + (text.match('[(]-:') || []).length;
}

/**
 * Определяет победителя в игре 'Крестики-нолики'
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let result = null;

    ['o', 'x'].forEach(
        function (symb) {
            const winLine = `${symb}${symb}${symb}`;

            function registerWin(_field) {
                _field.forEach(
                    function (line) {
                        if (line.join('') === winLine) {
                            result = symb;
                        }
                    }
                );
            }

            registerWin(field);
            registerWin(matrixProblem(field));

            const mainDiagonal = `${field[0][0]}${field[1][1]}${field[2][2]}`;
            const appendDiagonal = `${field[0][2]}${field[1][1]}${field[2][0]}`;

            if (mainDiagonal === winLine || appendDiagonal === winLine) {
                result = symb;
            }
        }
    );

    return result === null ? 'draw' : result;
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
