const products = [
  {
    id: 1,
    name: "Banane",
    description:
      "Bananele sunt un fruct tropical extrem de sănătos, nu numai delicios. Deoarece conțin mai mulți nutrienți esențiali, bananele oferă beneficii pentru digestie, sănătatea inimii și pierderea în greutate. Sunt o gustare convenabilă, îndrăgită atât de adulți, cât și de copii.",
    price: 10,
    stock: 15,
    sku: "SK001",
  },
  {
    id: 2,
    name: "Mere",
    description:
      "Merele sunt fructe crocante și suculente, disponibile într-o varietate de culori, inclusiv roșu, verde și galben. Sunt o sursă excelentă de fibre și vitamine, în special vitamina C.",
    price: 5.5,
    stock: 12,
    sku: "SK002",
  },
  {
    id: 3,
    name: "Pere",
    description:
      "Perele sunt fructe dulci și zemoase. Ele sunt bogate în fibre și antioxidanți, fiind perfecte atât pentru consumul proaspăt, cât și pentru gătit.",
    price: 11,
    stock: 55,
    sku: "SK003",
  },
  {
    id: 4,
    name: "Capsuni",
    description:
      " Fructul dragonului este un fruct exotic cu coajă roz sau galbenă și pulpă albă sau roșie, punctată cu semințe negre. Este bogat în vitamina C, fibre și antioxidanți.",
    price: 12,
    stock: 7,
    sku: "SK004",
  },
  {
    id: 5,
    name: "Piersici",
    description:
      "Piersicile sunt fructe suculente, care pot varia în culoare de la alb la galben. Sunt cunoscute pentru aroma lor dulce și conținutul ridicat de vitamine A și C.",
    price: 4.5,
    stock: 150,
    sku: "SK005",
  },
  {
    id: 6,
    name: "Struguri",
    description:
      "Strugurii sunt fructe mici, suculente, care cresc în ciorchini. Disponibili în varietăți de culori precum verde, roșu și negru, strugurii sunt bogați în antioxidanți și vitamine.",
    price: 20,
    stock: 115,
    sku: "SK006",
  },
  {
    id: 7,
    name: "Nectarine",
    description:
      "Nectarinele sunt similare piersicilor, dar au o coajă netedă și un gust dulce-acrișor. Sunt o sursă bună de vitamine A și C și antioxidanți.",
    price: 9,
    stock: 78,
    sku: "SK007",
  },
  {
    id: 8,
    name: "Mandarine",
    description:
      " Mandarinele sunt citrice mici și dulci, cu coajă subțire și ușor de curățat. Ele sunt bogate în vitamina C și flavonoizi, fiind o gustare perfectă pentru imunitate.",
    price: 6,
    stock: 150,
    sku: "SK008",
  },
  {
    id: 9,
    name: "Portocale",
    description:
      " Portocalele sunt fructe citrice mari și suculente, cunoscute pentru gustul lor dulce și acidulat. Sunt o sursă excelentă de vitamina C și fibre.",
    price: 10,
    stock: 200,
    sku: "SK009",
  },
  {
    id: 10,
    name: "Lime",
    description:
      "Lime-ul este un fruct citric mic, verde, cu un gust acrișor intens. Este folosit frecvent pentru a da aromă alimentelor și băuturilor, fiind bogat în vitamina C.",
    price: 3,
    stock: 300,
    sku: "SK0010",
  },
  {
    id: 11,
    name: "Mango",
    description:
      "Mango-ul este un fruct tropical cu pulpă galben-portocalie, dulce și suculentă. Este bogat în vitaminele A și C, fibre și antioxidanți.",
    price: 30,
    stock: 150,
    sku: "SK0011",
  },
  {
    id: 12,
    name: "Ananas",
    description:
      "Ananasul este un fruct tropical mare, cu o coajă aspră și pulpă dulce-acrișoară. Este o sursă excelentă de vitamina C, mangan și bromelaină, o enzimă benefică pentru digestie.",
    price: 28,
    stock: 17,
    sku: "SK0012",
  },
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = products
    .map(
      (product) => `
          <div class="col-md-4 mb-4">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">$${product.price}</p>
                      <button class="btn btn-primary btn-sm add-to-cart" data-id="${product.id}">Add to Cart</button>
                      <button class="btn btn-secondary add-to-favorites btn-sm" data-id="${product.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/
</svg></i>
</button>

                  </div>
              </div>
          </div>
      `
    )
    .join("");
  // selectez toate elementele cu clasa "add-to-card"
  document
    .querySelectorAll(".add-to-cart")
    // le parcurg
    .forEach((button) => {
      // fiecarui button ii spun ce sa faca la "click"
      button.addEventListener("click", (event) => {
        // ma uit in attribute - acolo am pus id-ul produsului ca informatie
        // si preiau cu getAttribute acea valoare
        const productId = parseInt(event.target.getAttribute("data-id"));
        // o pasez functiei addToCart ca parametru
        addToCart(productId);
      });
    });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product.stock > 0) {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
    product.stock -= 1;
    updateCartCount();
    renderCart();
  } else {
    alert("Stoc epuizat");
  }
}

function renderCart() {
  // cart-list fiind un element in index.html
  const cartList = document.getElementById("cart-list");
  // ii dictez ce sa contina
  cartList.innerHTML =
    // folosind cart object, iterand prin el cu map
    cart
      .map(
        // plus fiecarui element ii spun cum sa arate cu niste HTML si bootstrap classes
        (item) => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
              ${item.name} - $${item.price} x ${item.quantity}
              <div>
              <button class="btn btn-secondary btn-sm decrease-quantity" data-id="${item.id}">-</button>
                <button class="btn btn-secondary btn-sm increase-quantity" data-id="${item.id}">+</button>
              <button class="btn btn-danger btn-sm remove-from-cart" data-id="${item.id}">Remove</button>
              </div>
          </li>
      `
      )
      // iar la final facem join, ca din array (prin cart.map)
      // sa devina un string, stringul fiind cel asteptat in .innerHTML (ceva de genul: "<li>test</li><li>test</li><li>test</li>")
      .join("");

  //Remove from cart
  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });
  //Increase/decrease/upodate qty
  document.querySelectorAll(".increase-quantity").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      updateQuantity(productId, 1);
    });
  });

  document.querySelectorAll(".decrease-quantity").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      updateQuantity(productId, -1);
    });
  });
}

function updateQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      removeFromCart(productId);
    } else {
      const product = products.find((p) => p.id === productId);
      product.stock -= change;
      renderCart();
    }
  }
  // Actualizăm afișarea numărului de produse în coș
  updateCartCount();
}

function removeFromCart(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    const product = products.find((p) => p.id === productId);
    product.stock += cartItem.quantity;
    cart = cart.filter((item) => item.id !== productId);
    updateCartCount();
    renderCart();
  }
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCountElement.textContent = totalItems;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  alert(`Your total is $${total}. Thank you for your purchase!`);
  cart = [];
  renderCart();
  updateCartCount();
}

document.getElementById("checkout-btn").addEventListener("click", checkout);

renderProducts();

document.querySelectorAll(".icon-link").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.scrollIntoView({ behavior: "smooth" });
  });
});
