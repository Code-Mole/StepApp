"use client";

import React, {  useState } from "react";
import "../index.css";
import { useUser } from "../TryContent";
import Button from "./Button";

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

  const { name } = useUser();

  console.log(name);

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
        </div>
      )}
      {/* {name} */}

      <Button type="primary__btn" onClick={() => {
          setIsOpen(!isopen);
        }}>Close</Button>
    </>
  );
}

export default Home;
