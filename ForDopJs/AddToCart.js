let count = 0;
let totalPrice = 0;
const pricePerItem = 30; // Цена за один товар

const countElement = document.getElementById("count");
const priceElement = document.getElementById("total-price");
const button = document.getElementById("add-to-cart");

button.addEventListener("click", () => {
    count++;
    totalPrice += pricePerItem;
    countElement.textContent = count;
    priceElement.textContent = `$${totalPrice}`;
});
