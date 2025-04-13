let cart = window.localStorage.getItem("cart");

let cartTotal = 0;

if (cart) {
  cart = JSON.parse(cart);

  // Подсчитываем общее количество товаров в корзине
  cartTotal = cart.reduce((total, product) => total + product.count, 0); 
}

// Обновляем текст элемента с id "total-cart" 
document.getElementById("total-cart").innerText = cartTotal;
