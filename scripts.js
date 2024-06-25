const products = [
  //Todo:sa modific preturile,stocurile si ce a mai ramas la produsele mele.//
  {
    id: 1,
    name: "Banane",
    description:
      "Bananele sunt un fruct tropical extrem de sănătos, nu numai delicios. Deoarece conțin mai mulți nutrienți esențiali, bananele oferă beneficii pentru digestie, sănătatea inimii și pierderea în greutate. Sunt o gustare convenabilă, îndrăgită atât de adulți, cât și de copii.",
    price: 10,
    stock: 15,
    image:
      "C:UserszarafOneDriveDesktopIT SCHOOL WEB DEVELOPMENTVSCmini-shopassets\banana.jpg",
    sku: "SK001",
  },
  {
    id: 2,
    name: "Mere",
    description:
      "Merele sunt fructe crocante și suculente, disponibile într-o varietate de culori, inclusiv roșu, verde și galben. Sunt o sursă excelentă de fibre și vitamine, în special vitamina C.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\mere.jpg",
    sku: "SK002",
  },
  {
    id: 3,
    name: "Pere",
    description:
      "Perele sunt fructe dulci și zemoase. Ele sunt bogate în fibre și antioxidanți, fiind perfecte atât pentru consumul proaspăt, cât și pentru gătit.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\pere.jpg",
    sku: "SK003",
  },
  {
    id: 4,
    name: "Fructul dragonului",
    description:
      " Fructul dragonului este un fruct exotic cu coajă roz sau galbenă și pulpă albă sau roșie, punctată cu semințe negre. Este bogat în vitamina C, fibre și antioxidanți.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\fructulDragonului.jpg",
    sku: "SK004",
  },
  {
    id: 5,
    name: "Piersici",
    description:
      "Piersicile sunt fructe suculente, care pot varia în culoare de la alb la galben. Sunt cunoscute pentru aroma lor dulce și conținutul ridicat de vitamine A și C.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\piersici.jpg",
    sku: "SK005",
  },
  {
    id: 6,
    name: "Struguri",
    description:
      "Strugurii sunt fructe mici, suculente, care cresc în ciorchini. Disponibili în varietăți de culori precum verde, roșu și negru, strugurii sunt bogați în antioxidanți și vitamine.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\struguri.jpg",
    sku: "SK006",
  },
  {
    id: 7,
    name: "Nectarine",
    description:
      "Nectarinele sunt similare piersicilor, dar au o coajă netedă și un gust dulce-acrișor. Sunt o sursă bună de vitamine A și C și antioxidanți.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\nectarine.jpg",
    sku: "SK007",
  },
  {
    id: 8,
    name: "Mandarine",
    description:
      " Mandarinele sunt citrice mici și dulci, cu coajă subțire și ușor de curățat. Ele sunt bogate în vitamina C și flavonoizi, fiind o gustare perfectă pentru imunitate.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\mandarine.jpg",
    sku: "SK008",
  },
  {
    id: 9,
    name: "Portocale",
    description:
      " Portocalele sunt fructe citrice mari și suculente, cunoscute pentru gustul lor dulce și acidulat. Sunt o sursă excelentă de vitamina C și fibre.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\portocale.jpg",
    sku: "SK009",
  },
  {
    id: 10,
    name: "Lime",
    description:
      "Lime-ul este un fruct citric mic, verde, cu un gust acrișor intens. Este folosit frecvent pentru a da aromă alimentelor și băuturilor, fiind bogat în vitamina C.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\lime.jpg",
    sku: "SK0010",
  },
  {
    id: 11,
    name: "Mango",
    description:
      "Mango-ul este un fruct tropical cu pulpă galben-portocalie, dulce și suculentă. Este bogat în vitaminele A și C, fibre și antioxidanți.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\mango.jpg",
    sku: "SK0011",
  },
  {
    id: 12,
    name: "Ananas",
    description:
      "Ananasul este un fruct tropical mare, cu o coajă aspră și pulpă dulce-acrișoară. Este o sursă excelentă de vitamina C, mangan și bromelaină, o enzimă benefică pentru digestie.",
    price: 10,
    stock: 15,
    image:
      "C:\Users\zaraf\OneDrive\Desktop\IT SCHOOL WEB DEVELOPMENT\VSC\mini-shop\assets\ananas.jpg",
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
    id: product.id,
    name: product.name,
    price: product.price,
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
  updateCartCount();

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

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // afiseaza mesajul
  alert(`Your total is $${total}. Thank you for your purchase!`);

  // acum ca a dat checkout si "a cumparat"
  // golim cartul pentru alte cumparaturi :)

  cart = []; // Clear the cart

  // si facem iar update
  renderCart();
}

document.getElementById("checkout-btn").addEventListener("click", checkout);

renderProducts();
