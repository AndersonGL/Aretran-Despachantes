import { Link } from "react-router-dom";

import './style.css'

export default function Header() {
    return(
    <header>
      <div className="limitar-secao">
        <img src="assets/aretran.png" alt="logomarca" />
        <nav>
          <Link className="link-topo" to="/">Home</Link>
          <Link className="link-topo" to="/servicos">Serviços</Link>
          <Link className="link-topo" to="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}