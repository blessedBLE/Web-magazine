// =======================
// СОЕДИНЯЕМ ВСЕ ТОВАРЫ ИЗ ТРЁХ МАССИВОВ В ОДИН
// =======================
// Важно: переменные products, clothes, appliances должны быть загружены ранее
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
  // Если товар найден — находим контейнер и вставляем HTML с данными
  let singleContainer = document.getElementById("single");

  let code = `
    <div class="product-card">
        <img src="${single.image}" alt="${single.name}">
        <div class="product-info">
            <h2>${single.name}</h2>
            <p>${single.description}</p>
            <div class="price">${single.price} ${single.currency}</div>
            <button onclick="addToCart(${single.id})">Добавить в корзину</button>
        </div>
    </div>
  `;

  // Вставляем карточку товара
  singleContainer.insertAdjacentHTML("afterbegin", code);

  // Меняем заголовок вкладки браузера на имя товара
  document.title = single.name;
} else {
  // Если товар не найден — показываем сообщение
  document.getElementById("single").innerHTML = "<p>Товар не найден.</p>";
}

// =======================
// ФУНКЦИЯ: Добавить товар в корзину
// =======================
function addToCart(productId) {
  // Загружаем текущую корзину из localStorage
  let cart = window.localStorage.getItem("cart");

  // Преобразуем JSON в объект или создаём новый массив, если корзина пуста
  cart = cart ? JSON.parse(cart) : [];

  // Ищем товар в корзине
  let index = cart.findIndex((item) => item.id == productId);

  if (index >= 0) {
    // Если товар уже есть в корзине — увеличиваем количество
    cart[index].count++;
  } else {
    // Если товара ещё нет — добавляем новый объект
    cart.push({ id: productId, count: 1 });
  }

  // Сохраняем обновлённую корзину обратно в localStorage
  window.localStorage.setItem("cart", JSON.stringify(cart));

  // (Необязательно) Обновим визуально счётчик в шапке, если он есть
  updateCartCounter();
}

// =======================
// ФУНКЦИЯ: Обновление счётчика товаров в шапке сайта
// =======================
function updateCartCounter() {
  let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.count, 0);
  let counter = document.getElementById("total-cart");
  if (counter) {
    counter.innerText = total;
  }
}
