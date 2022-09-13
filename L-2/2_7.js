console.log(null == 0); // 1. false - для нестрогого равенства == значения null действует особое правило: null ни к чему не приводятся, null равно друг другу и не равно ничему другому

console.log(null === 0); // 2. false - null и 0 разные типы

console.log(null != 0); // 3. true - null и 0 не равны, см. п. 1

console.log(null !== 0); // 4. true - не равное значение или не равный тип

console.log(null > 0);  // 5. false - null преобразуется в число О, а 0=0

console.log(null >= 0); // 6. true - null преобразуется в число О, а 0=0