import React from "react";
import { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import HistoryList from "./components/HistoryList";
import "./index.css";

export default function App() {
  //estados

  //estado inicial
  const tempInitial = 20;
  const [temp, setTemp] = useState(tempInitial);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const increment = () => {
    const date = new Date();
    const hour = date.toLocaleTimeString();

    if (temp >= 0 && temp < 40) {
      setTemp(temp + 1);
      setHistory([
        ...history,
        {
          date: hour,
          temp: temp,
        },
      ]);
    } else alert(" la temperatura debe estar entre 0 y 40");
  };
  const decrement = () => {
    const date = new Date();
    const hour = date.toLocaleTimeString();

    if (temp > 0) {
      setTemp(temp - 1);
      setHistory([
        ...history,
        {
          date: hour,
          temp: temp,
        },
      ]);
    } else alert(" la temperatura debe estar entre 0 y 40");
    setLoading(!loading);
  };
  const reset = () => {
    setTemp(tempInitial);
    setHistory([]);
  };
  const timeLoading = (setLoading) => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  };

  const saveInLocalStorage = () => {
    localStorage.setItem("history_temp", JSON.stringify(history));
  };
  saveInLocalStorage();
  console.log(localStorage.getItem("history_temp"));
  return (
    <>
      <div className="app">
        <h1>Controlador de temperatura</h1>
        <TemperatureDisplay temp={temp} />
        <TemperatureControls
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
        <div>
          <HistoryList
            history={history}
            loading={loading}
            setLoading={setLoading}
            timeLoading={timeLoading}
          />
        </div>
      </div>
    </>
  );
}
