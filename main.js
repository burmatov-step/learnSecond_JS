let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function numberPlay() {
  let num = Math.ceil(Math.random() * 100);
  return function number() {
    let ourNumber = prompt("Угадай число от 1 до 100");
    if (ourNumber === null) {
      return;
    } else if (!isNumber(ourNumber)) {
      alert("Введите число");
      number();
    } else if (+ourNumber > num) {
      alert("Загаданное число меньше");
      number();
    } else if (+ourNumber < num) {
      alert("Загаданное число больше");
      number();
    } else if (+ourNumber === num) {
      alert("Вы победили");
      return;
    }
  };
}

let start = numberPlay();
start();

// console.log(prompt('ffff'))
