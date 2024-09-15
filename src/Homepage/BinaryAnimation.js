import React, { useState, useEffect } from "react";
import "./BinaryAnimation.css";

const BinaryAnimation = ({ speed }) => {
  const [binaryMatrix, setBinaryMatrix] = useState(generateRandomBinary(20));

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryMatrix(generateRandomBinary(20));
    }, speed); // Update interval based on prop

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="matrix">
      {binaryMatrix.map((column, colIndex) => (
        <div key={colIndex} className="binary-column">
          {column.map((bit, rowIndex) => (
            <span key={rowIndex} className={`binary-bit color-${Math.floor(Math.random() * 3)}`}>
              {bit}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

const generateRandomBinary = (cols) => {
  return Array.from({ length: cols }, () => {
    const randomRows = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    return Array.from({ length: randomRows }, () => Math.floor(Math.random() * 2));
  });
};

export default BinaryAnimation;
