// Sample function to simulate adding items to the cart
let cartItems = [];

// Function to add an item to the cart
function addItemToCart(item) {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
        // If item exists, increase quantity
        cartItems[existingItemIndex].quantity += 1;
    } else {
        // If item does not exist, add it to the cart
        cartItems.push(item);
    }

    displayCartItems();
}

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ""; // Clear previous items

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is currently empty.</p>";
        document.getElementById("totalAmount").innerText = `$0.00`;
        return;
    }

    let totalAmount = 0;

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name} ($${item.price.toFixed(2)})</h3>
            <p>Quantity: ${item.quantity}</p>
            <button class="btn-remove" onclick="removeItem(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    document.getElementById("totalAmount").innerText = `$${totalAmount.toFixed(2)}`;
}

// Function to remove item from cart
function removeItem(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        cartItems.splice(index, 1);
        displayCartItems();
    }
}

// Function to proceed to checkout
function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty! Please add items to proceed.");
        return;
    }
    
    // For demonstration, simply alerting the user
    alert("Proceeding to checkout with the following items:\n" + cartItems.map(item => `${item.name} (Quantity: ${item.quantity})`).join('\n'));
    
    // Redirect to a checkout page (if available)
    // window.location.href = "checkout.html"; // Uncomment and replace with actual checkout URL
}

// Sample data (you can later fetch this from your backend)
const newItem = {
    id: 1,
    name: "Updated Product",
    image: "updated_product.jpg", // Replace with your actual image path
    price: 39.99, // Updated price
    quantity: 1,
};

// Simulating adding a new item to the cart for demonstration
addItemToCart(newItem);

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
