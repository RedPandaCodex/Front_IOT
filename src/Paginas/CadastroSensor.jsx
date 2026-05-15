import { Cabecalho } from "../Componentes/Cabecalho";
import { Rodape } from "../Componentes/Rodape";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import estilo from "./CadastroSensor.module.css";

const schemaSensor = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  tipo: z.string().min(1, "Tipo é obrigatório"),
  ambiente: z.string().min(1, "Ambiente é obrigatório"),
  descricao: z.string().optional(),
  intervalo: z.string().optional(),
});

export function CadastroSensor() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaSensor),
  });

  const onSubmit = (data) => {
    console.log("Sensor cadastrado:", data);
    navigate("/sensores");
  };

  return (
    <>
      <Cabecalho />
      <div className={estilo.container}>
        <div className={estilo.formContainer}>
          <h1 className={estilo.titulo}>Cadastrar Novo Sensor</h1>

          <form onSubmit={handleSubmit(onSubmit)} className={estilo.formulario}>
            <div className={estilo.campo}>
              <label htmlFor="nome">Nome do Sensor:</label>
              <input
                id="nome"
                type="text"
                {...register("nome")}
                placeholder="Ex: Sensor Exemplo1"
                className={errors.nome ? estilo.erroInput : ""}
              />
              {errors.nome && (
                <span className={estilo.erro}>{errors.nome.message}</span>
              )}
            </div>

            <div className={estilo.campo}>
              <label htmlFor="tipo">Tipo de Sensor:</label>
              <select
                id="tipo"
                {...register("tipo")}
                className={errors.tipo ? estilo.erroInput : ""}
              >
                <option value="">Selecione o tipo</option>
                <option value="temperatura">Temperatura</option>
                <option value="umidade">Umidade</option>
              </select>
              {errors.tipo && (
                <span className={estilo.erro}>{errors.tipo.message}</span>
              )}
            </div>

            <div className={estilo.campo}>
              <label htmlFor="ambiente">Ambiente:</label>
              <select
                id="ambiente"
                {...register("ambiente")}
                className={errors.ambiente ? estilo.erroInput : ""}
              >
                <option value="">Selecione o ambiente</option>
                <option value="ambiente_exemplo1">Exemplo1</option>
                <option value="ambiente_exemplo2">Exemplo2</option>
              </select>
              {errors.ambiente && (
                <span className={estilo.erro}>{errors.ambiente.message}</span>
              )}
            </div>

            <div className={estilo.campo}>
              <label htmlFor="descricao">Descrição (Opcional):</label>
              <textarea
                id="descricao"
                {...register("descricao")}
                placeholder="Descrição adicional sobre o sensor..."
                rows="4"
                className={estilo.textarea}
              />
            </div>

            <div className={estilo.botoes}>
              <button
                type="button"
                onClick={() => navigate("/sensores")}
                className={estilo.botaoVoltar}
              >
                ↩Cancelar
              </button>
              <button type="submit" className={estilo.botaoSalvar}>
                Cadastrar Sensor
              </button>
            </div>
          </form>
        </div>
      </div>
      <Rodape />
    </>
  );
}
