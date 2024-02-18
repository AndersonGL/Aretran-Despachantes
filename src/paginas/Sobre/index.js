import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";


import './style.css';

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
            <><span>"Conquistar um novo cliente é sempre bom. Mas manter os de longa data é melhor ainda".</span><span>
      "Desde 2007 atuando e transformando a vida de nossos clientes."</span>
      <span>Parcelamos até em 12x</span></>

          </div>
        </section>

        <section className="container-secao-imagens">
          <div>
            <img src="assets/dando-as-maos.png" alt="foto carro" />
            <img src="assets/cartoes.png" alt="foto cnh" />
          </div>
          
        </section>

        <section>
                <a href='https://wa.me/5511974559801?text=Ol%C3%A1%21%21%21+aretran+quero+tirar+uma+d%C3%BAvida..."'><button className="whatsapp"></button></a>
        </section>
      </main>


      <Footer />
    </div>
  )

}
