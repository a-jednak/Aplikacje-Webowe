import React, { useState } from "react";

const Formularz = () => {
  const [tekst, setTekst] = useState(""); // Przechowywanie tekstu w stanie

  // Funkcja obsługująca zmianę tekstu w inpucie
  const handleChange = (e) => {
    setTekst(e.target.value); // Aktualizacja stanu na podstawie wartości inputa
  };

  return (
    <div>
      <input
        type="text"
        value={tekst} // Ustawienie wartości inputa na stan
        onChange={handleChange} // Obsługuje zmianę wartości
        placeholder="Wpisz coś..."
      />
      <div>
        <p>Wpisałeś: {tekst}</p> {/* Wyświetlanie tekstu w divie */}
      </div>
    </div>
  );
};

export default Formularz;
