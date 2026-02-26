let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".carts");
let cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-cart")) {
        let productBox = event.target.closest(".brand-card,.occasions-card,#cards-full,.cards-full");
        addToCart(productBox);
    }
});

let cartContent = document.querySelector(".cart-content");
let addToCart = productBox => {
    let productImgSrc = productBox.querySelector("img").src;
    let productTitle = productBox.querySelector(".product-title").textContent;
    let productPrice = productBox.querySelector(".price").textContent;
    let cardItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cardItems) {
        if (item.textContent === productTitle) {
            alert("This Item Is alredy in tha cart.");
            return;
        }
    };

    let cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
    <img src="${productImgSrc}" class="cart-img" alt="">
    <div class="cart-detail">
        <h2 class="cart-product-title">${productTitle}</h2>
        <span class="cart-price">${productPrice}</span>
        <div class="card-quantity">
            <button class="decrement">-</button>
            <span class="number">1</span>
            <button class="increment">+</button>
        </div>
    </div>
                <svg class="card-remove" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    `;
    cartContent.appendChild(cartBox);

    cartBox.querySelector(".card-remove").addEventListener("click", () => {
        cartBox.remove();

        updateCartCount(-1);

        updateTotalPrice();
    });

    cartBox.querySelector(".card-quantity").addEventListener("click", (event) => {

        let numberElement = cartBox.querySelector(".number");
        let decrementButton = cartBox.querySelector(".decrement");
        let quantity = parseInt(numberElement.textContent);

        if (event.target.classList.contains("decrement")) {
            if (quantity > 1) {
                quantity--;
            }
            if (quantity === 1) {
                decrementButton.style.color = "#999";
            }
        } else if (event.target.classList.contains("increment")) {
            quantity++;
            decrementButton.style.color = "#333";
        }
        numberElement.textContent = quantity;
        updateTotalPrice();
    });


    updateCartCount(1);

    updateTotalPrice();

};
let updateTotalPrice = () => {
    let totalPriceElement = document.querySelector(".total-price");
    if (!totalPriceElement) return;

    let cartBoxes = document.querySelectorAll(".cart-box");
    let total = 0;

    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector(".cart-price");
        let quantityElement = cartBox.querySelector(".number");

        let price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, "")) || 0;
        let quantity = parseInt(quantityElement.textContent) || 0;

        total += price * quantity;
    });

    totalPriceElement.textContent = `Rs:${total}`;
};

let cartItemCount = 0;
let updateCartCount = change => {
    let cartItemCountBadge = document.querySelector(".count");
    cartItemCount += change;

    if (cartItemCount > 0) {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    } else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
        cartItemCount = 0;
    }
};