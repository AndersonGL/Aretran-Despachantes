import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import './style.css';

export default function Servicos() {

return(
    <div>

   <Header />

   <main>
        <section className="secao-banner-servicos">
          <div className="titulo-banner-servicos">
            <h1>NOSSOS SERVIÇOS</h1>
          </div>
        </section>

        <section className="limitar-secao secao-servicos">
          <h2>CONSULTE-NÓS</h2>
          <div className="container-servicos">
            <div className="box-servico">
              <img src="assets/cnh.png" alt="sorvete sabor oreo"/>
              <h3>Renovação de CNH</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/ipva-2024.png" alt="sorvete sabor pistache"/>
              <h3>Pagamentos de débitos</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/cnh.png" alt="sorvete sabor cookie com avelã"/>
              <h3>Pontuação</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/exame-motorista.png" alt="sorbet sabor kiwi"/>
              <h3>CFC</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/carro.png" alt="sorbet sabor morango"/>
              <h3>Veiculos Aprendidos</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/cnh.png" alt="sorbet limão siciliano"/>
              <h3>Pontos na CNH</h3>
              <p>Lorem Ipsum.</p>
            </div>
          </div>
        </section>

      </main>





  <Footer />
    </div>
)

}
