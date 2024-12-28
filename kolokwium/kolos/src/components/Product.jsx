import React from "react";

const Produkt = ([title, category, brand]) => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      title = data.products.title;
      category = data.products.category;
      brand = data.products.brand;
    });

  return (
    <p>
      {title}, {category}, {brand}
    </p>
  );
};

export default Produkt;
