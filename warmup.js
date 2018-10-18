'use strict';

function checkThat(object) {
    function checker(predicate) {
        if (!predicate(object)) {
            throw new TypeError();
        }
    }

    return {
        hasType: representativeSupplier =>
            checker(something => typeof something === typeof representativeSupplier()),

        satisfies: checker
    };
}

function realNumber() {
    return 0;
}

function range(end) {
    return Array.from(Array(end)
        .keys());
}

function symbolRange(from, length) {
    return range(length)
        .map(number => from.charCodeAt(0) + number)
        .map(characterCode => String.fromCharCode(characterCode));
}

function isNumber(number) {
    return !isNaN(number) && number < Infinity;
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    checkThat(a)
        .hasType(realNumber);
    checkThat(a)
        .satisfies(isNumber);
    checkThat(b)
        .hasType(realNumber);
    checkThat(b)
        .satisfies(isNumber);

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
    checkThat(year)
        .hasType(realNumber);
    checkThat(year)
        .satisfies(isNumber);
    if (year < 0) {
        throw new RangeError();
    }

    return 1 + Math.floor(year / 100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    checkThat(hexColor)
        .hasType(String);
    const firstSymbol = '#';
    const colorLength = firstSymbol.length + 6;
    if (hexColor.charAt(0) !== firstSymbol || hexColor.length !== colorLength) {
        throw new RangeError();
    }

    const tokensIndexes = [1, 3, 5];
    const answer = tokensIndexes.map(index => hexColor.substr(index, 2))
        .map(hex => parseInt(hex, 16))
        .map(String)
        .join(', ');

    return `(${answer})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    checkThat(n)
        .hasType(realNumber);
    checkThat(n)
        .satisfies(isNumber);
    if (n < 1 || Math.trunc(n) !== n) {
        throw new RangeError();
    }

    const fibonacciIndex = n - 1;
    const base = [1, 1];

    function fibonacciRecurrence(unused, index, recurrence) {
        if (index < base.length) {
            return base[index];
        }

        return recurrence[index - 1] + recurrence[index - 2];
    }

    return base
        .concat(Array(Math.max(0, fibonacciIndex - 2)))
        .map(fibonacciRecurrence)
        .pop();
}

// noinspection JSValidateJSDoc
/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    checkThat(matrix)
        .satisfies(Array.isArray);

    const answer = [];

    function writeRowToColumn(rowNumber) {
        const row = matrix[rowNumber];
        checkThat(row)
            .satisfies(Array.isArray);
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
    checkThat(n)
        .hasType(realNumber);
    checkThat(n)
        .satisfies(isNumber);
    checkThat(targetNs)
        .hasType(realNumber);
    checkThat(targetNs)
        .satisfies(isNumber);

    if (targetNs < 2 || targetNs > 36) {
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
    checkThat(phoneNumber)
        .hasType(String);
    const eightIndexes = [0, 2];
    const zeroIndexes = [3, 4];
    const dashIndexes = [1, 5, 9, 12];
    const anyDigitIndexes = [6, 7, 8, 10, 11, 13, 14];
    const expectedLength = 15;

    const equals = object => other => other === object;

    const associativity = [
        [eightIndexes, equals('8')],
        [zeroIndexes, equals('0')],
        [dashIndexes, equals('-')],
        [anyDigitIndexes, symbol => symbolRange('0', 10)
            .includes(symbol)]
    ];

    return phoneNumber.length === expectedLength &&
        associativity.every(pair => pair[0].map(i => phoneNumber.charAt(i))
            .every(pair[1]));

}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    checkThat(text)
        .hasType(String);

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
