document.addEventListener("DOMContentLoaded", () => {
    updateCart();
    const searchBar = document.querySelector(".search-bar input");
    searchBar.addEventListener("focus", () => {
        searchBar.style.borderColor = "#008000";
    });
    searchBar.addEventListener("blur", () => {
        searchBar.style.borderColor = "#ccc";
    });
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });
    document.getElementById("checkout-button").addEventListener("click", checkout);
    document.getElementById("close-cart-button").addEventListener("click", toggleCart);
    document.getElementById("cart").style.display = "none";
    setTimeout(() => {
        document.querySelector(".navbar").style.opacity = "1";
        document.querySelector(".banner").style.opacity = "1";
    }, 300);

    let elements = document.querySelectorAll(".product");
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.3 });

    elements.forEach((el) => observer.observe(el));
});

let cart = [];

function addToCart(name, price, img) {
    let item = cart.find((p) => p.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let cartCount = document.getElementById("cart-count");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `<li><img src="${item.img}" width="50"> ${item.name} - ${item.price}₫ x ${item.quantity} <button onclick="removeFromCart(${index})">Xóa</button></li>`;
    });
    totalPrice.innerText = total.toLocaleString() + "₫";
    cartCount.innerText = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    var cart = document.getElementById("cart");
    if (cart.style.display === "block" || cart.style.display === "") {
        cart.style.display = "none";
    } else {
        cart.style.display = "block";
    }
}

function checkout() {
    alert("Cảm ơn bạn đã mua hàng!");
    cart = [];
    updateCart();
}

function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");
    
    products.forEach(product => {
        let title = product.querySelector("h3").textContent.toLowerCase();
        if (title.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
document.getElementById("searchInput").addEventListener("input", searchProduct);
function filterByPrice() {
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const priceText = product.querySelector('.price').textContent.replace('₫', '').replace(/\./g, '');
        const price = parseInt(priceText);

        if (price >= minPrice && price <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
