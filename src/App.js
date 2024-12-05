import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Main/Form/Form";
import MiOrg from "./components/Main/MiOrg/MiOrg";
import Footer from "./components/Footer/Footer";
import dataInstructores from "./components/Main/MiOrg/DataInstructor";
import dataTeam from "./components/Main/MiOrg/DataTeam";

function App() {
  
  const infoColaboradores = dataInstructores();
  const infoEquipos = dataTeam();
  const [mostrar, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState(infoColaboradores);
  const [equipos, actualizarEquipos] = useState(infoEquipos);

  const desplegarFormulario = () => {
    actualizarMostrar(!mostrar);
  };

  //Registrar colaborador
  function registrarColaborador(colaborador) {
    //spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Registrar Equipo
  function registrarEquipo(equipoNuevo) {
    //Spread Operator
    actualizarEquipos([...equipos,equipoNuevo])
    
  }

  //Eliminar colaborador
  function eliminarColaborador(id) {
    const updateListColab = colaboradores.filter(colaborador => colaborador.id !== id );
    actualizarColaboradores(updateListColab);
  }

  //Marcar como favorito
  function favoritos(id) {
    const colaboradoresFavoritos = colaboradores.map( colaborador => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    });
    actualizarColaboradores(colaboradoresFavoritos);
  }
 
  return (
    <div className="App">
      <Header />
      {mostrar ? 
        <Form 
          registrarColaborador={registrarColaborador}  
          registrarEquipo={registrarEquipo}
          equipos={equipos}
        /> : <></>}
      <MiOrg 
        desplegarFormulario={desplegarFormulario} 
        colaboradores={colaboradores} 
        eliminarColaborador={eliminarColaborador} 
        equipos={equipos} 
        favoritos={favoritos}
      />
      <Footer />
    </div>
  );
}

export default App;
