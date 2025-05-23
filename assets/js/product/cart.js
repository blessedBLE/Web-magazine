let cart = window.localStorage.getItem("cart");

let cartTotal = 0;

if(cart) {
    cart = JSON.parse(cart);

    cart.forEach((product) => {cartTotal += product.count;});
}

document.getElementById("total-cart").innerText = cartTotal;