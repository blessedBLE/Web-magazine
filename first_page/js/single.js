// Получаем ID товара из локального хранилища
let productId = window.localStorage.getItem("productId");
// Выводим ID в консоль для отладки
console.log(productId);

// Ищем товар в массиве products по ID
let single = products.find(function(product){
    // Строгое сравнение для точности
    return product.id == productId; 
});

// Если товар найден
if(single) {
   
    // Создаем HTML-код для карточки товара
    let code = `<div class="product-card">
                    <img src="${single.images}" alt="${single.name}">
                    <div class="product-info">
                        <h2>${single.name}</h2>
                        <p>${single.description}</p>
                        <div class="price">${single.price} ${single.currency}</div>
                        <button  class="but" onclick="addToCart(${single.id})">В корзину</button>
                    </div>

                    

                </div>`;

    // Вставляем код карточки товара в начало body
    document.body.insertAdjacentHTML('afterbegin', code); 

    // Меняем заголовок страницы на название товара
    document.title = single.name;  
}

// Функция добавления товара в корзину
function addToCart(productId)
{
    // Получаем данные корзины из локального хранилища
    let cart = window.localStorage.getItem("cart");

    // Если корзина не пуста
    if(cart) {
        // Преобразуем данные корзины из строки в объект
        cart = JSON.parse(cart);

        // Ищем товар в корзине по ID
        let index = cart.findIndex((item) => {return item.id == productId});

        // Если товар уже есть в корзине
        if(index >= 0) {
            // Увеличиваем количество товара в корзине
            cart[0].count++;
        } else {
            // Создаем объект товара для добавления в корзину
            let product = {
                'id': productId,
                'count': 1
            }

            // Добавляем товар в корзину
            cart.push(product);
        }

    } else {
        // Если корзина пуста, создаем новый массив для корзины
        cart = [];

        // Создаем объект товара для добавления в корзину
        let product = {
            'id': productId,
            'count': 1
        }

        // Добавляем товар в корзину
        cart.push(product);
    }

    // Сохраняем данные корзины в локальное хранилище
    window.localStorage.setItem('cart', JSON.stringify(cart));
}

function view(viewCart){
    let check = window.localStorage.getItem(cart)
    if view{

    }
}