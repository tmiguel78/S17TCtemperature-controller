import React from "react";

function TemperatureDisplay({ temp }) {
  return (
    <>
      <div>
        <h2>Temp: {temp}</h2>
        {temp >= 15 && temp <= 25 ? (
          <p className="agradable"> Temperatura Agradable</p>
        ) : temp < 15 ? (
          <p className="frio"> Hace Frio</p>
        ) : temp > 25 ? (
          <p className="calor">Hace Calor</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default TemperatureDisplay;
