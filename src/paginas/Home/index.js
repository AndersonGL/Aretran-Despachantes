import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import './style.css'


export default function Home() {

    return (
 <div>


   < Header />
    
   

        <main>
        <section className="secao-banner">
            <div className="texto-banner">
                <h1>  ASSESSORIA DESPACHANTES ASSOCIADOS </h1>
            </div>
         </section>

         <section className="secao-nossos-servicos">
         <img src="assets/cnh.png" alt="foto motorista" />
         <div className="texto-secao-nossos-servicos">
            <h2>NOSSOS SERVIÇOS</h2>
           <p> Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           </p>
    
         </div>
         </section>

         <section className="secao-nossos-clientes">
            <div className="texto-secao-nossos-clientes">
                <h2>CLIENTES SATISFEITOS</h2>
                <span>Lorem Ipsum</span>
                <p>
                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>
            <img src="assets/motorista.png" alt="foto de uma cnh" />
        </section>


        <section className="secao-sobre-nos">
           <img src="assets/pessoas.png" alt="foto joven no carro" />
           <div className="texto-secao-sobre-nos">
            <h2>SOBRE NÓS</h2>
            <span>Atuando mais de 17 anos no mercado.</span>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
           </div>
           
        </section>
        </main>

        < Footer />


  </div>

    )

}


