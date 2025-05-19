// Data product
const productsData = [
    //macbook
  {
    name: "Macbook Air M1",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m1.jpg"
  },
  {
    name: "Macbook Air M2",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m2.jpg"
  },
  {
    name: "Macbook Air M3",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m3.jpg"
  },
  {
    name: "Macbook Air M4",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m4.jpg"
  },
  {
    name: "Macbook Pro M1",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m1.jpg"
  },
  {
    name: "Macbook Pro M2",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m2.jpg"
  },
  {
    name: "Macbook Pro M3",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m3.jpg"
  },
  {
    name: "Macbook Pro M4",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m4.jpg"
  },

  //iphone
  {
    name: "iPhone 15",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15.jpg"
  },
  {
    name: "iPhone 15 Plus",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15-plus.jpg"
  },
  {
    name: "iPhone 15 Pro",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15-pro.jpg"
  },
  {
    name: "iPhone 15 Pro Max",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15-promax.jpg"
  },
  {
    name: "iPhone 16",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16.jpg"
  },
  {
    name: "iPhone 16 Plus",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16-plus.jpg"
  },
  {
    name: "iPhone 16 Pro",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16-pro.jpg"
  },
  {
    name: "iPhone 16 Pro Max",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16-promax.jpg"
  },
];


function renderProducts(products) {
  const container = document.querySelector('.pro-container-cg');
  container.innerHTML = ''; // Xoá sản phẩm cũ

  products.forEach(product => {
    container.innerHTML += `
      <div class="pro" data-category="${product.category}" onclick="window.location.href='sproduct.html?category=${product.category}';">
        <img src="${product.image}" alt="">
        <div class="des">
          <span>Apple</span>
          <h5>${product.name}</h5>
          <div class="star">
            <i class="fas fa-star"></i><i class="fas fa-star"></i>
            <i class="fas fa-star"></i><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>$${product.price}</h4>
        </div>
        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
      </div>
    `;
  });
}


window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  //Xử lý URL trang Product
  if (category) {
    const categoryBoxes = document.querySelectorAll(".cg-box");

    categoryBoxes.forEach(box => {
        const boxCategory = box.getAttribute('data-category');
        
        if (boxCategory === category) {
            categoryBoxes.forEach(b => b.classList.remove("active"));
            box.classList.add("active");

            if (typeof renderProducts === "function") {
            const filtered = productsData.filter(p => p.category === category);
            renderProducts(filtered);
            }
        }
        });
    }
  else {
    renderProducts(productsData);
  }
});