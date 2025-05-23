let catalog = document.getElementById("products");

if (catalog && Array.isArray(products)) {
    products.forEach(function(product) {
        let code = `  <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price"><i>${product.price} ${product.currency}</i></p>
            <a href="product/single.html" onclick="saveProductId(${product.id})">Подробнее</a>
        </div>`;
        catalog.insertAdjacentHTML('beforeend', code);
    })
}

let  items = document.getElementById("clothes");

if (items && Array.isArray(clothes)) {
    clothes.forEach(function(cloth) {
        let newcode= ` <div class="product-card">
            <img src="${cloth.image}" alt="${cloth.name}">
            <h3>${cloth.name}</h3>
            <p class="description">${cloth.description}</p>
            <p class="price"><i>${cloth.price} ${cloth.currency}</i></p>
            <a href="product/single.html" onclick="saveProductId(${cloth.id})">Подробнее</a>
        </div>`;
        items.insertAdjacentHTML('beforeend', newcode);
    })
}

let houseHold = document.getElementById("appliances");

if (houseHold && Array.isArray(appliances)){
    appliances.forEach(function(appliance){
        let Globalnewcode= ` <div class="product-card">
            <img src="${appliance.image}" alt="${appliance.name}">
            <h3>${appliance.name}</h3>
            <p class="description">${appliance.description}</p>
            <p class="price"><i>${appliance.price} ${appliance.currency}</i></p>
            <a href="product/single.html" onclick="saveProductId(${appliance.id})">Подробнее</a>
        </div>`;
        houseHold.insertAdjacentHTML('beforeend', Globalnewcode);
    })
}

if (cart.length === 0) {
    container.innerHTML = "<p>Ваша корзина пуста.</p>";
} else {
    cart.forEach(item => {
        let product = products.find(p => p.id === item.id);
        if (product) {
            totalCart += item.count;
            container.insertAdjacentHTML("beforeend", `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" width="100">
                    <div>
                        <h4>${product.name}</h4>
                        <p>${product.price} ${product.currency}</p>
                        <p>Количество: ${item.count}</p>
                    </div>
                </div>
            `);
        }
    });
}

document.getElementById("total-cart").innerText = totalCart;

function saveProductId(productId) {
    window.localStorage.setItem("productId", productId);
}
