import React, { useState } from "react";
import Dodawanie from "./Dodawanie";

const StudentManager = () => {
  const [students, setStudents] = useState([
    { imie: "Juliusz", nazwisko: "Słowacki", rocznik: 2021 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2020 },
    { imie: "Adam", nazwisko: "Mickiewicz", rocznik: 2022 },
    { imie: "Maria", nazwisko: "Wiśniewska", rocznik: 2021 },
    { imie: "Baba", nazwisko: "Jaga", rocznik: 2020 },
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

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
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dodawanie addStudent={addStudent} />
    </div>
  );
};

export default StudentManager;
