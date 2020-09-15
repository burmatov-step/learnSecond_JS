const sel = document.querySelectorAll("select"),
    input = document.querySelectorAll("input"),
    label = document.querySelectorAll("label"),
    button = document.querySelector("button");

const nameForm1 = () => {
    for (let i = 0; i < 2; i++)
        if (sel[i].value === "usd") {
            input[i].placeholder = "USD";
            label[i].textContent = "Доллар США(USD)";
        } else if (sel[i].value === "eur") {
            input[i].placeholder = "EUR";
            label[i].textContent = "Евро (EUR)";
        } else {
            input[i].placeholder = "RUB";
            label[i].textContent = "Российский рубль (RUB)";
        }
};

const calc = (first, second, eur) => {
    if (first === second) {
        input[1].value = input[0].value;
    } else if (second === "usd" && first === "eur") {
        input[1].value = +input[0].value * +eur.USD;
    } else if (second === "usd" && first === "rub") {
        input[1].value = (+input[0].value / +eur.RUB) * eur.USD;
    } else if (second === "eur" && first === "usd") {
        input[1].value = +input[0].value / +eur.USD;
    } else if (second === "eur" && first === "rub") {
        input[1].value = +input[0].value / +eur.RUB;
    } else if (second === "rub" && first === "eur") {
        input[1].value = +input[0].value * +eur.RUB;
    } else if (second === "rub" && first === "usd") {
        input[1].value = (+input[0].value / +eur.USD) * eur.RUB;
    }
};


sel.forEach(item => {
    item.addEventListener("change", nameForm1);
});

const postData = () =>
    fetch("https://api.exchangeratesapi.io/latest", {
        method: "GET",
    });

input[0].addEventListener('input', e => {
    console.log(e.target.value);
    e.target.value = e.target.value.match(/[0-9]*/);
});

button.addEventListener('click', e => {
    e.preventDefault();
    const first = sel[0].value;
    const second = sel[1].value;

    postData()
        .then(response => response.json())
        .then(data => {
            calc(first, second, data.rates);
            console.log(data.rates);
        })
        .catch(error => {
            console.log(error);
        });

});


