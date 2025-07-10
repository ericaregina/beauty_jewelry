function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");
    let sum = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Seu carrinho está vazio.</p>";
        total.innerText = "0.00";
        return;
    }

    const finalizarContainer = document.getElementById("finalizar-container");

    if (cart.length > 0) {
        finalizarContainer.classList.remove("hidden");
    } else {
        finalizarContainer.classList.add("hidden");
    }


    container.innerHTML = "";
    cart.forEach((item, index) => {
        sum += item.price;
        const div = document.createElement("div");
        div.className = "bg-white p-4 rounded-lg shadow flex justify-between items-center";

        div.innerHTML = `
  <div>
    <p><strong>${item.name}</strong></p>
    <p>R$ ${item.price.toFixed(2)}</p>
  </div>
  <button 
    class="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition"
    onclick="removeFromCart(${index})">
    Remover
  </button>
`;


        container.appendChild(div);
    });

    total.innerText = sum.toFixed(2);
}



if (window.location.pathname.includes("cart.html")) {
    window.onload = loadCart;
}
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
function finalizarCompra() {
    alert("Redirecionando para o pagamento...");
}
