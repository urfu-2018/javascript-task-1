'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isIntegerNumber(a)) {
        throw new TypeError(a + ' is not an integer number');
    }
    if (!isIntegerNumber(b)) {
        throw new TypeError(b + ' is not an integer number');
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
    if (!isIntegerNumber(year)) {
        throw new TypeError(year + ' is not an integer number');
    }
    if (year < 0) {
        throw new RangeError(year + ' is not a positive integer number');
    }
    const YEARS_IN_CENTURY = 100;
    if (year % YEARS_IN_CENTURY === 0) {
        return year / YEARS_IN_CENTURY;
    }

    return Math.floor(year / YEARS_IN_CENTURY) + 1;
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
        throw new TypeError(hexColor + ' is not a string');
    }
    const HEX_COLOR_PATTERN = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i;
    const isValidHEXColor = HEX_COLOR_PATTERN.test(hexColor);
    if (!isValidHEXColor) {
        throw new RangeError(hexColor + ' is not a valid HEX color');
    }
    const RGB_PARTS = hexColor.match(HEX_COLOR_PATTERN).slice(1);
    const HEXADECIMAL_RADIX = 16;
    RGB_PARTS.forEach(function (value, index) {
        RGB_PARTS[index] = parseInt(value, HEXADECIMAL_RADIX);
    });

    return '(' + RGB_PARTS.join(', ') + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isIntegerNumber(n)) {
        throw new TypeError(n + ' is not an integer number');
    }
    if (n <= 0) {
        throw new RangeError(n + ' is not a positive integer number');
    }
    let previous = 0;
    let current = 1;
    let counter = 1;
    while (counter <= n) {
        current += previous;
        previous = current;
        counter++;
    }

    return current;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError('specified matrix is not an array');
    }
    if (!matrix.length) {
        throw new TypeError('specified matrix is not a two-dimensional array');
    }
    const TRANSPOSED_MATRIX = [];
    const MATRIX_ROW_LENGTH = matrix[0].length;
    matrix.forEach(function (row) {
        if (!Array.isArray(row) || Array.isArray(row) && !row.length) {
            throw new TypeError('specified matrix is not a two-dimensional array');
        }
        if (MATRIX_ROW_LENGTH !== row.length) {
            throw new TypeError('specified matrix is not a two-dimensional array');
        }
        row.forEach(function (cellValue, cellIndex) {
            // по индексам столбцов матрицы создаём строки в транспонированном массиве
            if (TRANSPOSED_MATRIX.length < (cellIndex + 1)) {
                TRANSPOSED_MATRIX[cellIndex] = [];
            }
            TRANSPOSED_MATRIX[cellIndex].push(cellValue);
        });
    });

    return TRANSPOSED_MATRIX;
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
    if (typeof n !== 'number') {
        throw new TypeError(n + ' is not a number');
    }
    if (typeof targetNs !== 'number') {
        throw new TypeError(targetNs + ' is not a number');
    }
    const RADIX_MIN = 2;
    const RADIX_MAX = 36;
    if (!isIntegerNumber(targetNs) || targetNs < RADIX_MIN || targetNs > RADIX_MAX) {
        throw new RangeError(targetNs + ' is out of range [' + RADIX_MIN + ', ' + RADIX_MAX + ']');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('phone number is not a string');
    }
    const PHONE_PATTERN = /^8-800-\d{3}(-\d{2}){2}$/;

    return PHONE_PATTERN.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError(text + ' is not a string');
    }
    const EMOJI_PATTERN = /\(-:|:-\)/g;
    const EMOJI_MATCHES = text.match(EMOJI_PATTERN);
    if (!EMOJI_MATCHES) {
        return 0;
    }
    const MERGED_EMOJI_PATTERN = /\(-:-\)/g;
    const MERGED_EMOJI_MATCHES = text.match(MERGED_EMOJI_PATTERN);

    return EMOJI_MATCHES.length - (MERGED_EMOJI_MATCHES ? MERGED_EMOJI_MATCHES.length : 0);
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const WIN_COMBINATIONS = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    const FIELD_SIZE = 3;

    /**
     * Возвращает индекс строки по номеру ячейки игрового поля
     * @param {Number} cellIndex номер ячейки игрового поля от 1 до 9
     * @returns {Number}
     */
    function fieldRowIndex(cellIndex) {
        return Math.floor(cellIndex / FIELD_SIZE);
    }

    /**
     * Возвращает индекс столбца по номеру ячейки игрового поля
     * @param {Number} cellIndex номер ячейки игрового поля от 1 до 9
     * @returns {Number}
     */
    function fieldColumnIndex(cellIndex) {
        return cellIndex % FIELD_SIZE;
    }

    const WINNER_COMBINATIONS = WIN_COMBINATIONS.filter(function (values) {
        // индексы входных данных начинаются с 1, в массивах с 0, вычитаем 1
        values.forEach(function (value, i, arr) {
            arr[i]--;
        });
        let isWinCombination = true;
        // значение ячейки игрового поля, номер которой указан первым в values
        // с ним сравниваются значения из других ячеек (i > 0)
        let previous = field[fieldRowIndex(values[0])][fieldColumnIndex(values[0])];
        let current;
        for (let i = 1; i < field.length; i++) {
            current = field[fieldRowIndex(values[i])][fieldColumnIndex(values[i])];
            isWinCombination = isWinCombination && (current === previous);
        }

        return isWinCombination;
    });
    let winner = 'draw';
    if (WINNER_COMBINATIONS.length) {
        const WINNER_VALUE_INDEX = WINNER_COMBINATIONS[0][0];
        winner = field[fieldRowIndex(WINNER_VALUE_INDEX)][fieldColumnIndex(WINNER_VALUE_INDEX)];
    }

    return winner;
}

/**
 * Проверяет, является ли переданное значение целым числом
 * @param {Number} num значение
 * @returns {Boolean}
 */
function isIntegerNumber(num) {
    if (typeof num !== 'number') {
        return false;
    }

    return Number.isInteger(num);
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
    ticTacToeProblem,
    isIntegerNumber
};
