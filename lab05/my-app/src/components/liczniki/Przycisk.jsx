import React from "react";

const Przycisk = ({ setLicznik, aktualnaWartosc }) => {
  const dodaj = () => {
    setLicznik(aktualnaWartosc + 1);
  };

  return <button onClick={dodaj}>Dodaj</button>;
};

export default Przycisk;
