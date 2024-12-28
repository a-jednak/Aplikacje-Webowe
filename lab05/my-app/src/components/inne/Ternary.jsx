import React from "react";

const Ternary = () => {
  const a = true;
  const b = false;

  return (
    <div>
      {/* Ternary operator dla zmiennej a */}
      <div>
        {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      </div>

      {/* Ternary operator dla zmiennej b */}
      <div>
        {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
      </div>
    </div>
  );
};

export default Ternary;
