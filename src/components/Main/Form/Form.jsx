import { useState } from "react";
import {v4 as uuid} from "uuid";
import  hexToRgba  from "hex-to-rgba";
import "./form.css";
import BoxInputs from "./BoxInput";
import BoxInputOption from "./BoxInputOptions";
import Boton from "./Boton";

export default function Form(props) {
  const { registrarColaborador, registrarEquipo, equipos } = props

  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [nombreEquipo, setNombreEquipo] = useState("");
  const [color, setColor] = useState("");

  const mensaje = (e) => {
    e.preventDefault();
    const instructor = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(instructor);
  };

  const mensajeEquipo = (e) => {
    e.preventDefault();
    const equipo = {
      id:uuid(),
      teamName:nombreEquipo,
      primaryColor:color,
      secondaryColor:hexToRgba(color, 0.6)
    };
    registrarEquipo(equipo);
  };

  return (
    <section className="section__form">
      <form onSubmit={mensaje}>
        <h2>Rellena el formulario para crear un Colaborador.</h2>
        <BoxInputs
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          value={nombre}
          actualizarValor={setNombre}
        />
        <BoxInputs
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          value={puesto}
          actualizarValor={setPuesto}
        />
        <BoxInputs
          titulo="Foto"
          placeholder="Ingresar foto"
          required
          value={foto}
          actualizarValor={setFoto}
        />
        <BoxInputOption
          titulo="Equipo"
          placeholder="Ingresar equipo"
          value={equipo}
          actualizarValor={setEquipo}
          equipos={equipos}
        />
        <Boton>Crear Colaborador</Boton>
      </form>
      <form onSubmit={mensajeEquipo}>
        <h2>Rellena el formulario para crear un Equipo.</h2>
        <BoxInputs
          titulo="Nombre del Equipo"
          placeholder="Ingresar nombre"
          required
          value={nombreEquipo}
          actualizarValor={setNombreEquipo}
        />
        <BoxInputs
          titulo="Color"
          placeholder="Ingresar Color HEX(#xxxxxx)"
          required
          type="color"
          value={color}
          actualizarValor={setColor}
        />
        <Boton>Crear Equipo</Boton>
      </form>
    </section>
  );
}
