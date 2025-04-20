let cart = window.localStorage.getItem("cart");

let cartTotal = 0;

if (cart) {
  cart = JSON.parse(cart);

  // Подсчитываем общее количество товаров в корзине
  cartTotal = cart.reduce((total, product) => total + product.count, 0); 

  let cartBlock = document.getElementById("product-cart");

  cart.forEach((item) => {
    let productId = item.id;

    let single = products.find(function(product){
        return product.id == productId; 
    });

    let code = `<div class="product">
        <img src="${single.images}" alt="${single.name}">
        <h3>${single.name}</h3>
        <p class="description">${single.description}</p>
        <p class="price"><i>${single.price} ${single.currency}</i></p>
        <span>Количество: ${item.count}</span>
    </div>`;

    cartBlock.insertAdjacentHTML('beforeend', code);
  });
}

// Обновляем текст элемента с id "total-cart" 
document.getElementById("total-cart").innerText = cartTotal;
