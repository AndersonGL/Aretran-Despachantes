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
            <span>Conquistar um novo cliente é sempre bom. Mas manter os de longa data é melhor ainda.</span>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>      
          </div>
        </section>

        <section className="container-secao-imagens">
          <div>
            <img src="assets/carro.png" alt="foto carro" />
            <img src="assets/cnh.png" alt="foto cnh" />
          </div>
        </section>
      </main>


      <Footer />
    </div>
  )

}
