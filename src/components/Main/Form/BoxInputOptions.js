import "./form.css";

export default function BoxInputOption(props) {
 const { equipos } = props
 
  const productos = equipos;

  const setearCambios = (e) => {
    props.actualizarValor(e.target.value)
  }

  return (
    <div className="div__boxInputs">
      <label>{props.titulo}</label>
      <select 
        placeholder={props.placeholder}
        onChange={setearCambios}
      >
        <option value={""} hidden defaultValue={""}>Seleccionar equipo</option>
        {productos.map((producto, index) => {
          return <option key={index}>{producto.teamName}</option>;
        })}
      </select>
    </div>
  );
}
