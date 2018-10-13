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
        throw new TypeError('ВВедите цифры!');
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
    var ye = typeof(year);
    if (ye !== 'number' || year - Math.floor(year) !== 0) {
        throw new TypeError('ВВедите цифры!');
    } else if (year < 0) {
        throw new RangeError('Год не может быть отрицательным');
    }
    if (year < 100 || year === 0) {
        return 1;
    }

    return ((year / 100) - (year / 100) % 1) + 1;
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
        throw new TypeError('ВВедите строку!');
    }
    var betterHexColor = hexColor.replace('#', '');
    var bigint = parseInt(betterHexColor, 16);
    var r = (bigint > 16) && 255;
    var g = (bigint > 8) && 255;
    var b = bigint && 255;
    if (r > 255 || g > 255 || b > 255) {
        throw new RangeError('Выход за пределы 255!');
    }

    return '(' + r + ', ' + g + ', ' + b + ')';
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
        throw new TypeError('ВВедите цифры!');
    } else if (n <= 0 || n % 1 !== 0) {
        throw new RangeError('');
    }
    var f = [1, 1];
    if (n >= 2) {
        for (var i = 0; i < n - 2; i++) {
            f.push(f[f.length - 1] + f[f.length - 2]);
        }

        return f[f.length - 1];
    }

    return 1;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (typeof(matrix[0][0]) !== 'number') {
        throw new TypeError('ВВедите цифры!');
    }
    var result = [];
    for (var i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
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
        throw new TypeError('ВВедите цифры!');
    } else if (targetNs < 2 || targetNs > 36 || targetNs % 1 !== 0) {
        throw new RangeError('');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /8-800-\d{3}-\d{2}-\d{2}/i.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError('строка должна быть!');
    }
    var tmp = text.match(/\(-:/ig);
    var tmp2 = text.match(/:-\)/ig);

    return (tmp !== null ? tmp.length : 0) + (tmp2 !== null ? tmp2.length : 0);
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    var answer = [[0, 0, 0, 1, 0, 2],
        [1, 0, 1, 1, 1, 2],
        [2, 0, 2, 1, 2, 2],
        [0, 0, 1, 0, 2, 0],
        [0, 1, 1, 1, 2, 1],
        [0, 2, 1, 2, 2, 2],
        [0, 0, 1, 1, 2, 2],
        [2, 0, 1, 1, 0, 2]
    ];
    for (var i = 0; i < answer.length; i++) {
        var tmpIndex = answer[i];
        if (field[tmpIndex[0]][tmpIndex[1]] === field[tmpIndex[2]][tmpIndex[3]] &&
        field[tmpIndex[2]][tmpIndex[3]] === field[tmpIndex[4]][tmpIndex[5]]) {
            return field[tmpIndex[0]][tmpIndex[1]];
        }
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
