'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    throw new TypeError('в аргументы переданы не числа');
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
    } else if (year < 0) {
        throw new RangeError();
    }

    return (parseInt(year / 100) + 1);
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
    } else if (!/^#[A-F]{6}$/i.test(hexColor)) {
        throw new RangeError();
    }
    hexColor = hexColor.slice(1).match(/.{2}/g);
    hexColor[0] = parseInt(hexColor[0], 16);
    hexColor[1] = parseInt(hexColor[1], 16);
    hexColor[2] = parseInt(hexColor[2], 16);

    return ('(' + hexColor[0] + ', ' + hexColor[1] + ', ' + hexColor[2] + ')');
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
    } else if (n % 1 !== 0 || n <= 0) {
        throw new RangeError();
    } else if (n > 2) {
        let fibonacciArray = [1, 1];
        for (let i = 2; i < n; i++) {
            fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
        }

        return (fibonacciArray[n - 1]);
    }

    return (1);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposed = [];
    for (let j = 0; j < columns; j++) {
        transposed[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
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
    if (typeof n !== 'number' && targetNs !== 'number') {
        throw new TypeError('введите числа');
    } else if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('второе чсло должно быть от 2 до 36');
    }

    return (n.toString(targetNs));
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('введите номер корректно');
    }

    return (/^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber));
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
    let smileArray = text.match(/\(-:|:-\)/g);
    if (smileArray === null) {
        return (0);
    }

    return (smileArray.length);
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < field.length; i++) {
        let lineCheck = [];
        let columnCheck = [];
        getStripWinner(field, lineCheck, columnCheck, i);
        if (lineCheck.length === 3 || columnCheck.length === 3) {
            return ('x');
        } else if (lineCheck.length === 0 || columnCheck.length === 0) {
            return ('o');
        }
    }
    getCrossWinner(field);

    return ('draw');
}

function getStripWinner(field, lineCheck, columnCheck, i) {
    for (var j = 0; j < field[i].length; j++) {
        if (field[i][j].match(/x/g) !== null) {
            lineCheck.push(field[i][j]);
        }
        if (field[j][i].match(/x/g) !== null) {
            columnCheck.push(field[j][i]);
        }
    }
}

function getCrossWinner(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2] ||
        field[2][0] === field[1][1] && field[1][1] === field[0][2]) {
        return (field[1][1]);
    }
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
