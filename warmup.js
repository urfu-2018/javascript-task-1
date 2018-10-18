'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    } else {
        throw new TypeError();
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
    if (typeof(year) === 'number'){
        if (year >= 0) {
            return Math.ceil(year / 100);
        } else {
            throw new RangeError();
        }
    } else {
        throw new TypeError();
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
    if (typeof(hexColor) === 'string') {
        var hex = /^#[a-fA-F\d]{6}$/; 
        if (hex.test(hexColor)) {
            var rgbColor = "(";
            for (let i = 1; i <= 6; i+=2) {
                rgbColor += (Number.parseInt(hexColor[i]) * 16 + Number.parseInt(hexColor[i + 1])) + (i < 5 ? ", " : ""); 
            }
            rgbColor += ")";
            return rgbColor;
        } else {
            throw new RangeError();
        }
    } else {
        throw new TypeError();
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
    if (typeof(n) === 'number') {
        if (n >= 0) {
            var b = 1;
            for (let i = 3, a = 1; i <= n; i++) {
                var temp = b;
                b += a;
                a = temp;
            }
            return b;
        } else {
            throw new RangeError();
        }
    } else {
        throw new TypeError();
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (Array.isArray(matrix)) {
        for (let i = 0; i<matrix.length; i++) {
            if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
                throw new TypeError();
            }
        }
        return matrix[0].map((item, element) => matrix.map(matr => matr[element]));
    } else {
        throw new TypeError();
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
        if (targetNs >= 2 && targetNs <= 36) {
            return n.toString(targetNs);
        } else {
            throw new RangeError();
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
    if (typeof(text) === 'string') {
        return (text.length - text.replace(/\:\-\)/).length - text.replace(/\(\-\:/).length) / 3;
    } else {
        throw new TypeError();
    }
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i++) {
        for (let j = 1; j < 3 && field[i][0] === field[i][j]; j++) {
            if (j === 2) {
                return field[i][0];
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 1; j < 3 && field[0][i] === field[j][i]; j++) {
            if (j === 2) {
                return field[0][i];
            }
        }
    }
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2] ||
        field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
        return field[1][1];
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
