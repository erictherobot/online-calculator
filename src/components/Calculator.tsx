import { useState, useEffect } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      if (key.match(/^[0-9]$/) || ["+", "-", "*", "/", "."].includes(key)) {
        handleButtonClick(key);
      } else if (key === "Enter" || key === "=") {
        calculateResult();
      } else if (key === "Backspace") {
        clearExpression();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleButtonClick = (value: string) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
  };

  return (
    <div className="p-5 rounded-lg">
      <h1 className="text-3xl font-bold mb-5">Online Calculator</h1>
      <div className="bg-white p-3 mb-5 rounded">
        <input
          type="text"
          value={expression}
          readOnly
          className="w-full text-right p-2"
          placeholder="0"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((number) => (
          <button
            key={number}
            onClick={() => handleButtonClick(number)}
            className="bg-gray-200 p-3 rounded"
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handleButtonClick("0")}
          className="bg-gray-200 col-span-2 p-3 rounded"
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick(".")}
          className="bg-gray-200 p-3 rounded"
        >
          .
        </button>
        {["+", "-", "*", "/"].map((operator) => (
          <button
            key={operator}
            onClick={() => handleButtonClick(operator)}
            className="bg-yellow-400 p-3 rounded"
          >
            {operator}
          </button>
        ))}
        <button
          onClick={calculateResult}
          className="bg-green-400 col-span-2 p-3 rounded"
        >
          =
        </button>
        <button
          onClick={clearExpression}
          className="bg-red-400 col-span-2 p-3 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
