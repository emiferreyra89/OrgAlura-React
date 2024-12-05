import "./form.css"

export default function BoxInputs(props) {
  const { type } = props;
  const setearCambios = (e) => {
    props.actualizarValor(e.target.value)
  }
  return (
    <div className={`div__boxInputs boxInputs-${type}`}>
      <label>{props.titulo}</label>
      <input 
        placeholder={props.placeholder} 
        required={props.required}
        onChange={setearCambios}
        type={type}
      />
    </div>
  );
}
