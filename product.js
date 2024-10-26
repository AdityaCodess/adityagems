// Function to update cart count
function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cartItems.length; // Update cart count
}

// Function to add product to cart
function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cartItems.findIndex(item => item.name === product.name);
    if (existingProductIndex !== -1) {
        // If it exists, increase the quantity
        cartItems[existingProductIndex].quantity += 1;
    } else {
        // Add product with quantity property
        product.quantity = 1; // Initialize quantity
        cartItems.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems)); // Save updated cart to localStorage
    updateCart(); // Update cart count
}

// Show only necklaces initially
document.addEventListener('DOMContentLoaded', () => {
    const allProducts = document.querySelectorAll('.product-card');
    allProducts.forEach(product => {
        if (product.getAttribute('data-category') !== 'necklaces') {
            product.style.display = 'none'; // Hide products that are not necklaces
        }
    });

    // Category click event handler
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const category = this.getAttribute('data-category');

            // Remove 'active' class from all links
            document.querySelectorAll('.sidebar a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active'); // Highlight the clicked category

            // Show relevant products
            allProducts.forEach(product => {
                if (product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Sidebar toggle functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    // Add to Cart functionality
    allProducts.forEach(product => {
        const buyButton = product.querySelector('.btn-buy');
        buyButton.addEventListener('click', () => {
            const productDetails = {
                name: product.querySelector('h3').textContent,
                price: parseFloat(product.querySelector('.price').textContent.replace('$', '')), // Assuming price is in $ format
                image: product.querySelector('img').src,
            };
            addToCart(productDetails);
            alert(`${productDetails.name} has been added to your cart!`); // Optional alert
        });
    });

    updateCart(); // Initial cart update
});

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
