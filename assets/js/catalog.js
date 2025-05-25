// =======================
// ФУНКЦИЯ: Отрисовка карточек товаров на главной или в каталоге
// =======================
function renderProductCards(containerId, items) {
    // Получаем HTML-элемент-контейнер по ID
    let container = document.getElementById(containerId);

    // Проверяем, что контейнер существует и передан массив товаров
    if (container && Array.isArray(items)) {
        // Для каждого товара создаём HTML и вставляем в контейнер
        items.forEach((item) => {
            let code = `
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="description">${item.description}</p>
                    <p class="price"><i>${item.price} ${item.currency}</i></p>
                    <a href="product/single.html" onclick="saveProductId(${item.id})">Подробнее</a>
                </div>`;
            container.insertAdjacentHTML("beforeend", code);
        });
    }
}

// =======================
// ОТРИСОВКА КАРТОЧЕК: для всех категорий товаров
// =======================
renderProductCards("products", products);     // Общие товары
renderProductCards("clothes", clothes);       // Одежда
renderProductCards("appliances", appliances); // Бытовая техника

// =======================
// ОБРАБОТКА КОРЗИНЫ
// =======================

// Загружаем массив с товарами из корзины из localStorage или создаём пустой массив
let cart = JSON.parse(window.localStorage.getItem("cart")) || [];

// Получаем контейнер, в который будем выводить содержимое корзины
let container = document.getElementById("cart-container");

// Счётчик общего количества товаров в корзине
let totalCart = 0;

// Объединяем все товары в один массив, чтобы искать по id
const allProducts = [...products, ...clothes, ...appliances];

// Проверяем, есть ли товары в корзине
if (cart.length === 0) {
    // Если корзина пустая — показываем сообщение
    container.innerHTML = "<p>Ваша корзина пуста.</p>";
} else {
    // Если в корзине есть товары — отображаем каждый
    cart.forEach((item) => {
        // Находим товар по его ID в общем массиве всех товаров
        let product = allProducts.find((p) => p.id === item.id);

        // Если товар найден
        if (product) {
            // Текст с ценой: если количество больше 1, показываем сумму
            let priceText;
            if (item.count > 1) {
                priceText = "Итого: " + (Number(product.price) * item.count) + " " + product.currency;
            } else {
                priceText = "Цена: " + Number(product.price) + " " + product.currency;
            }

            // Вставляем HTML карточки товара в корзине
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" width="100">
                    <div>
                        <h4>${product.name}</h4>
                        <p>Количество: ${item.count}</p>
                        <p><strong>${priceText}</strong></p>
                        <button onclick="orderProduct(${product.id})">Заказать</button>
                    </div>
                </div>
                `
            );

            // Увеличиваем общий счётчик товаров
            totalCart += item.count;
        }
    });
}

// =======================
// ОБНОВЛЯЕМ СЧЁТЧИК В ШАПКЕ (например: "В корзине: 3")
// =======================
document.getElementById("total-cart").innerText = totalCart;

// =======================
// ФУНКЦИЯ: Сохраняем ID товара в localStorage при переходе на single.html
// =======================
function saveProductId(productId) {
    window.localStorage.setItem("productId", productId);
}

// =======================
// ФУНКЦИЯ: Обработка кнопки "Заказать"
// =======================
function orderProduct(productId) {
    alert("Вы заказали товар с ID: " + productId);
    // Здесь можно добавить логику: отправку данных на сервер или переход к оплате
    // Пример:
    // window.location.href = "checkout.html?productId=" + productId;
}
