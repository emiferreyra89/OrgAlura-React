import "./miOrg.css";
import Equipos from "../Equipos/Equipos";

export default function MiOrg(props) {
  
  const {colaboradores, eliminarColaborador, equipos, favoritos} = props

  return (
    <section className="section__miOrg">
      <div className="box_miOrg_title">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="Icono para Formulario" onClick={props.desplegarFormulario}/>
      </div>
      {
        equipos.map((producto)=>{
          return <Equipos 
            datos={producto} 
            key={producto.id} 
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === producto.teamName)}
            eliminarColaborador={eliminarColaborador}
            favoritos={favoritos}
          />
        })
      }
    </section>
  );
}
