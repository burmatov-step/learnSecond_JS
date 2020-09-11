// объявление функции, кототрая фильтрует values и возвращает только те, которые по типу данных совпадают с type
const filterByType = (type, ...values) =>
    values.filter((value) => typeof value === type),
  // объявление функции hideAllResponseBlocks
  hideAllResponseBlocks = () => {
    // задается переменная, которая переводит в массив дивы с классом dialog__response-block
    const responseBlocksArray = Array.from(
      document.querySelectorAll("div.dialog__response-block")
    );
    // перебирается массив и скрываются элементы
    responseBlocksArray.forEach((block) => (block.style.display = "none"));
  },
  // задается функция showResponseBlock
  showResponseBlock = (blockSelector, msgText, spanSelector) => {
    // вызывается hideAllResponseBlocks и скрывает div.dialog__response-block
    hideAllResponseBlocks();
    // показывается на странице найденный элемент
    document.querySelector(blockSelector).style.display = "block";
    // если есть spanSelector, то его содержимое равно msgText
    if (spanSelector) {
      document.querySelector(spanSelector).textContent = msgText;
    }
  },
  // объявление переменной
  showError = (msgText) =>
    // вызов showResponseBlock
    showResponseBlock(".dialog__response-block_error", msgText, "#error"),
  // объявление переменной showResults
  showResults = (msgText) =>
    // вызов showResponseBlock
    showResponseBlock(".dialog__response-block_ok", msgText, "#ok"),
  //  объявление переменной, где dialog__response-block_no-results станет display: block
	showNoResults = () => showResponseBlock(".dialog__response-block_no-results"),
	// объявление переменной для перехвата ошибок
  tryFilterByType = (type, values) => {
//  в try будет выполняться код
    try {
      // задается переменная в которой фильтруется values и при совпадении типа данных и преобразуются в строку с запятой и пробелом
      const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
      // задается переменная, где проверяется если есть длина valuesArray возвращается одна строка, если нет длинны, то другая
      const alertMsg = valuesArray.length
        ? `Данные с типом ${type}: ${valuesArray}`
        : `Отсутствуют данные типа ${type}`;
      //  вызывается showResults с текстом alertMsg
      showResults(alertMsg);
      //  в catch код, который будет срабатывать, еслив try есть ошибки
    } catch (e) {
      // Вызов showError с текстом`Ошибка: ${e}`
      showError(`Ошибка: ${e}`);
    }
  };
//  переменная, где находят #filter-btn
const filterButton = document.querySelector('#filter-btn');
// навешивается событие при клике
filterButton.addEventListener('click', e => {
  // поиск элемента с id type
  const typeInput = document.querySelector("#type");
  // поиск элемента с id data
  const dataInput = document.querySelector("#data");

  if (dataInput.value === "") {
    // если содержимое dataInput пустое то вызываеся сообщение "Поле не должно быть пустым!"
    dataInput.setCustomValidity("Поле не должно быть пустым!");
    // и вызываеся функция showNoResults
    showNoResults();
  } else {
    // если dataInput что то содержит, то сообщение не выводится
    dataInput.setCustomValidity("");
    // отменяет действие, которое должно быть по умолчанию
    e.preventDefault();
    // вызов функции tryFilterByType в которую передаются содержиме инпутов без пробелов вначале и вконце
    tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
  }
});

