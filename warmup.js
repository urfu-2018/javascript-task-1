'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) !== 'number') {
        throw new TypeError();
    }
    if (typeof(b) !== 'number') {
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
    if (typeof(year) !== 'number') {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }

    return Math.ceil(year / 100);
    // Ваше решение
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof(hexColor) !== 'string') {
        throw new TypeError();
    }
    let red = parseInt(hexColor.substring(1, 3), 16);
    let green = parseInt(hexColor.substring(3, 5), 16);
    let blue = parseInt(hexColor.substring(5, 7), 16);

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
    if (typeof(n) !== 'number') {
        throw new TypeError();
    }
    if (n <= 0) {
        throw new RangeError();
    }
    function fib(x) {
        return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, x) -
        Math.pow((1 - Math.sqrt(5)) / 2, x)) /
        Math.sqrt(5));
    }

    return fib(n);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError();
    }

    let m = matrix.length;
    let n = matrix[0].length;

    for (let i = 0; i < m; ++i) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
            throw new TypeError();
        }
    }

    return logic(matrix);

    function logic() {
        if (n === 0) {
            throw new TypeError();
        }

        let arr = new Array(n);

        for (let i = 0; i < n; ++i) {
            arr[i] = new Array(m);
        }
        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                arr[j][i] = matrix[i][j];
            }
        }

        return arr;
    }
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number') {
        throw new TypeError();
    }
    if (targetNs > 36 || targetNs < 2) {
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
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError();
    }
    const regexp = new RegExp(/^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/g);

    return regexp.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError();
    }
    let res = 0;
    for (let i = 0; i < text.length; i++) {
        if ((text[i] === '(') && (text[i + 1] === '-') && (text[i + 2] === ':')) {
            i += 2;
            res++;
        }
        if (text[i] === ':' && text[i + 1] === '-' && text[i + 2] === ')') {
            i += 2;
            res++;
        }
    }

    return res;
    // Ваше решение
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (diagonalCheck(field) !== 'n') {
        return diagonalCheck(field);
    } else if (verticalCheck(field) !== 'n') {
        return verticalCheck(field);
    } else if (horizontalCheck(field) !== 'n') {
        return horizontalCheck(field);
    }

    return 'draw';
}

function diagonalCheck(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[1][1];
    } else if (field[2][0] === field[1][1] && field[1][1] === field[0][2]) {
        return field[1][1];
    }

    return 'n';
}

function verticalCheck(field) {
    field = matrixProblem(field);
    for (let i = 0; i < 3; i++) {
        if (checkLine(field[i]) === 'o' || checkLine(field[i]) === 'x') {
            return checkLine(field[i]);
        }
    }

    return 'n';
}

function horizontalCheck(field) {
    for (let i = 0; i < 3; i++) {
        if (checkLine(field[i]) === 'o' || checkLine(field[i]) === 'x') {
            return checkLine(field[i]);
        }
    }

    return 'n';
}

function checkLine(line) {
    if (line[0] === line[1] && line[1] === line[2]) {
        return line[0];
    }

    return 'n';
    // Ваше решение
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
