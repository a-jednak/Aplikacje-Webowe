import React from "react";

const Students = [
  { imie: "Jan", nazwisko: "Kowalski", rocznik: 2021 },
  { imie: "Anna", nazwisko: "Nowak", rocznik: 2023 },
  { imie: "Adam", nazwisko: "Mickiewicz", rocznik: 2022 },
  { imie: "Maria", nazwisko: "Wiśniewska", rocznik: 2021 },
  { imie: "Baba", nazwisko: "Jaga", rocznik: 2024 },
];

const Studenci = () => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studenci;
