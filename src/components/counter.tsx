import { useState } from "react";
const messages: string[] = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Counter() {
  const [step, setStep] = useState<number>(1);
  //   const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step: {step} : {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            className="previous"
            onClick={handlePrevious}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            Previous
          </button>
          <button
            className="next"
            onClick={handleNext}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
