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
                </div>`;

    document.body.insertAdjacentHTML('afterbegin', code); 
    document.title = single.name;  
}

