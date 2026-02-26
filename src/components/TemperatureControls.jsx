import React from "react";

function TemperatureControls({ reset, increment, decrement }) {
  return (
    <div>
      <button
        onClick={() => {
          increment();
        }}
      >
        + Grado
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            decrement();
          }, 1000);
        }}
      >
        - Grado
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        {" "}
        Reset
      </button>
    </div>
  );
}

export default TemperatureControls;
