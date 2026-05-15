import { Cabecalho } from "../Componentes/Cabecalho";
import { Menu } from "../Componentes/Menu";
import { Rodape } from "../Componentes/Rodape";
import estilo from "./Inicial.module.css";

export function Inicial() {
  return (
    <>
      <Cabecalho />
      <Menu />
      <Rodape />
    </>
  );
}
