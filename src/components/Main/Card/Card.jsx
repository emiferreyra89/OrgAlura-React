import "./card.css";
import { MdDeleteForever } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function Card(props) {
  const { nombre, puesto, foto, id, fav } = props.datos;
  const { primaryColor, eliminarColaborador, favoritos } = props;
  const alt = `Foto de ${nombre}`;
 
  return (
    <article className="article__card">
      <MdDeleteForever onClick={()=>eliminarColaborador(id)} className="eliminar" />
      <div
        className="box__encabezado"
        style={{ backgroundColor: primaryColor }}>
        <img src={foto} alt={alt}></img>
      </div>
      <div className="box__info-instructor">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {
          fav ? 
          <GoHeartFill className="fav" color="red" onClick={() => favoritos(id)}/> : <GoHeart className="fav" onClick={() => favoritos(id)}/>
        }
      </div>
    </article>
  );
}
