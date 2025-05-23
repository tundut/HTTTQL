function renderProductDetails(product){
    const imgContainer = document.querySelector('.single-pro-image');
    imgContainer.innerHTML = `
        <img src="${product.image}" width="100%" id="MainImg" alt="">
    `;

    const detailContainer = document.querySelector('.single-pro-details');
    detailContainer.innerHTML = `
        <h2>${product.name}</h2>
        <h2>$${product.price}</h2>
        <input type="number" min="1" value="1">
        <button class="normal" id="add-to-cart-btn">Add To Cart</button>
        <h4>Product Details</h4>
        <span>Apple M2 chip, 13.6″ Liquid Retina display, 8GB RAM, 512GB SSD, FaceTime HD 1080p camera, up to 18h battery life.</span>
    `;

    // Gán lại nút Add to Cart bên trong sau khi render xong
    detailContainer.querySelector("#add-to-cart-btn").addEventListener("click", () => {
        const quantity = parseInt(detailContainer.querySelector("input[type='number']").value) || 1;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingIndex = cart.findIndex(item => item.id === product.id);
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                category: product.category,
                quantity: quantity
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng!");
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const product = productsData.find(p => p.id === id);

    if (product) {
        renderProductDetails(product);
    }
});



