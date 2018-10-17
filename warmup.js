'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw (TypeError);
    }
    return a+b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof year !== 'number'){
        throw(TypeError);
    }
    else if(year < 0){
        throw(RangeError);
    }
    return Math.trunc(year / 100) + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {    
    if (typeof hexColor !== 'string'){
        throw (TypeError);
    }
    if (hexColor.length !==7 || hexColor[0] !== '#'){
        throw (RangeError);
    }
    var array = {'0': 0 , '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, 
    '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15}
    let result = [];
    let j =0;
    for(var i = 1; i < 7; i+=2){
        if(array[hexColor[i]] === undefined || array[hexColor[i+1]] === undefined){
            throw(RangeError);
        }
        result[j] = array[hexColor[i]]*16 + array[hexColor[i+1]];
        j++;
    }
    return '(' + result[0] + ', ' + result[1] + ', ' + result[2] + ')';
}


/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if(typeof n !== 'number'){
        throw (TypeError);
    }
    if( !Number.isInteger(n) || n < 0)
    {
        throw (RangeError);
    }
    let fibbonachi = [0, 0, 1];
    if(fibbonachi[n-1] != undefined)
    {
        return fibbonachi[n];
    }
    let i = 2;
    while(i < n - 1){
        fibbonachi[3]=fibbonachi[1]+fibbonachi[2];
        fibbonachi.shift();
        //Решил сэкономить место
        i++;
    }
    return fibbonachi[3];

}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if(!Array.isArray(matrix)){
        throw(TypeError);
    }
    
    var newArray = [];
    for(let i = 0; i < matrix[0].length; i++){
        if(!Array.isArray(matrix[i]))
        {
            throw (TypeError);
        }

        newArray[i] = [];

        for(let j = 0; j < matrix.length; j++){
            newArray[j][i] = matrix[i][j];
        }
        return newArray;
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
    if (typeof n !== 'number' || typeof targetNs !== 'number')
    {
        throw (TypeError);
    }
    if (targetNs < 2 || targetNs > 36){
        throw(RangeError);
    }
    var array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let divisionRemain = 0;
    let result = '';
    while(n > targetNs)
    {
        divisionRemain = n / targetNs;
        if(x/y>=0)
            n = Math.floor(n/targetNs);
        else
            n = Math.ceil(n/targetNs);
        //может отрицательные будут, можно оптимизироовать
        result += array[divisionRemain];
    }
    result += array[n];
    return result.split("").reverse().join(""); 
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    phoneNumber.split("-");
    if(phoneNumber.length!==5)
        return false;
    if(Number.parseInt(phoneNumber[0])!==8)
        return false;
    if(Number.parseInt(phoneNumber[1])!==800)
        return false;    
    if(isNaN(phoneNumber[2]))
        return false;
    if(isNaN(phoneNumber[3]))
        return false;
    if(isNaN(phoneNumber[4]))
        return false;
    return true;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if(typeof text !== "string")
    {
        throw(TypeError);
    }
    let curretSymbol = 0;
    let smileCount = 0;
    // Далее переход по функциям будет эквивалентен переходам по остояниям автомата:
    //  | : | - | ) | ( |
    // 1| 2 | 1 | 1 | 5 | 
    // 2| 2 | 3 | 1 | 5 |
    // 3| 2 | 1 | 4 | 5 |
    // 4| тут эпсилон переходы в 1 состояние и +1 смайлам 
    // 5| 2 | 6 | 1 | 5 |
    // 6| 2 | 1 | 4 | 5 | 
    // может быть потом сделаю проще
    first();
    function first(){
        while(curretSymbol<text.length){
            switch(text[curretSymbol]){
            case ":": curretSymbol++;
            second();
            break;
            case "(": curretSymbol++;
            fifth();
            break;
            default: curretSymbol++;
            break; 
            }
        }
    }
    function second(){
        switch(text[curretSymbol]){
            case":": curretSymbol++;
            second();
            break;
            case"-": curretSymbol++;
            third();
            break;
            case"(": curretSymbol++
            fifth();
            break;
            default: curretSymbol++;
            break;
        }
    }
    function third(){
        switch(text[curretSymbol]){
            case":": curretSymbol++;
            second();
            break;
            case")": curretSymbol++;
            fourth();
            break;
            case"(": curretSymbol++;
            fifth();
            break;
            default: curretSymbol++
            break;
        }
    }
    function fourth(){
        smileCount++;
        return;
    }
    function fifth(){
        switch(text[curretSymbol]){
            case":": curretSymbol++;
            second();
            break;
            case"-": curretSymbol++;
            sixth();
            break;
            case"(": curretSymbol++;
            fifth();
            break;
            default: curretSymbol++;
            break;
        }
    }
    function sixth(){
        switch(text[curretSymbol]){
            case":": curretSymbol++;
            second()
            break;
            case")": curretSymbol++;
            fourth();
            break;
            case"(": curretSymbol++;
            fifth();
            break;
            default: curretSymbol++
            break;

        }
    }   
    // теоретически может произойти утечка памяти
    // от 4 состояния сожно избавиться
    // можно сделать путые переходы в 1 состояние, не увеличивая currentSymbol,
    // чтобы убать вероятность утечки памяти
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (var i = 0; i < 3; i++){
        if (field[i][0] === field[i][1] === field[i][2])
            if (field[i][0]==='o')
                return 'o';
            else return 'x';  
        if (field[0][i] === field[1][i] === field[2][i])
            if (field[i][0]==='o')
                return 'o';
            else return 'x';  
    }
    if (field[0][0]===field[1][1]===field[2][2])
        if (field[0][0]==='o')
            return 'o';
        else return 'x';  
    if (field[2][0]===field[1][1]===field[0][2])
        if (field[2][0]==='o')
            return 'o';
        else return 'x';
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
