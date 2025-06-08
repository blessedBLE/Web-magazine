// =======================
// СОЕДИНЯЕМ ВСЕ ТОВАРЫ ИЗ ТРЁХ МАССИВОВ В ОДИН
// =======================
const allProducts = [...products, ...clothes, ...appliances];

// =======================
// ПОЛУЧАЕМ ID ТОВАРА ИЗ localStorage
// =======================
let productId = window.localStorage.getItem("productId");

// =======================
// ИЩЕМ ТОВАР С НУЖНЫМ ID
// =======================
let single = allProducts.find((product) => product.id == productId);

if (single) {
  let singleContainer = document.getElementById("single");

  let code = `
    <div class="product-card">
        <img src="${single.image}" alt="${single.name}">
        <div class="product-info">
            <h2>${single.name}</h2>
            <p>${single.description}</p>
            <div class="price">${single.price} ${single.currency}</div>
            <button data-favor-id="${single.id}" onclick="addToFavor(${single.id})">Добавить в избранное</button>
            <button onclick="addToCart(${single.id})">Добавить в корзину</button>
        </div>
    </div>
  `;

  singleContainer.insertAdjacentHTML("afterbegin", code);

  document.title = single.name;

  // Обновляем состояние кнопки избранного для текущего товара
  updateFavorButton(single.id);
} else {
  document.getElementById("single").innerHTML = "<p>Товар не найден.</p>";
}

// =======================
// ФУНКЦИЯ: Добавить товар в корзину
// =======================
function addToCart(productId) {
  let cart = window.localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];

  let index = cart.findIndex((item) => item.id == productId);

  if (index >= 0) {
    cart[index].count++;
  } else {
    cart.push({ id: productId, count: 1 });
  }

  window.localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
}

// =======================
// ФУНКЦИЯ: Добавить товар в избранное
// =======================
function addToFavor(productId) {
  let favorites = window.localStorage.getItem("favorites");
  favorites = favorites ? JSON.parse(favorites) : [];

  if (!favorites.includes(productId)) {
    favorites.push(productId);
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavorCounter();
    updateFavorButton(productId);
    alert("Товар добавлен в избранное!");
  } else {
    alert("Товар уже в избранном");
  }
}

// =======================
// ФУНКЦИЯ: Обновление счётчика товаров в корзине
// =======================
function updateCartCounter() {
  let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.count, 0);
  let counter = document.getElementById("total-cart");
  if (counter) {
    counter.innerText = total;
  }
}

// =======================
// ФУНКЦИЯ: Обновление счётчика избранного
// =======================
function updateFavorCounter() {
  let favorites = JSON.parse(window.localStorage.getItem("favorites")) || [];
  let counter = document.getElementById("total-favor");
  if (counter) {
    counter.innerText = favorites.length;
  }
}

// =======================
// ФУНКЦИЯ: Обновление кнопки "Добавить в избранное" для текущего товара
// =======================
function updateFavorButton(productId) {
  let favorites = JSON.parse(window.localStorage.getItem("favorites")) || [];
  let button = document.querySelector(`button[data-favor-id="${productId}"]`);
  if (button) {
    if (favorites.includes(productId)) {
      button.innerText = "В избранном";
      button.disabled = true;
    } else {
      button.innerText = "Добавить в избранное";
      button.disabled = false;
    }
  }
}

// =======================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// =======================
document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();
  updateFavorCounter();
  if (single) {
    updateFavorButton(single.id);
  }
});
