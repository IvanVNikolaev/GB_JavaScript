var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - инкремент префиксная форма увеличивает a на 1 и возвращает новое значение 2
d = b++; alert(d);           // 1 - инкремент постфиксная форма увеличивает b на 1 но возвращает старое значение 1
c = (2 + ++a); alert(c);      // 5 - 2 + возвращенное значение a (2) увеличенное на 1 = 5
d = (2 + b++); alert(d);      // 4 - 2 + первоначальное занчение b (1) увеличенное на 1 = 4
alert(a);                    // 3 - последнне значение а = 3
alert(b);                    // 3 - тут я не понимаю почему 3 (((