let currencyElement = document.querySelector(".js-select");
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let sumElement = document.querySelector(".js-sum");
let resetElement = document.querySelector(".js-reset")

let EUR = 4.7245;
let USD = 4.463;
let GBP = 5.3663;
let CNY = 0.6433;
let JPY = 0.033;

formElement.addEventListener("reset", () => {
    console.log("Formularz zostal zresetowany");
});

resetElement.addEventListener("click", () => {
    sumElement.innerText = "N/A";                        
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;
    let sum;

    switch (currency) {
        case "EUR": 
            sum = amount / EUR;
            break;

        case "USD": 
            sum = amount / USD;
            break;   

        case "GBP": 
            sum = amount / GBP;
            break; 

        case "CNY": 
            sum = amount / CNY;
            break;

        case "JPY": 
            sum = amount / JPY;
            break;
    }

    sumElement.innerHTML = `${sum.toFixed(2)} ${currency}`;
});