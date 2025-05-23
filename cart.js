// Hàm render giỏ hàng từ localStorage
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.querySelector("#cart tbody");
  tbody.innerHTML = "";

  if (cart.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">Empty Cart</td></tr>`;
    updateCartTotals(); // không cần truyền tham số
    return;
  }

  cart.forEach((item, index) => {
    tbody.innerHTML += `
      <tr data-index="${index}">
        <td><a href="#" class="remove-btn"><i class="far fa-times-circle"></i></a></td>
        <td><img src="${item.image}" alt="${item.name}" width="50"></td>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td><input type="number" class="qty-input" min="1" value="${item.quantity}"></td>
        <td class="subtotal">$${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `;
  });

  // Gán event nút remove
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const row = e.target.closest("tr");
      const index = row.dataset.index;
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const item = cart[index];
      if (item) {
        removeFromCart(item.id);
      }
    });
  });

  // Gán event input quantity thay đổi
  document.querySelectorAll(".qty-input").forEach(input => {
    input.addEventListener("change", e => {
      let val = parseInt(e.target.value);
      if (isNaN(val) || val < 1) val = 1;
      e.target.value = val;
      const row = e.target.closest("tr");
      const index = row.dataset.index;
      updateCartQuantity(index, val);
    });
  });

  updateCartTotals();
}

// Cập nhật tổng tiền lên giao diện
function updateCartTotals() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const subtotalTd = document.querySelector('#subtotal table tr:first-child td:nth-child(2)');
  const totalTd = document.querySelector('#subtotal table tr:last-child td:nth-child(2) strong');

  if (subtotalTd) subtotalTd.textContent = `$${total.toFixed(2)}`;
  if (totalTd) totalTd.textContent = `$${total.toFixed(2)}`;
}

// Cập nhật số lượng sản phẩm trong localStorage
function updateCartQuantity(index, quantity) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index]) {
    cart[index].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// Xóa sản phẩm theo id khỏi localStorage
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

window.addEventListener('DOMContentLoaded', () => {
  renderCart();
});