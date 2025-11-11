export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart){
    cart = [
        {
            productId: '5968897c-4d27-4872-89f6-5bcb052746d7',
            quantity: 2
        },
        {
            productId: '901eb2ca-386d-432e-82f0-6fb1ee7bf969',
            quantity: 2
        }
    ];
}

export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingItem;
        cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity += 1;
        } else {
            cart.push({
            productId: productId,
            quantity: 1
        });
        }
    saveToStorage();
}
export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart.length = 0;
    newCart.forEach(item => cart.push(item));
    saveToStorage();
}