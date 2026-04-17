import { Cabecalho } from '../Componentes/Cabecalho';
import { Rodape } from '../Componentes/Rodape';
import { useNavigate } from 'react-router-dom';
import estilo from './Sensores.module.css'; 

export function Sensores() {
    const navigate = useNavigate();

    const sensores = [
        { id: 1, nome: "Sensor Exemplo1", tipo: "Temperatura", ambiente: "Exemplo1", status: "Ativo", ultimaLeitura: "23.5°C" },
        { id: 2, nome: "Sensor Exemplo2", tipo: "Umidade", ambiente: "Exemplo2", status: "Ativo", ultimaLeitura: "48%" },
    ];

    return (
        <>
            <Cabecalho />
            <div className={estilo.container}>
                <div className={estilo.header}>
                    <h1 className={estilo.titulo}>Sensores</h1>
                    <button 
                        className={estilo.botaoAdicionar}
                        onClick={() => navigate('/cadastro-sensor')}
                    >
                        + Adicionar Sensor
                    </button>
                </div>
                
                <div className={estilo.tabelaContainer}>
                    <table className={estilo.tabela}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Ambiente</th>
                                <th>Status</th>
                                <th>Última Leitura</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sensores.map(sensor => (
                                <tr key={sensor.id}>
                                    <td>{sensor.nome}</td>
                                    <td>{sensor.tipo}</td>
                                    <td>{sensor.ambiente}</td>
                                    <td>
                                        <span className={`${estilo.status} ${estilo[sensor.status.toLowerCase()]}`}>
                                            {sensor.status}
                                        </span>
                                    </td>
                                    <td>{sensor.ultimaLeitura}</td>
                                    <td>
                                        <div className={estilo.acoes}>
                                            <button 
                                                className={estilo.botaoEditar}
                                                onClick={() => navigate(`/edicao-sensor/${sensor.id}`)}
                                            >
                                                Editar
                                            </button>
                                            <button className={estilo.botaoExcluir}>
                                                Excluir
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Rodape />
        </>
    );
}