import React from "react";

function HistoryList({ history, loading }) {
  return (
    <>
      <div>
        {history?.length === 0 && !loading && <p>No hay historial</p>}
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {history.map((h) => (
              <li key={h.id + h.date}>
                <p>Hora: {h.date} ➞ Temperatura: {h.temp}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default HistoryList;
