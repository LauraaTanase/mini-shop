const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
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
                      <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
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
              ${item.name} - $${item.price}
              <button class="btn btn-danger btn-sm remove-from-cart" data-id="${item.id}">Remove</button>
          </li>
      `
      )
      // iar la final facem join, ca din array (prin cart.map)
      // sa devina un string, stringul fiind cel asteptat in .innerHTML (ceva de genul: "<li>test</li><li>test</li><li>test</li>")
      .join("");

//  TODO: implementeaza ce sa faca remove from cart
  document.querySelectorAll(".remove-from-cart").forEach((button) => {
      button.addEventListener("click", (event) => {
    // Obținem id-ul produsului din atributul data-id al butonului
    const productId = parseInt(event.target.getAttribute("data-id"));

    // Apelăm funcția removeFromCart cu productId pentru a elimina produsul din coș
    removeFromCart(productId);
  });
});
  }

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  // TODO: "impinge" produsul in lista de cart
  // asta trebuie sa faci tu :)
cart.push({
  id:product.id,
  name:product.name,
  price:product.price
});

 // Actualizăm afișarea numărului de produse în coș
 updateCartCount(); 

  // ca sa afisez actualizat - practic fac override la ce am deja in innerHTML
  renderCart();
}

function removeFromCart(productId) {
  // filtreaza-mi tot ce e diferit ce input "productId"
  // obtin un array fara ce am pasat in input
  cart = cart.filter((item) => item.id !== productId);

    // Actualizăm afișarea numărului de produse în coș
  updateCartCount()

  // update la datele afisate
  renderCart();
}
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cart.length;
}

  // TODO: conditioneaza un alert message daca nu ai continut
  // HINT:
  // if (
  //   // cartul nu are continut
  // ) {
  //   alert("Your cart is empty!");
  //   return;
  // }
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }
  
  // TODO: calculeaza totalul cartului


  const total = cart.reduce((acc, item) => acc + item.price, 0)

  // afiseaza mesajul
  alert(`Your total is $${total}. Thank you for your purchase!`) 
  
  // acum ca a dat checkout si "a cumparat"
  // golim cartul pentru alte cumparaturi :)
  
  cart = [] // Clear the cart

  // si facem iar update
  renderCart();
}


document.getElementById("checkout-btn").addEventListener("click", checkout) 

renderProducts();
