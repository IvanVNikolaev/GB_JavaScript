// var a = -2, b = -5, c;

var a = prompt("Введите число a");
var b = prompt("Введите число b");
var c;

if (a >= 0 && b >= 0) {
    c = a - b;
    alert("Разность чисел a и b = " + c);
} else if (a < 0 && b < 0) {
    c = a * b;
    alert("Произведение чисел a и b = " + c);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    c = +a + +b;
    alert("Сумма чисел a и b = " + c);
}