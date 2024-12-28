import React, { useState, useEffect } from "react";

const Licznik = () => {
  const [licznik, setLicznik] = useState(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    console.log(`Licznik zwiększył się do ${licznik}`);
  }, [licznik]);

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;
