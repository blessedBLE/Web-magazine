let catalog = document.getElementById("products");

products.forEach(function(product){
    let code = `<div class="product">
                    <img src="${product.images}" />
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <div class="price">${product.price} ${product.currency}</div>
                    <a href="single.html" onclick="saveProductId(${product.id})">Подробнее</a>
                </div>`;

    catalog.insertAdjacentHTML('beforeend', code);
});

function saveProductId(productId) {
    window.localStorage.setItem("productId", productId);
}