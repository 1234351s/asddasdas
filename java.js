const randomNumber = Math.floor(Math.random() * 5) + 1;

function handleSearch() {
    const inputValue = document.getElementById("inputField").value;
    const resultMessage = document.querySelector(".resultMessage");

    if (!inputValue) {
        resultMessage.textContent = "Будь ласка, введіть число!";
        resultMessage.style.color = "blue";
    } else if (parseInt(inputValue) === randomNumber) {
        resultMessage.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
        resultMessage.style.color = "rgb(3, 153, 0)";
    } else {
        resultMessage.textContent = "Спробуйте ще!";
        resultMessage.style.color = "red";
    }
}
