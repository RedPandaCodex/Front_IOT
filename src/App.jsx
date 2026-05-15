import { BrowserRouter, HashRouter } from "react-router-dom";
import { Rotas } from "./Rotas/Rotas";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Rotas />
    </HashRouter>
  );
}

export default App;
