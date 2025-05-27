import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import "./style.css";

export default function Sobre() {
  return (
    <div>
      <Header />

      <main>
        <section className="secao-banner-sobre">
          <div className="titulo-banner-sobre">
            <h1>O ARETRAN</h1>
          </div>
        </section>

        <section className="container-secao-sobre-nos">
          <div className="limitar-secao">
            <h2>Sobre Nós</h2>

            <p class="sobre">
              "Desde 2007 atuando e transformando a vida de nossos clientes."
            </p>
            <p class="sobre">
              "Conquistar um novo cliente é sempre bom. Mas manter os de longa
              data é melhor ainda".
            </p>
            <p class="sobre">Parcelamos am até 12x</p>

            <img src="assets/cartoes.webp" alt="pagamentos" />
          </div>
        </section>

        <section>
          <a href='https://wa.me/5511974559801?text=Ol%C3%A1%21%21%21+aretran+quero+tirar+uma+d%C3%BAvida..."'>
            <button className="whatsapp"></button>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
