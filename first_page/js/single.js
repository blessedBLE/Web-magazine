let productId = window.localStorage.getItem("productId");
console.log(productId);

let single = products.find(function(product){
    return product.id == productId; // Строгое сравнение для точности
});

if(single) {
   
    let code = `<div class="product-card">
                    <img src="${single.images}" alt="${single.name}">
                    <div class="product-info">
                        <h2>${single.name}</h2>
                        <p>${single.description}</p>
                        <div class="price">${single.price} ${single.currency}</div>
                    </div>
                    
                    <button class="but" type="button"><p>Добавь в корзину</p></button>
                    
                    
                </div>`;

document.body.insertAdjacentHTML('afterbegin', code); // вывод сразу body

    document.title = single.name;  
}