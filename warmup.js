'use strict';

// Проверка на число
function typeDefinitionNumber(x) {
    return typeof (x) !== 'number';
}

// Проверка на строку
function typeDefinitionString(q) {
    return typeof (q) !== 'string';
}

// Проверка на целое число
function isIntegerNumber(numberFibonacci) {
    return ((numberFibonacci % 1) === 0);
}

// Перевод в систему счисления
function parseHex(st, co, pos) {
    return parseInt(st.slice(co, pos), 16);
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (typeDefinitionNumber(a) || typeDefinitionNumber(b)) {
        throw new TypeError('Введены неверные данные');
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
    // Ваше решение
    if (typeDefinitionNumber(year)) {
        throw new TypeError('Параметр должен быть числом');
    }
    if (year < 0) {
        throw new RangeError ('Параметр должен быть больше 0');
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
    // Ваше решение
    if (typeDefinitionString(hexColor)) {
        throw new TypeError('Цвет передан не строкой');
    }
    if (!(/^#[a-fA-F0-9]{6}$/.test(hexColor))) {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }

    return '(' + [parseHex(hexColor, 1, 3),
        parseHex(hexColor, 3, 5), parseHex(hexColor, 5, 7)].join(', ') + ')';
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
    if (typeDefinitionNumber(n)) {
        throw new TypeError('Параметр должен быть числом');
    }
    if ((n < 0) && isIntegerNumber(n)) {
        throw new RangeError ('Параметр должен быть целым числом и больще 0');
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;

}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    if (matrix.length === 0 || matrix[0].length === 0 || !Array.isArray(matrix)) {
        throw new TypeError ('Не двумерный массив');
    }
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i].length !== matrix[0].length) {
            throw new TypeError ('Строки должны быть одного размера');
        }
    }

    return matrix[0].map((column, a) => matrix.map(row => row[a]));
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
    if (typeDefinitionNumber(n) || !isIntegerNumber(targetNs) || typeDefinitionNumber(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError ('Cистема счисления выходит за пределы значений [2, 36]');
    }

    return n.toString(targetNs);

}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    if (typeDefinitionString(phoneNumber)) {
        throw new TypeError('Параметр должен быть строкой');
    }

    return /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeDefinitionString(text)) {
        throw new TypeError ('В качестве аргумента передаётся не строка');
    }

    return (text.match(/(:-\)|\(-:)/g) || []).length;

}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    if ((field[0][0] === field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] === field[2][0])) {
        return field[1][1];
    }
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][0] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[0][i] === field[2][i]) {
            return field[0][i];
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
