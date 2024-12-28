import React, { useState } from "react";

const Licznik = () => {
  const [licznik, setLicznik] = useState(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;
