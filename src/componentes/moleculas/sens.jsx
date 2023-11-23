import React from 'react';
import "../../assets/styles/Sens.css";

const Sens = () => {
  return (
    <>
      <div className='er-m'>
        <div className="results-summary-container">
          <div className="confetti">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="confetti-piece"></div>
            ))}
          </div>
          <div className="results-summary-container__result">
            <div className="heading-tertiary">Temperatura</div>
            <div className="result-box">
              <div className="heading-primary">78 °C</div>
              {/* <p className="result">...</p> */}
            </div>
            <div className="result-text-box">
              <div className="heading-secondary">excelente</div>
              <p className="paragraph">
                la temperatura es satisfactoria para la incubacion
              </p>
            </div>
            {/* <div className="summary__cta">
          <button className="btn btn__continue">Continue</button>
        </div> */}
          </div>
        </div>

        <div className="results-summary-container">
          <div className="confetti">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="confetti-piece"></div>
            ))}
          </div>
          <div className="results-summary-container__result">
            <div className="heading-tertiary">Vibracion</div>
            <div className="result-box">
              <div className="heading-primary">0.0001</div>
              {/* <p className="result">...</p> */}
            </div>
            <div className="result-text-box">
              <div className="heading-secondary">excelente</div>
              <p className="paragraph">
                la temperatura es satisfactoria para la incubacion
              </p>
            </div>
            {/* <div className="summary__cta">
          <button className="btn btn__continue">Continue</button>
        </div> */}
          </div>
        </div>

        <div className="results-summary-container">
          <div className="confetti">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="confetti-piece"></div>
            ))}
          </div>
          <div className="results-summary-container__result">
            <div className="heading-tertiary">Luminosidad</div>
            <div className="result-box">
              <div className="heading-primary">7 LUX</div>
              {/* <p className="result">...</p> */}
            </div>
            <div className="result-text-box">
              <div className="heading-secondary">excelente</div>
              <p className="paragraph">
                la temperatura es satisfactoria para la incubacion
              </p>
            </div>
            {/* <div className="summary__cta">
          <button className="btn btn__continue">Continue</button>
        </div> */}
          </div>
        </div>

        <div className="results-summary-container">
          <div className="confetti">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="confetti-piece"></div>
            ))}
          </div>
          <div className="results-summary-container__result">
            <div className="heading-tertiary">Sonido</div>
            <div className="result-box">
              <div className="heading-primary">1 db</div>
              {/* <p className="result">...</p> */}
            </div>
            <div className="result-text-box">
              <div className="heading-secondary">excelente</div>
              <p className="paragraph">
                la temperatura es satisfactoria para la incubacion
              </p>
            </div>
            {/* <div className="summary__cta">
          <button className="btn btn__continue">Continue</button>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sens;
