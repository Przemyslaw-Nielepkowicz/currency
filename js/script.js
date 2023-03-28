const calculateResult = (amount, currency) => {
    const EUR = 4.7245;
    const USD = 4.463;
    const GBP = 5.3663;
    const CNY = 0.6433;
    const JPY = 0.033;

    switch (currency) {
        case "EUR":
            return amount / EUR;

        case "USD":
            return amount / USD;

        case "GBP":
            return amount / GBP;

        case "CNY":
            return amount / CNY;

        case "JPY":
            return amount / JPY;
    }
};

const updateResultText = (result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;

    const resetElement = document.querySelector(".js-reset");

    resetElement.addEventListener("click", () => {
        resultElement.innerText = "N/A";
    });
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-select");
    const amountElement = document.querySelector(".js-amount");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(result, currency);
}

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

    formElement.addEventListener("reset", () => {
        console.log("Formularz zostal zresetowany");
    });
};

init();