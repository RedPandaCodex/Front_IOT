import estilo from "./Cabecalho.module.css";
import logo from "../assets/Logo.png";

export function Cabecalho() {
  return (
    <header className={estilo.cabecalho}>
      <img src={logo} alt="Logo Smartcity" className={estilo.logo} />
    </header>
  );
}
