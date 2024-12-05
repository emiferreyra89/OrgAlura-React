import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" style={{backgroundImage:"url(/img/rodapie_ReactOrg.png)"}}>
      <div className="box__redes">
        <a href="https://app.aluracursos.com">
          <img src="/img/facebook.png" alt="Icono Facebook" />
        </a>
        <a href="https://app.aluracursos.com">
          <img src="/img/twitter.png" alt="Icono Twitter" />
        </a>
        <a href="https://app.aluracursos.com">
          <img src="/img/instagram.png" alt="Icono Instagram" />
        </a>
      </div>
      <img src="/img/logo-rodapie_ReactOrg.png" alt="Logo de la pagina" />
      <strong>Desarrollado por Emiliano G. Ferreyra</strong>
    </footer>
  );
}
