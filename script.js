
let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();
}

function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(function(item) {

        total += item.price;

        cartItems.innerHTML += `
            <p>${item.name} - ₹${item.price}</p>
        `;

    });

    if (cart.length === 0) {
        cartItems.innerText = "Your cart is empty.";
    }

    document.getElementById("total").innerText = total;
}

function clearCart() {

    cart = [];

    updateCart();
}
