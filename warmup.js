'use strict';

function checkThat(object, predicate, ErrorTypeToThrow = TypeError) {
    if (object === undefined || object === null || !predicate(object)) {
        throw new ErrorTypeToThrow();
    }
}

function isNumber(object) {
    return typeof object === typeof 0 &&
        !Number.isNaN(object) &&
        Number.isFinite(object);
}

function isInteger(number) {
    return isNumber(number) && Number.isSafeInteger(number);
}

function isString(object) {
    return object.toString() === object;
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    checkThat(a, isInteger);
    checkThat(b, isInteger);

    return b + a;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    checkThat(year, isInteger);
    checkThat(year, y => y > 0, RangeError);

    return (year % 100 === 0 ? 0 : 1) + Math.floor(year / 100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    checkThat(hexColor, isString);
    const wrap = string => `(${string})`;

    if (/^#[\da-fA-F]{6}$/.test(hexColor)) {
        return wrap([1, 3, 5]
            .map(index => hexColor.substr(index, 2))
            .map(slice => parseInt(slice, 16))
            .join(', '));
    }
    if (/^#[\da-fA-F]{3}$/.test(hexColor)) {
        return wrap([1, 2, 3]
            .map(index => hexColor.substr(index, 1))
            .map(slice => slice.repeat(2))
            .map(slice => parseInt(slice, 16))
            .join(', '));
    }
    throw new RangeError();
}


/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    checkThat(n, isNumber);
    checkThat(n, isInteger, RangeError);
    checkThat(n, number => number >= 1, RangeError);

    const position = n - 1;
    const array = [1, 1];
    const fibonacciRecurrence = number => array[number - 1] + array[number - 2];

    while (array.length <= position) {
        array.push(fibonacciRecurrence(array.length));
    }

    return array.pop();
}

// noinspection JSValidateJSDoc
/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    checkThat(matrix, Array.isArray);
    checkThat(matrix, array => array.length > 0);
    const answer = [];

    function writeRowToColumn(rowNumber) {
        const row = matrix[rowNumber];
        checkThat(row, Array.isArray);
        checkThat(row, array => array.length > 0);
        if (rowNumber > 0) {
            checkThat(row, array => array.length === matrix[rowNumber - 1].length);
        }

        for (let columnNumber = 0; columnNumber < row.length; columnNumber++) {
            if (rowNumber === 0) {
                answer[columnNumber] = [];
            }
            answer[columnNumber][rowNumber] = row[columnNumber];
        }
    }

    for (let rowNumber = 0; rowNumber < matrix.length; rowNumber++) {
        writeRowToColumn(rowNumber);
    }

    return answer;
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
    checkThat(n, isNumber);
    checkThat(targetNs, isInteger);
    checkThat(targetNs, ns => ns >= 2 && ns <= 36, RangeError);

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    checkThat(phoneNumber, isString);

    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    checkThat(text, isString);

    const smile = '(-:';
    const reversedSmile = ':-)';

    function searchFor(line) {
        let index = 0;
        let count = 0;

        do {
            index = text.indexOf(line, index);
            count += index !== -1 ? 1 : 0;
            index++;
        } while (index > 0);

        return count;
    }

    return searchFor(smile) + searchFor(reversedSmile);
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    function getAssociations() {
        const moveHorizontal = pair => [pair[0] + 1, pair[1]];
        const moveVertical = pair => [pair[0], pair[1] + 1];
        const moveDiagonal = pair => [pair[0] + 1, pair[1] + 1];
        const moveBackDiagonal = pair => [pair[0] - 1, pair[1] + 1];

        const horizontalStarts = [[0, 0], [0, 1], [0, 2]];
        const verticalStarts = [[0, 0], [1, 0], [2, 0]];
        const diagonalStarts = [[0, 0]];
        const backDiagonalStarts = [[2, 0]];

        return [
            [horizontalStarts, moveHorizontal],
            [verticalStarts, moveVertical],
            [diagonalStarts, moveDiagonal],
            [backDiagonalStarts, moveBackDiagonal]
        ];
    }

    const limit = 3;

    function makeRoad(start, incrementerFunction) {
        let current = start;
        const answer = [];

        while (answer.length < limit) {
            answer.push(current);
            current = incrementerFunction(current);
        }

        return answer;
    }

    const getByIndex = (x, y) => field[x][y];

    function uniqueValue(values) {
        if (values.includes('x') && !values.includes('o')) {
            return 'x';
        }
        if (values.includes('o') && !values.includes('x')) {
            return 'o';
        }
    }

    function roadToUniqueValue(road) {
        const values = road.map(coordinate => getByIndex(...coordinate));

        return uniqueValue(values);
    }

    const productStartsToIncrementer = (starts, incrementer) =>
        starts.map(coordinate => [coordinate, incrementer]);

    const winners = getAssociations()
        .map(startsAndIncrementer => productStartsToIncrementer(...startsAndIncrementer))
        .reduce((first, second) => first.concat(second))
        .map(startAndIncrementer => makeRoad(...startAndIncrementer))
        .map(roadToUniqueValue);

    return uniqueValue(winners) || 'draw';
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
