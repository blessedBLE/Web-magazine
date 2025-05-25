function updateCartCounter() {
  let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  let cartTotal = 0;
  cart.forEach((product) => (cartTotal += product.count));
  document.getElementById("total-cart").innerText = cartTotal;
}

// Вызов при загрузке страницы
updateCartCounter();

// При изменении корзины тоже вызывай updateCartCounter();
