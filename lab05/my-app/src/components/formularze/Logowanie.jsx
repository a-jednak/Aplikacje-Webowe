import React, { useState } from "react";

const Logowanie = () => {
  const [nazwaUzytkownika, setNazwaUzytkownika] = useState("");
  const [haslo, setHaslo] = useState("");
  const [powtorzHaslo, setPowtorzHaslo] = useState("");

  const handleNazwaUzytkownikaChange = (e) => {
    setNazwaUzytkownika(e.target.value);
  };

  const handleHasloChange = (e) => {
    setHaslo(e.target.value);
  };

  const handlePowtorzHasloChange = (e) => {
    setPowtorzHaslo(e.target.value);
  };

  const sprawdzFormularz = () => {
    if (haslo !== powtorzHaslo) {
      alert("Hasła nie są zgodne");
      return false;
    }
    alert("Zalogowano poprawnie");
  };

  return (
    <div>
      <div>
        <label>
          Nazwa użytkownika:
          <input
            type="text"
            value={nazwaUzytkownika}
            onChange={handleNazwaUzytkownikaChange}
          />
        </label>
      </div>
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
        <button
          onClick={sprawdzFormularz}
          disabled={!nazwaUzytkownika || !haslo || !powtorzHaslo}
        >
          Logowanie
        </button>
      </div>
    </div>
  );
};

export default Logowanie;
