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
  const initialHistory = JSON.parse(localStorage.getItem("history_temp")) || [];
  const [temp, setTemp] = useState(tempInitial);
  const [history, setHistory] = useState(initialHistory);
  const [loading, setLoading] = useState(false);

  const increment = () => {
    const date = new Date();
    const hour = date.toLocaleTimeString();

    if (temp >= 0 && temp < 40) {
      setTemp(temp + 1);
      setHistory([
        ...history,
        {
          id: Math.random() + 1,
          date: hour,
          temp: temp +1,
        },
      ]);
    } else alert(" la temperatura debe estar entre 0 y 40");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const decrement = () => {
    const date = new Date();
    const hour = date.toLocaleTimeString();

    if (temp > 0) {
      setTemp(temp - 1);
      setHistory([
        ...history,
        {
          id: Math.random() + 1,
          date: hour,
          temp: temp -1,
        },
      ]);
    } else alert(" la temperatura debe estar entre 0 y 40");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const reset = () => {
    setTemp(tempInitial);
    setHistory([]);
  };

  const saveInLocalStorage = () => {
    localStorage.setItem("history_temp", JSON.stringify(history));
  };
  saveInLocalStorage();

  return (
    <>
      <div className="app">
        <h1>Controlador de temperatura</h1>
        <TemperatureDisplay temp={temp} />
        <TemperatureControls
          increment={increment}
          decrement={decrement}
          reset={reset}
          temp={temp}
          loading={loading}
        />
        <div>
          <HistoryList history={history} loading={loading} />
        </div>
      </div>
    </>
  );
}
