/*
1) Математические расчеты и функции
Создайте две функции, add и multiply; пусть каждая принимает
по два аргумента. Функция add должна складывать аргументы
и возвращать результат, а функция multiply — перемножать
аргументы.
С помощью только этих двух функций вычислите следующее
несложное выражение: 36325 * 9824 + 777
*/

// function add(x, y) {
//     return x + y;
//   }
  
//   function multiply(x, y) {
//     return x * y;
//   }
  
//   var result = add(multiply(36325, 9824), 777);
//   console.log(result);
  


/*
 2) Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
*/

// let num = prompt("Write num:")

// function square() {
//     return num * num
// }

// console.log(square())



/*
 3) Сделайте функцию, которая возвращает сумму двух чисел.
*/

// function addNumbers(num1, num2) {
//     return num1 + num2;
//   }
  
//   let result = addNumbers(5, 3);
//   console.log(result); 
  


/*
  4) Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
*/

// function subtractAndDivide(num1, num2, num3) {
//     var result = (num1 - num2) / num3;
//     return result;
//   }
  
//   let result = subtractAndDivide(10, 5, 2);
//   console.log(result);
  



/*
  5) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
*/

// function WeekDay(day) {
//     switch(day) {
//         case 1: 
//             return "Понедельник"
//         case 2:
//             return "Вторник"
//         case 3:
//             return "Среда"
//         case 4:
//             return "Четверг"
//         case 5:
//             return "Пятница"
//         case 6:
//             return "Суббота"
//         case 7:
//             return "Воскресенье"
//         default:
//             return "Ошибка"
//     }
// }

// let dayNumber = +prompt("Write num")
// let dayName = WeekDay(dayNumber)

// console.log(dayName)