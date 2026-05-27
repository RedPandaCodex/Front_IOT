import * as estilo from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();

  return (
    <div className={estilo.menuContainer}>
      <nav className={estilo.menuGrid}>
        <button
          onClick={() => navigate("/envolvidos")}
          className={estilo.menuItem}
        >
          Envolvidos
        </button>
        <button
          onClick={() => navigate("/ambientes")}
          className={estilo.menuItem}
        >
          Ambientes
        </button>
        <button
          onClick={() => navigate("/sensores")}
          className={estilo.menuItem}
        >
          Sensores
        </button>
        <button
          onClick={() => navigate("/historico")}
          className={estilo.menuItem}
        >
          Histórico
        </button>
      </nav>
    </div>
  );
}
