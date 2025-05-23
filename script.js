// Data product
const productsData = [
    //macbook
  {
    id: "mac1",
    name: "Macbook Air M1",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m1.jpg"
  },
  {
    id: "mac2",
    name: "Macbook Air M2",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m2.jpg"
  },
  {
    id: "mac3",
    name: "Macbook Air M3",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m3.jpg"
  },
  {
    id: "mac4",
    name: "Macbook Air M4",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-air-m4.jpg"
  },
  {
    id: "mac5",
    name: "Macbook Pro M1",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m1.jpg"
  },
  {
    id: "mac6",
    name: "Macbook Pro M2",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m2.jpg"
  },
  {
    id: "mac7",
    name: "Macbook Pro M3",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m3.jpg"
  },
  {
    id: "mac8",
    name: "Macbook Pro M4",
    category: "mac",
    price: 78,
    image: "img/products/mac/mac-pro-m4.jpg"
  },

  //iphone
  {
    id: "iphone1",
    name: "iPhone 15",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15.jpg"
  },
  {
    id: "iphone2",
    name: "iPhone 15 Plus",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15-plus.jpg"
  },
  {
    id: "iphone3",
    name: "iPhone 15 Pro",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15-pro.jpg"
  },
  {
    id: "iphone4",
    name: "iPhone 15 Pro Max",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-15-promax.jpg"
  },
  {
    id: "iphone5",
    name: "iPhone 16",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16.jpg"
  },
  {
    id: "iphone6",
    name: "iPhone 16 Plus",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16-plus.jpg"
  },
  {
    id: "iphone7",
    name: "iPhone 16 Pro",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16-pro.jpg"
  },
  {
    id: "iphone8",
    name: "iPhone 16 Pro Max",
    category: "iphone",
    price: 78,
    image: "img/products/iphone/iphone-16-promax.jpg"
  },
];


// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function hideNavbar() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // cuộn xuống & đã cuộn quá 50px → ẩn navbar
        header.classList.add('hidden');
      } else {
        // cuộn lên → hiện navbar
        header.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    });
  };

hideNavbar();