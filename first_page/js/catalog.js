let catalog = document.getElementById("products");

if (catalog && Array.isArray(products)) {
    products.forEach(function(product) {
        let code = `  <div class="product">
        <img src="${product.images}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="price"><i>${product.price} ${product.currency}</i></p>
        <a href="#">Подробнее</a>
    </div>`
        catalog.insertAdjacentHTML('beforeend', code);
    })
}

let  items = document.getElementById("clothes");

if (items && Array.isArray(clothes)) {
    clothes.forEach(function(cloth) {
        let newcode= ` <div class="cloth">
        <img src="${cloth.images}" alt="${cloth.name}">
        <h3>${cloth.name}</h3>
        <p class="description">${cloth.description}</p>
        <p class="price"><i>${cloth.price} ${cloth.currency}</i></p>
        <a href="#">Подробнее</a>
    </div>`
        items.insertAdjacentHTML('beforeend', newcode);
    })
}
