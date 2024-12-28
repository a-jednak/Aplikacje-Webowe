import React, { useState, useEffect } from "react";

const Tytul = () => {
  const [tytul, setTytul] = useState("");

  useEffect(() => {
    document.title = tytul;
  }, [tytul]);

  return (
    <div>
      <input
        type="text"
        placeholder="Wpisz tytuł strony"
        value={tytul}
        onChange={(e) => setTytul(e.target.value)}
      />
    </div>
  );
};

export default Tytul;
