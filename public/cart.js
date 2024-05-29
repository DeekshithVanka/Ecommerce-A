document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');

    // Load cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCartItems(cart);

    // Event listener for removing a single item from cart
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const productId = event.target.dataset.productId;
            cart = cart.filter(item => item._id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems(cart);
            alert('Product removed from cart!');
        }
    });

    // Event listener for clearing the entire cart
    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        cartItemsContainer.innerHTML = 'Your cart is empty.';
        alert('Cart cleared!');
    });

    function displayCartItems(cart) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = 'Your cart is empty.';
        } else {
            cartItemsContainer.innerHTML = '';
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <button class="remove-from-cart" data-product-id="${item._id}">Remove from Cart</button>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        }
    }
});