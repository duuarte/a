document.addEventListener("DOMContentLoaded", function () {
    const paymentButtons = document.querySelectorAll('button[name="paymentMethod"]');
    const paymentForms = document.querySelectorAll(".payment-form");
    const cardImage = document.querySelector(".card");
    const pixImage = document.querySelector(".pixImg");

    const form = document.querySelector("#credit-card");

    const cardNumber = document.querySelector("#cardNumber");
    const cardHolder = document.querySelector("#name-text");
    const cardExpiration = document.querySelector("#cardExpiretion");
    const cardCVV = document.querySelector("#cvv-text");

    const cardNumberText = document.querySelector(".number-vl");
    const cardHolderText = document.querySelector(".name-vl");
    const cardExpirationText = document.querySelector(".expiration-vl");
    const cardCVVText = document.querySelector(".cvv-vl");

    paymentButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove a classe ativa de todos os botões
            paymentButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Adiciona a classe ativa apenas ao botão clicado
            button.classList.add("active");
            //oculta as imagens e os formlários de pagamento
            cardImage.style.display = "none";
            pixImage.style.display = "none";
            paymentForms.forEach(function (form) {
                form.style.display = "none";
            });

            // Verifica qual botão foi clicado
            const selectedPaymentMethod = button.getAttribute("value");
            if (selectedPaymentMethod === "creditcard" || selectedPaymentMethod === "debitcard") {
                // Mostra a div com a class "card" para cartão de crédito e débito
                cardImage.style.display = "block";
            } else if (selectedPaymentMethod === "pix") {
                // Mostra a imagem com a class "pixImg" para PIX
                pixImage.style.display = "block";
            }
             // Mostra o formulário de pagamento correspondente
            const selectedPaymentForm = document.getElementById(`${selectedPaymentMethod}Form`);
            if (selectedPaymentForm) {
                selectedPaymentForm.style.display = "block";
            }
        });
    });
    //faz alguma coisa ao clicar no botão finalizar
    const checkoutButton = document.getElementById("checkoutButton");
    checkoutButton.addEventListener("click", function () {
        const selectedPaymentMethod = document.querySelector('button.btn.active').getAttribute("value");

        alert(`Pagamento com ${selectedPaymentMethod.toUpperCase()} realizado com sucesso!`);
    });

    cardNumber.addEventListener("keyup", (e) => {
        if (!e.target.value) {
            cardNumberText.innerText = "1234 5678 9101 1121";
        } else {
            const valuesOfInput = e.target.value.replaceAll(" ", "");

            if (e.target.value.length > 14) {
                e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
                cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            } else if (e.target.value.length > 9) {
                e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
                cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            } else if (e.target.value.length > 4) {
                e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
                cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            } else {
                cardNumberText.innerHTML = valuesOfInput
            }
        }
    })

    cardHolder.addEventListener("keyup", (e) => {
        if (!e.target.value) {
            cardHolderText.innerHTML = "Seu Nome";
        } else {
            cardHolderText.innerHTML = e.target.value.toUpperCase();
        }
    })

    cardExpiration.addEventListener("keyup", (e) => {
        if (!e.target.value) {
            cardExpirationText.innerHTML = "00/00";
        } else {
            const valuesOfInput = e.target.value.replace("/", "");

            if (e.target.value.length > 2) {
                e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
                cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            } else {
                cardExpirationText.innerHTML = valuesOfInput;
            }
        }
    })

    cardCVV.addEventListener("keyup", (e) => {
        if (!e.target.value) {
            cardCVVText.innerHTML = "123";
        } else {
            cardCVVText.innerHTML = e.target.value;
        }
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Credit Card Added!");
    })
});
