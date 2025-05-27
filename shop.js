

function renderProducts(products) {
  const container = document.querySelector('.pro-container-cg');
  container.innerHTML = ''; // Xoá sản phẩm cũ

  products.forEach(product => {
    container.innerHTML += `
      <div class="pro" data-category="${product.category}" onclick="window.location.href='sproduct.html?id=${product.id}';">
        <img src="${product.image}" alt="">
        <div class="des">
          <span>Apple</span>
          <h5>${product.name}</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
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
  const category = urlParams.get("category") ? urlParams.get("category") : "mac";

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

});