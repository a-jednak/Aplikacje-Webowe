import React, { useState } from "react";

const Haslo = () => {
  const [haslo, setHaslo] = useState("");
  const [powtorzHaslo, setPowtorzHaslo] = useState("");
  const [komunikat, setKomunikat] = useState("");

  // Funkcja obsługująca zmianę w polu Hasło
  const handleHasloChange = (e) => {
    setHaslo(e.target.value);
  };

  // Funkcja obsługująca zmianę w polu Powtórz Hasło
  const handlePowtorzHasloChange = (e) => {
    setPowtorzHaslo(e.target.value);
  };

  // Funkcja do sprawdzania poprawności haseł
  const sprawdzHasla = () => {
    if (!haslo && !powtorzHaslo) {
      setKomunikat("Proszę wprowadzić hasło");
    } else if (haslo !== powtorzHaslo) {
      setKomunikat("Hasła nie są zgodne");
    } else {
      setKomunikat("");
    }
  };

  // Sprawdzanie haseł na każdym etapie zmiany w inputach
  React.useEffect(() => {
    sprawdzHasla();
  }, [haslo, powtorzHaslo]);

  return (
    <div>
      <div>
        <label>
          Hasło:
          <input type="password" value={haslo} onChange={handleHasloChange} />
        </label>
      </div>
      <div>
        <label>
          Powtórz Hasło:
          <input
            type="password"
            value={powtorzHaslo}
            onChange={handlePowtorzHasloChange}
          />
        </label>
      </div>
      <div>
        <p>{komunikat}</p>
      </div>
    </div>
  );
};

export default Haslo;
