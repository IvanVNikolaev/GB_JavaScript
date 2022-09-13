var x = prompt("Введите число x");
var y = prompt("Введите число y");

function sum(a, b) {
    return a + b;
}

sm = sum(+x, +y);
alert("Сумма x и y = " + sm);

function sbt(a, b) {
    return a - b;
}

st = sbt(x, y);
alert("Разность x и y = " + st);

function mlt(a, b) {
    return a * b;
}

mt = mlt(x, y);
alert("Произведение x и y = " + mt);

function dvs(a, b) {
    return a / b;
}

ds = dvs(x, y);
alert("Деление x на y = " + ds);