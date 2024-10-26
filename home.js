document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', () => {
        alert("Product added to cart!");
    });
});

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

