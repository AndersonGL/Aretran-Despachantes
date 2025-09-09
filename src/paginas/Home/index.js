import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import "./style.css";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="secao-banner">
          <div className="texto-banner">
            <h1> INTERMEDIAÇÕES & ASSESSORIA DOCUMENTAL</h1>
          </div>
        </section>

        <section className="secao-nossos-clientes">
          <img src="assets/motorista.webp" alt="foto motorista" />
          <div className="texto-secao-nossos-clientes">
            <h2>CLIENTES SATISFEITOS</h2>
            <span>Gabriel Gomes</span>
            <p>
              "Gostaria de agradecer o Aretran pelo comprometimento e entrega
              sou motorista de aplicativo precisava adicionar o EAR e renovar
              minha CNH estou muito contente".
            </p>
          </div>
        </section>

        <section>
          <a
            href="https://api.whatsapp.com/send?phone=5511974559801&text=Ol%C3%A1%2CPedro%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp" aria-label="Contato via WhatsApp">
              Fale conosco no WhatsApp
            </button>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
