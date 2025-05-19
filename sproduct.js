const proDetailsData = [
  //Macbook
  {
    id: "mac1",
    name: "Macbook",
    color: "Star Light",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac1.jpg",
  },
  {
    id: "mac2",
    name: "Macbook",
    color: "Midnight",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac2.jpg",
  },
  {
    id: "mac3",
    name: "Macbook",
    color: "Space Grey",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac3.jpg",
  },
  {
    id: "mac4",
    name: "Macbook",
    color: "Silver",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac4.jpg",
  },

  //iphone
  {
    id: "iphone1",
    name: "Iphone 16",
    color: "Desert Titanium",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone1.jpg",
  },
  {
    id: "iphone2",
    name: "Iphone 16",
    color: "Natural Titanium",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone2.jpg",
  },
  {
    id: "iphone3",
    name: "Iphone 16",
    color: "Black Titanium",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone3.jpg",
  },
  {
    id: "iphone4",
    name: "Iphone 16",
    color: "White Titanium",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone4.jpg",
  },
];



let mainProduct = null;

function renderProductDetails(products){
    mainProduct = products[0]; // mặc định
    const imgContainer = document.querySelector('.single-pro-image');
    imgContainer.innerHTML = `
        <img src="${mainProduct.image}" width="100%" id="MainImg" alt="">
        <div class="small-img-group">
            ${products.map((p, i) => `
                <div class="small-img-col" data-index="${i}">
                    <img src="${p.image}" width="100%" class="small-img" alt="">
                    <p class="img-caption">${p.color}</p>
                </div>
            `).join('')}
        </div>
    `;

    const detailContainer = document.querySelector('.single-pro-details');
    detailContainer.innerHTML = `
        <h4>${mainProduct.name} - ${mainProduct.color}</h4>
        <h2>$${mainProduct.price}</h2>
        <input type="number" value="1">
        <button class="normal" id="add-to-cart-btn">Add To Cart</button>
        <h4>Product Details</h4>
        <span>Apple M2 chip, 13.6″ Liquid Retina display, 8GB RAM, 512GB SSD, FaceTime HD 1080p camera, up to 18h battery life.</span>
    `;

    // Bắt sự kiện click ảnh nhỏ
    const MainImg = document.getElementById("MainImg");
    document.querySelectorAll(".small-img-col").forEach((col, i) => {
        col.addEventListener("click", () => {
            MainImg.src = products[i].image;
            mainProduct = products[i]; // ← cập nhật sản phẩm chính
            detailContainer.querySelector("h4").textContent = products[i].name + " - " + products[i].color;
            detailContainer.querySelector("h2").textContent = `$${products[i].price}`;
        });
    });

    // Gán lại nút Add to Cart bên trong sau khi render xong
    detailContainer.querySelector("#add-to-cart-btn").addEventListener("click", () => {
        const quantity = parseInt(detailContainer.querySelector("input[type='number']").value) || 1;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingIndex = cart.findIndex(item => item.id === mainProduct.id);
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += quantity;
        } else {
            cart.push({
                id: mainProduct.id,
                image: mainProduct.image,
                name: mainProduct.name,
                price: mainProduct.price,
                category: mainProduct.category,
                quantity: quantity
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng!");
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const products = proDetailsData.filter(p => p.category === category);

    if (category){
        renderProductDetails(products);
    }
});



