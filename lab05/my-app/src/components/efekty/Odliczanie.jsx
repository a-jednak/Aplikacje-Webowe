import React, { useState, useEffect } from "react";

const Odliczanie = () => {
  const [licznik, setLicznik] = useState(15);
  const [isCounting, setIsCounting] = useState(false);
  const [buttonText, setButtonText] = useState("START");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    let interval;

    if (isCounting && licznik > 0) {
      interval = setInterval(() => {
        setLicznik((prevLicznik) => (prevLicznik - 0.1).toFixed(1));
      }, 100);
    } else if (licznik <= 0) {
      setIsCounting(false);
      setButtonText("Odliczanie zakończone");
      setIsDisabled(true);
    }

    return () => clearInterval(interval);
  }, [isCounting, licznik]);

  const handleClick = () => {
    if (licznik > 0) {
      setIsCounting(!isCounting);
      setButtonText(isCounting ? "START" : "STOP");
    }
  };

  return (
    <div>
      <div>
        <p>{licznik}s</p>
        <button onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Odliczanie;
