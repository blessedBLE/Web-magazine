

document.onclick = event =>{
    if (event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
    }
    if
        (event.target.classList.contains('minus')){
            minusFunction(event.target.dataset.id);
        }
}
//добовляем товар
const plusFunction = (id) =>{
    cart[id]++;
    renderCart();
}
//убираем
const minusFunction = (id)=>{
    if (cart[id]-1 == 0){
        deleteFunction(id);
        return true;
    }
    cart[id]--;
    renderCart();
}

const deletFunction = (id)=>{
   
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}    
renderCart();