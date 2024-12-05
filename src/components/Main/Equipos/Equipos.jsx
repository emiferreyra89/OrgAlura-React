import Card from "../Card/Card";
import "./equipos.css";

export default function Equipos(props) {
  const { primaryColor, secondaryColor, teamName } = props.datos;
  const { colaboradores, eliminarColaborador, favoritos } = props;

  return (
    <>
      { colaboradores.length > 0 &&
        <section
          className="section__equipos"
          style={{ backgroundColor: secondaryColor }}>
          <h3 style={{ borderColor: primaryColor }}>{teamName}</h3>
          <div className="box__equipos">
            {colaboradores.map((colaborador, index) => (
              <Card 
                datos={colaborador} 
                key={index} 
                primaryColor={primaryColor} 
                eliminarColaborador={eliminarColaborador} 
                favoritos={favoritos}
              />
            ))}
          </div>
        </section>
      }
    </>
  );
}
