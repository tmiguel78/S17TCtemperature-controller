import React from "react";

function HistoryList({ history, loading, timeLoading, setLoading }) {
  return (
    <>
      <div>
        {loading ? <p>Cargando...</p> : ""}
        <ul>
          {history.map((h) => (
            <li key={Math.random() + 1}>
              <p>Hora: {h.date} </p>
              <p>Temperatura: {h.temp}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HistoryList;
