import React, { useState } from "react";

const Dodawanie = ({ addStudent }) => {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rocznik, setRocznik] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imie || !nazwisko || !rocznik) {
      setError("Wszystkie pola muszą być wypełnione!");
      return;
    }
    if (isNaN(rocznik)) {
      setError("Rocznik musi być liczbą!");
      return;
    }

    const newStudent = {
      imie,
      nazwisko,
      rocznik: parseInt(rocznik),
    };

    addStudent(newStudent);

    setImie("");
    setNazwisko("");
    setRocznik("");
    setError("");
  };

  return (
    <div>
      <h3>Dodaj Studenta</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię:</label>
          <input
            type="text"
            value={imie}
            onChange={(e) => setImie(e.target.value)}
          />
        </div>
        <div>
          <label>Nazwisko:</label>
          <input
            type="text"
            value={nazwisko}
            onChange={(e) => setNazwisko(e.target.value)}
          />
        </div>
        <div>
          <label>Rocznik:</label>
          <input
            type="text"
            value={rocznik}
            onChange={(e) => setRocznik(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default Dodawanie;
