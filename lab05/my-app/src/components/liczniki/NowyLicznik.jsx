import React, { useState } from "react";
import Przycisk from "./Przycisk";

const NowyLicznik = () => {
  const [licznik, setLicznik] = useState(0);

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <Przycisk setLicznik={setLicznik} aktualnaWartosc={licznik} />
    </div>
  );
};

export default NowyLicznik;
