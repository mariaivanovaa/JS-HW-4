document.getElementById("checkBtn").addEventListener("click", function () {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    if (input1 && input2) {
        console.log("Обидва поля заповнені");
    }
    else {
        console.log("Не всі поля заповнені");
    }
});

document.getElementById("checkSum").addEventListener("click", function () {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    let sum = number1 + number2;

    if (sum > 10) {
        console.log("Сума більша за 10");
    }
    else {
        console.log("Сума менша або дорівнює 10")
    }
});

document.getElementById("checkButton").addEventListener("click", function () {
    let text = document.getElementById("text").value;

    if (text.toLowerCase().includes("javascript")) {
        console.log("Текст містить слово JavaScript");
    } else {
        console.log("Текст не містить слово JavaScript");
    }
});

document.getElementById("numberButton").addEventListener("click", function () {
    let number = parseFloat(document.getElementById("numberInput").value);

    if (number > 10 && number < 20) {
        console.log("Число входить в діапазон від 10 до 20");
    } else {
        console.log("Число не входить в діапазон від 10 до 20");
    }
});

document.getElementById("submitButton").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
        // питання, як перенаправити на іншу сторінку
    } else {
        alert("помилка! перевірте заповнення полів згідно правил");
    }
});