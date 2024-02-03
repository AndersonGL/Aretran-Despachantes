import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../paginas/Home";
import Servicos from "../paginas/Servicos";
import Sobre from "../paginas/Sobre";

export default function Rotas() {

return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='servicos' element={<Servicos />} />
            <Route path='sobre' element={<Sobre />} />
        </Routes>
    </BrowserRouter>

)

}






