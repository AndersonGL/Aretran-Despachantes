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
<<<<<<< HEAD
            <span>"Conquistar um novo cliente é sempre bom. Mas manter os de longa data é melhor ainda".</span>
            <span>
           "Desde 2007 atuando e transformando a vida de nossos clientes."</span>
           <span>Parcelamos até em 12x</span>
=======
            <p>"Conquistar um novo cliente é sempre bom. Mas manter os de longa data é melhor ainda".</p>
            <p>
           "Desde 2007 atuando e transformando a vida de nossos clientes."</p>
          
>>>>>>> c786b16bf3c415e2c3f3eef358cff99cb0a680f0

          </div>
        </section>

        <section className="container-secao-imagens">
          <div>
            <img src="assets/dando-as-maos.png" alt="foto carro" />
            <img src="assets/cartoes.png" alt="foto cnh" />
          </div>
          
        </section>
<<<<<<< HEAD
        
=======


 <span>Parcelamos em 12x</span>
>>>>>>> c786b16bf3c415e2c3f3eef358cff99cb0a680f0
      </main>


      <Footer />
    </div>
  )

}
