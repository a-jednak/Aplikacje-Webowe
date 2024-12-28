import React from "react";
import Produkt from "./Produkt";

const Koszyk = () => {
  return (
    <div>
      <h2>Koszyk</h2>
      <ul>
        <Produkt nazwa="Mąka" />
        <Produkt nazwa="Cukier" />
        <Produkt nazwa="Proszek do pieczenia" />
        <Produkt nazwa="Mandarynka" />
        <Produkt nazwa="Kakao" />
      </ul>
    </div>
  );
};

export default Koszyk;
