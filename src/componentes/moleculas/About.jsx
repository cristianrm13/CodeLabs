import React from "react";
import "../../assets/styles/About.css"
import Logo from "../../assets/images/Logo.png";
import Pollo from "../../assets/images/About.png"

const About = () => {
  return (
    <div>
      <div className="contenedor-q">
        <img src={Pollo} alt="pepe el pollo" className="imagen-pollo" />
      </div>
      <div className="about">
        <div className="card-q">
          <div className="imge">
            <div className="Usericon">
              <img
                src={Logo}
                height="60"
                alt="CAO's Soft Logo"
                loading="lazy"
              />
            </div>
            <div className="UserName"> Cristian Gerardo Ramos</div>
            <div className="Id"> Product Owner</div>
          </div>
          <div className="Description">
            {" "}
            Soy estudiante de la UP, y estar acargo de este proyecto me ha dado
            nuevos conocimientos y nuevas ideas de trabajo para implentar a
            futuro.
          </div>
          <div className="social-media">
            <a href="#">
              <svg></svg>
            </a>
          </div>
        </div>

        <div className="card-q">
          <div className="imge">
            <div className="Usericon">
              <img
                src={Logo}
                height="60"
                alt="CAO's Soft Logo"
                loading="lazy"
              />
            </div>
            <div className="UserName"> Alan David Balbuena</div>
            <div className="Id">Scrum Master</div>
          </div>
          <div className="Description">
            {" "}
            Soy estudiante en UP, He trabajado en diferentes proyectos de gran
            relevancia, y este nuevo proyecto ha sido uy innvador, estar como
            lider Scrum me ha echo tener en cuenta nuevos aspectos.
          </div>
          <div className="social-media">
            <a href="#">
              <svg></svg>
            </a>
          </div>
        </div>

        <div className="card-q">
          <div className="imge">
            <div className="Usericon">
              <img
                src={Logo}
                height="60"
                alt="CAO's Soft Logo"
                loading="lazy"
              />
            </div>
            <div className="UserName"> Luis Osvaldo Pérez</div>
            <div className="Id">Dieñador UI</div>
          </div>
          <div className="Description">
            Soy estudiante en UP, especilizado en software, me ha sido una gran
            oportunidad de estar acargo del diseño en este proyecto.
          </div>
          <div className="social-media">
            <a href="#">
              <svg></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
