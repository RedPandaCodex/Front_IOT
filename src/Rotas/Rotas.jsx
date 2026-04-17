// Rotas/Rotas.jsx
import { Routes, Route } from "react-router-dom";
import { Inicial } from "../Paginas/Inicial";
import { Ambientes } from "../Paginas/Ambientes";
import { Sensores } from "../Paginas/Sensores";
import { Historico } from "../Paginas/Historico";
import { CadastroSensor } from "../Paginas/CadastroSensor";
import { EdicaoSensor } from "../Paginas/EdicaoSensor";

export function Rotas(){
    return(
        <Routes basename="/scrm-11">
            <Route path="/" element={<Inicial />} />
            <Route path="/ambientes" element={<Ambientes />} />
            <Route path="/sensores" element={<Sensores />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/cadastro-sensor" element={<CadastroSensor />} />
            <Route path="/edicao-sensor/:id" element={<EdicaoSensor />} />
        </Routes>
    )
}