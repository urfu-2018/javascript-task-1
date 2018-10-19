'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new TypeError();
    } else {
        return a + b;
    }
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
    } else if (year < 0) {
        throw new RangeError();
    } else {
        return Math.ceil(year / 100);
    }
}

function transformColor(hexColor) {
    var rgbColor = '(';
    for (let i = 1; i <= 6; i += 2) {
        rgbColor += (Number.parseInt(hexColor[i], 16) * 16 +
        Number.parseInt(hexColor[i + 1], 16)) + (i < 5 ? ', ' : '');
    }
    rgbColor += ')';

    return rgbColor;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof(hexColor) === 'string') {
        var hex = /^#[a-fA-F\d]{6}$/;
        if (!hex.test(hexColor)) {
            throw new RangeError();
        } else {
            return transformColor(hexColor);
        }
    } else {
        throw new TypeError();
    }
}

function getFibonacci(n) {
    var b = 1;
    for (let i = 3, a = 1; i <= n; i++) {
        var temp = b;
        b += a;
        a = temp;
    }

    return b;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof(n) === 'number') {
        if (n < 0) {
            throw new RangeError();
        } else {
            return getFibonacci(n);
        }
    } else {
        throw new TypeError();
    }
}

function checkMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
            return false;
        }
    }

    return true;
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
    } else if (!checkMatrix(matrix)) {
        throw new TypeError();
    } else {
        return matrix[0].map((item, element) => matrix.map(matr => matr[element]));
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
    if (typeof(n) === 'number' && typeof(targetNs) === 'number') {
        if (targetNs < 2 || targetNs > 36) {
            throw new RangeError();
        } else {
            return n.toString(targetNs);
        }
    } else {
        throw new TypeError();
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    var phone = /^8-800-\d{3}(-\d{2}){2}$/;

    return phone.test(phoneNumber);
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
    } else {
        return (text.length - text.replace(/:-\)/, '').length - text.replace(/\(-:/, '').length) / 3;
    }
}

function verticalVictory(field) {
    for (let i = 0, j = 1, k = 1; i < 3; i++) {
        for (j = 1; j < 3 && field[i][0] === field[i][j]; j++) {
            k++;
        }
        if (j === 3 && k > 0) {
            return field[i][0];
        }
    }

    return 'no';
}

function horizonlalVictory(field) {
    for (let i = 0, j = 1, k = 1; i < 3; i++) {
        for (j = 1; j < 3 && field[0][i] === field[j][i]; j++) {
            k++;
        }
        if (j === 3 && k > 0) {
            return field[0][i];
        }
    }

    return 'no';
}

function diagonalVictory(field) {
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2] ||
        field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
        return field[1][1];
    }

    return 'no';
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    var ver = verticalVictory(field);
    var hor = horizonlalVictory(field);
    var diag = diagonalVictory(field);
    if (ver !== 'no') {
        return ver;
    } else if (hor !== 'no') {
        return hor;
    } else if (diag !== 'no') {
        return diag;
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
