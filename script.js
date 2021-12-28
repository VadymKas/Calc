let   num1 = document.querySelector('#num1'),
      num2 = document.querySelector('#num2'),
      op = document.querySelector('[name=operator]'),
      submit = document.querySelector('button'),
      result = document.querySelector('[type=text]');

      

const Operators = {
      '+': function (a, b) { return a + b },
      '-': function (a, b) { return a - b },
      '*': function (a, b) { return a * b },
      '/': function (a, b) { return a / b },
      'calc': function (a, b, op) { return this[op](a, b) }
}

submit.addEventListener('click', () => {
       result.value = Operators.calc(+num1.value, +num2.value, op.value);
});