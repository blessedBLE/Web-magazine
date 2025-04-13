let productId = window.localStorage.getItem("productId");

let single = products.find(function(product){
    return product.id == productId;
});

if(single) {
    let code = `<div class="product-card">
                    <img src="${single.images}" alt="">
                    <div class="product-info">
                        <h2>${single.name}</h2>
                        <p>${single.description}</p>
                        <div class="price">${single.price} ${single.currency}</div>
                    </div>
                    <button onclick="addToCart(${single.id})">В корзину</button>
                </div>`;

    document.body.insertAdjacentHTML('afterbegin', code); 
    document.title = single.name;  
}

function addToCart(productId)
{
    let cart = window.localStorage.getItem("cart");

    if(cart) {
        cart = JSON.parse(cart);

        let index = cart.findIndex((item) => {return item.id == productId});

        if(index >= 0) {
            cart[0].count++;
        } else {
            let product = {
                'id': productId,
                'count': 1
            }

            cart.push(product);
        }

    } else {
        cart = [];

        let product = {
            'id': productId,
            'count': 1
        }

        cart.push(product);
    }

    window.localStorage.setItem('cart', JSON.stringify(cart));
}