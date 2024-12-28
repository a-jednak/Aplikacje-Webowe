import React from "react";
import Koszyk from "./components/koszyk/Koszyk";
import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";
import LicznikSpecjalny from "./components/efekty/LicznikSpecjalny";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarz from "./components/produkty/Komentarz";
import "./App.css";

const App = () => {
  return (
    <div>
      <Koszyk />
      <h1>Liczniki</h1>
      <h2>Licznik 1</h2>
      <Licznik />
      <h2>Licznik 2</h2>
      <NowyLicznik />
      <h1>Formularze</h1>
      <Formularz />
      <h2>Hasło</h2>
      <Haslo />
      <h2>Logowanie</h2>
      <Logowanie />
      <h1>Ternary</h1>
      <Ternary />
      <h1>Aktualizacja</h1>
      <Aktualizacja />
      <h1>Studenci</h1>
      <Studenci />
      <h1>Student Manager</h1>
      <StudentManager />
      <h1>Licznik z efektem</h1>
      <LicznikSpecjalny />
      <h1>Zmiana tytułu</h1>
      <Tytul />
      <h1>Odliczanie</h1>
      <Odliczanie />
      <h1>Komentarz</h1>
      <Komentarz />
      <h3> Zadania zrobione do 7.1 i bez 1.2 </h3>
    </div>
  );
};

export default App;
