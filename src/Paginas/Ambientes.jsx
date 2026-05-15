import { Cabecalho } from "../Componentes/Cabecalho";
import { Rodape } from "../Componentes/Rodape";
import estilo from "./Ambientes.module.css";

export function Ambientes() {
  const ambientes = [
    {
      id: 1,
      nome: "Ambiente Exemplo1",
      temperatura: "20°C",
      umidade: "45%",
      sensores: 3,
    },
    {
      id: 2,
      nome: "Ambiente Exemplo2",
      temperatura: "24°C",
      umidade: "48%",
      sensores: 5,
    },
  ];

  return (
    <>
      <Cabecalho />
      <div className={estilo.container}>
        <h1 className={estilo.titulo}>Ambientes Monitorados</h1>
        <div className={estilo.gridAmbientes}>
          {ambientes.map((ambiente) => (
            <div key={ambiente.id} className={estilo.cardAmbiente}>
              <div className={estilo.headerCard}>
                <h3>{ambiente.nome}</h3>
                <span className={estilo.status}>● Ativo</span>
              </div>
              <div className={estilo.dados}>
                <div className={estilo.dadoItem}>
                  <span className={estilo.label}>Temperatura</span>
                  <span className={estilo.valor}>{ambiente.temperatura}</span>
                </div>
                <div className={estilo.dadoItem}>
                  <span className={estilo.label}>Umidade</span>
                  <span className={estilo.valor}>{ambiente.umidade}</span>
                </div>
                <div className={estilo.dadoItem}>
                  <span className={estilo.label}>Sensores</span>
                  <span className={estilo.valor}>{ambiente.sensores}</span>
                </div>
              </div>
              <button className={estilo.botaoDetalhes}>Ver Detalhes</button>
            </div>
          ))}
        </div>
      </div>
      <Rodape />
    </>
  );
}
