'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new TypeError();
    }

    return a + b;
    // Ваше решение
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    // Ваше решение
    if (isNaN(year)) {
        throw new TypeError ('Переданный параметр не является числом');
    } else if (year < 0) {
        throw new RangeError ('Значение года не может быть отрицательным числом!');
    } else {
        const yearStr = year.toString();
        const num = Number.parseInt(yearStr[0]) + Number.parseInt(yearStr[1]);
        const secondPart1 = Number.parseInt(yearStr[yearStr.length - 1]);
        const secondPart2 = Number.parseInt(yearStr[yearStr.length - 2]);
        let res;
        if (secondPart1 === 0 && secondPart2 === 0) {
            res = num;
        } else {
            res = num + 1;
        }

        return res;
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
    // Ваше решение
    if (typeof hexColor !== String) {
        throw new TypeError ('Переданный параметр не является строкой');
    } else {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);
        const answer = '(' + r + ',' + g + ',' + b + ')';

        return answer;
    }
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
    if (isNaN(n)) {
        throw new TypeError ('Переданный параметр не является числом');
    } else if (n % 2 !== 0 || n <= 0) {
        throw new RangeError('n не является целым положительным числом');
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    const n = matrix.length;
    const m = matrix[0].length;
    for (let j = 0; j < n; j++) {
        if (matrix[j].length !== m) {
            throw new TypeError('на входе не двумерный массив!');
        }
    }
    let matrixT = [m][n];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrixT[i][j] = matrix[j][i];
        }
    }

    return matrixT;
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
    // Ваше решение
    if (isNaN(n) || isNaN(targetNs)) {
        throw new TypeError ('Переданныe параметры не являются числом');
    } else if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('недопустимое значение системы счисления');
    } else {
        return n.toString(targetNs);
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    const res = phoneNumber.match(/8-800-[\d]{3}-[\d]{2}-[\d]{2}/);

    return res !== null;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeof text !== String) {
        throw new TypeError ('Переданный параметр не является строкой');
    }
    let countOfSmiles = 0;
    for (let i = 0; i < text.length - 3; i++) {
        if (text[i] === '(' && text[i + 1] === '-' && text[i + 2] === ':') {
            countOfSmiles++;
        } else if (text[i] === ':' && text[i + 1] === '-' && text[i] === ')') {
            countOfSmiles++;
        } else {
            continue;
        }
    }

    return countOfSmiles;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    let result = '';
    if (field[0, 0] === field[0, 1] === field[0, 2]) {
        result = field[0, 0];
    }
    if (field[0, 0] === field[1, 1] === field[2, 2]) {
        result = field[0, 0];
    }
    if (field[0, 0] === field[2, 0] === field[2, 2]) {
        result = field[0,0];
    }
    else if (field[1, 0] === field[1, 1] === field[1, 2]) {
        result = field[1,0];
    }
    else if (field[2, 0] === field[2, 1] === field[2, 2]) {
        result = field[2,0];
    }
    else if (field[0, 2] === field[1, 2] === field[2, 2]) {
        result = field[0, 2];
    } else {
        result = 'draw';
    }

    return result;
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
