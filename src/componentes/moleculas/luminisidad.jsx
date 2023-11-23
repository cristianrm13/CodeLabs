import React, { useState } from "react";
import "../../assets/styles/Lux.css"

const Lux = () => {
  const temperatureData = [
    20, 22, 25, 26, 24, 22, 23, 21, 25, 26
];

  // Calcular la media
  const mean =
    temperatureData.reduce((acc, value) => acc + value, 0) /
    temperatureData.length;

  // Calcular la mediana
  const sortedData = temperatureData.slice().sort((a, b) => a - b);
  const median =
    sortedData.length % 2 === 0
      ? (sortedData[sortedData.length / 2 - 1] +
          sortedData[sortedData.length / 2]) /
        2
      : sortedData[Math.floor(sortedData.length / 2)];

  // Calcular la moda
  const frequencyMap = {};
  temperatureData.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });
  const mode = Object.keys(frequencyMap).reduce((a, b) =>
    frequencyMap[a] > frequencyMap[b] ? a : b
  );

  // Calcular la desviación estándar
  const variance =
    temperatureData.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0) /
    temperatureData.length;
  const standardDeviation = Math.sqrt(variance);

  return (
    <div>
      <h2>Tabla de Frecuencia</h2>
      <table>
        <thead>
          <tr>
            <th>LUMINOSIDAD</th>
            <th>LUX</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí deberías calcular las frecuencias de cada temperatura y mostrarlas en la tabla */}
        </tbody>
      </table>

      <h2>Estadísticas</h2>
      <p>Media: {mean}</p>
      <p>Mediana: {median}</p>
      <p>Moda: {mode}</p>
      <p>Desviación Estándar: {standardDeviation}</p>
    </div>
  );
};

export default Lux;
