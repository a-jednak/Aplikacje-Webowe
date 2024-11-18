const tabela = document.getElementById("produkty");
const search = document.getElementById("search");
const order = document.getElementById("order");
let products = [];
let searchedProducts = [];

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    products = data.products.slice(0, 30);
    searchedProducts = [...products];
    robimTabele(searchedProducts);
  });

function robimTabele(dane) {
  tabela.innerHTML = "";
  dane.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${product.thumbnail}"></td>
            <td>${product.title}</td>
            <td>${product.description}</td>
            `;
    tabela.appendChild(row);
  });
}

search.addEventListener("input", () => {
  const szukam = search.value.toLowerCase();
  searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(szukam)
  );
  robimTabele(searchedProducts);
});

order.addEventListener("change", () => {
  const orderWay = order.value;
  if (orderWay == "Rosnąco") {
    searchedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (orderWay == "Malejąco") {
    searchedProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    searchedProducts = [...products];
  }
  robimTabele(searchedProducts);
});
