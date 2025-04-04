 let productID = window.localStorage.getItem("productID");

 let single = products.find(function(product){
    return  product.id = productID;


 });
 if(single){
     let code = ``;
    document.body.insertAdjacentHTML('afterbegin',code)
    document.title = single.name;
 }
