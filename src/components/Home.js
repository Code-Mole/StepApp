"use client";

import React, { useContext, useState } from "react";
import "../index.css";
import { User } from "../TryContent";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Home() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "Mole" });
  const [isopen, setIsOpen] = useState(true);
  // const step = 1;

  const { arr } = useContext(User);

  console.log(arr);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    setTest({ name: "mole" });
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
      setTest({ name: "Asanga" });
    }
  }
  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isopen);
        }}
      >
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            step {step}: {messages[step - 1]},{test.name}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
          {arr.map((item) => {
            <h1>{item.name}</h1>;
          })}
        </div>
      )}
    </>
  );
}

export default Home;
