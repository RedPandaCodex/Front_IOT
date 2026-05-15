import { Cabecalho } from "../Componentes/Cabecalho";
import { Rodape } from "../Componentes/Rodape";
import { useState } from "react";
import estilo from "./Historico.module.css";

export function Historico() {
  const [filtro, setFiltro] = useState("todos");

  const dadosHistoricos = [
    {
      id: 1,
      sensor: "Sensor Exemplo 1",
      tipo: "Temperatura",
      valor: "23.5°C",
      data: "18-11-2025 10:30:00",
      ambiente: "Ambiente Exemplo1",
    },
    {
      id: 2,
      sensor: "Sensor Exemplo 2",
      tipo: "Umidade",
      valor: "48%",
      data: "18-11-2025 10:30:00",
      ambiente: "Ambiente Exemplo2",
    },
  ];

  const dadosFiltrados =
    filtro === "todos"
      ? dadosHistoricos
      : dadosHistoricos.filter((dado) => dado.tipo.toLowerCase() === filtro);

  return (
    <>
      <Cabecalho />
      <div className={estilo.container}>
        <h1 className={estilo.titulo}>Dados Históricos</h1>

        <div className={estilo.filtros}>
          <button
            className={`${estilo.filtro} ${filtro === "todos" ? estilo.ativo : ""}`}
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>
          <button
            className={`${estilo.filtro} ${filtro === "temperatura" ? estilo.ativo : ""}`}
            onClick={() => setFiltro("temperatura")}
          >
            Temperatura
          </button>
          <button
            className={`${estilo.filtro} ${filtro === "umidade" ? estilo.ativo : ""}`}
            onClick={() => setFiltro("umidade")}
          >
            Umidade
          </button>
        </div>

        <div className={estilo.graficoContainer}>
          <div className={estilo.graficoPlaceholder}>
            <p>Dados de {filtro === "todos" ? "todos os sensores" : filtro}</p>
          </div>
        </div>

        <div className={estilo.tabelaContainer}>
          <h2 className={estilo.subtitulo}>Registros Detalhados</h2>
          <div className={estilo.tabela}>
            {dadosFiltrados.map((dado) => (
              <div key={dado.id} className={estilo.linha}>
                <div className={estilo.coluna}>
                  <strong>{dado.sensor}</strong>
                  <span>{dado.ambiente}</span>
                </div>
                <div className={estilo.coluna}>
                  <span className={estilo.tipo}>{dado.tipo}</span>
                </div>
                <div className={estilo.coluna}>
                  <span className={estilo.valor}>{dado.valor}</span>
                </div>
                <div className={estilo.coluna}>
                  <span className={estilo.data}>{dado.data}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}
