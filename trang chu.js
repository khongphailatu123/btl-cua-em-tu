document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar input");
    searchBar.addEventListener("focus", () => {
        searchBar.style.borderColor = "#008000";
    });
    searchBar.addEventListener("blur", () => {
        searchBar.style.borderColor = "#ccc";
    });
});
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
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });
});
let cart = [];
        
function addToCart(name, price, img) {
    cart.push({ name, price, img });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let cartCount = document.getElementById("cart-count");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<li><img src="${item.img}" width="50"> ${item.name} - ${item.price}₫ <button onclick="removeFromCart(${index})">Xóa</button></li>`;
    });
    totalPrice.innerText = total;
    cartCount.innerText = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    let cartContainer = document.getElementById("cart");
    cartContainer.classList.toggle("active");
}

function checkout() {
    alert("Chức năng thanh toán đang phát triển!");
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("checkout-button").addEventListener("click", checkout);
    document.getElementById("close-cart-button").addEventListener("click", toggleCart);
});
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cart").style.display = "none";
});

function toggleCart() {
    var cart = document.getElementById("cart");
    if (cart.style.display === "block" || cart.style.display === "") {
        cart.style.display = "none";
    } else {
        cart.style.display = "block";
    }
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
