import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
/* import Home from "../../assets/images/home.png"; */
import "../../assets/styles/Tabla.css";

function calcularMedia(datos) {
  const suma = datos.reduce((acc, valor) => acc + valor, 0);
  return (suma / datos.length).toFixed(2);
}

function calcularModa(datos) {
  const conteo = {};
  datos.forEach((valor) => {
    conteo[valor] = (conteo[valor] || 0) + 1;
  });

  let moda = [];
  let maxFrecuencia = 0;
  for (const valor in conteo) {
    if (conteo[valor] > maxFrecuencia) {
      moda = [valor];
      maxFrecuencia = conteo[valor];
    } else if (conteo[valor] === maxFrecuencia) {
      moda.push(valor);
    }
  }

  return moda.join(", ");
}

function calcularMediana(datos) {
  const datosOrdenados = datos.slice().sort((a, b) => a - b);
  const mitad = Math.floor(datosOrdenados.length / 2);
  if (datosOrdenados.length % 2 === 0) {
    return ((datosOrdenados[mitad - 1] + datosOrdenados[mitad]) / 2).toFixed(2);
  } else {
    return datosOrdenados[mitad].toFixed(2);
  }
}

function calcularDesviacionEstandar(datos) {
  const media = calcularMedia(datos);
  const sumatoriaDiferenciasCuadrado = datos.reduce(
    (acc, valor) => acc + Math.pow(valor - media, 2),
    0
  );
  const desviacionEstandar = Math.sqrt(
    sumatoriaDiferenciasCuadrado / datos.length
  ).toFixed(2);
  return desviacionEstandar;
}

function calcularTablaDeFrecuencias(datos) {
  const datosOrdenados = datos.slice().sort((a, b) => a - b);
  const k = Math.ceil(1 + 3.322 * Math.log10(datosOrdenados.length));
  const N = datosOrdenados.length;
  const R = datosOrdenados[N - 1] - datosOrdenados[0];
  const Ai = Math.round(R / k);

  let Li = datosOrdenados[0];
  const tablaFrecuencias = [];

  for (let i = 0; i < k; i++) {
    const Ls = Li + Ai;
    const xi = ((Li + Ls) / 2).toFixed(2);
    const fi = datosOrdenados.filter((dato) => dato >= Li && dato < Ls).length;
    const fr = (fi / datosOrdenados.length).toFixed(2);
    const porcentaje = (fr * 100).toFixed(2);
    const F = (
      fi + (i > 0 ? parseFloat(tablaFrecuencias[i - 1].F) : 0)
    ).toFixed(2);
    const fx = (parseFloat(xi) * parseFloat(fi)).toFixed(2);
    const fx2 = (parseFloat(xi) * parseFloat(xi) * parseFloat(fi)).toFixed(2);

    tablaFrecuencias.push({ Li, Ls, x: xi, fi, fr, porcentaje, F, fx, fx2 });

    Li = Ls;
  }

  const RInt = Math.round(R);

  return { tablaFrecuencias, k, Ai, R: RInt };
}

function calcularS(datos) {
  const media = calcularMedia(datos);
  const sumatoriaDiferenciasCuadrado = datos.reduce(
    (acc, valor) => acc + Math.pow(valor - media, 2),
    0
  );
  const S = Math.sqrt(
    sumatoriaDiferenciasCuadrado / (datos.length - 1)
  ).toFixed(2);
  return S;
}

function calcularS2(datos) {
  const media = calcularMedia(datos);
  const sumatoriaDiferenciasCuadrado = datos.reduce(
    (acc, valor) => acc + Math.pow(valor - media, 2),
    0
  );
  const S2 = (sumatoriaDiferenciasCuadrado / (datos.length - 1)).toFixed(2);
  return S2;
}

function calcularN(datos) {
  return datos.length;
}

function Graficas() {
  const [loading, setLoading] = useState(true);
  const datos = [
    23.3, 31.3, 12.1, 29, 28, 25.5, 22.3, 22.2, 34, 23.3, 25.6, 23.9, 21.1, 20,
    27, 25.5, 25.5, 29, 30, 34,
  ].map((valor) => parseFloat(valor));
  const media = calcularMedia(datos);
  const moda = calcularModa(datos);
  const mediana = calcularMediana(datos);
  const desviacionEstandar = calcularDesviacionEstandar(datos);
  const { tablaFrecuencias, k, Ai, R } = calcularTablaDeFrecuencias(datos);

  const S = calcularS(datos);
  const S2 = calcularS2(datos);
  const N = calcularN(datos);

  const chartData = {
    series: tablaFrecuencias.map((fila) => parseFloat(fila.porcentaje)),
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: tablaFrecuencias.map(
        (fila) =>
          `Li ${fila.Li} - Ls ${fila.Ls} se encontraron ${fila.fi}x`
      ),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
     {/*  <div className="contenedor-q">
        <img src={Home} alt="caos" className="imagen-pollo" />
      </div> */}
      <div className="row">
        <center>
          <div className="col-md-7 col-sm-12 mt-9">
            <div className="card text-center">
              <div className="card-header">Gráfica de pastel</div>
              <div className="card-body">
                <div className="text-center">
                  {loading ? (
                    <div className="cardcititita d-flex justify-content-center align-items-center">
                      <div className="cardcititita_skeleton cardcititita_title"></div>
                    </div>
                  ) : (
                    <div id="chart">
                      <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="pie"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="card-footer text-body-secondary">
                Datos de temperatura
              </div>
            </div>
          </div>
        </center>
        {/* ---------------------------------------------------------------------------------- */}
        <div className="tabla roe-md-6 col-sm-12 mt-5">
          <div className="card text-center ">
            <div className="card-header">Datos Obtenidos</div>
            <div className="card-body">
              <h5 className="card-title">Datos de ingreso:</h5>
              <p>{datos.join(", ")}</p>
              <div className="card-footer text-body-secondary d-flex justify-content-between">
                <h5 className="card-title">Resultados:</h5>
                <p>Media: {media}</p>
                <p>Moda: {moda}</p>
                <p>Mediana: {mediana}</p>
                <p>Desviación Estándar: {desviacionEstandar}</p>
                <p>K: {k}</p>
                <p>R: {R}</p>
                <p>S: {S}</p>
                <p>S²: {S2}</p>
                <p>N: {N}</p>
                <p>Ai: {Ai}</p>
              </div>
            </div>
            <div className="card-footer text-body-secondary ">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Li</th>
                      <th>Ls</th>
                      <th>x</th>
                      <th>fi</th>
                      <th>fr</th>
                      <th>Porcentaje (%)</th>
                      <th>F</th>
                      <th>fx</th>
                      <th>fx²</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tablaFrecuencias.map((fila, index) => (
                      <tr key={index}>
                        <td>{fila.Li}</td>
                        <td>{fila.Ls}</td>
                        <td>{fila.x}</td>
                        <td>{fila.fi}</td>
                        <td>{fila.fr}</td>
                        <td>{fila.porcentaje}</td>
                        <td>{fila.F}</td>
                        <td>{fila.fx}</td>
                        <td>{fila.fx2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graficas;
