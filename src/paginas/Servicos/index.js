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
          <h2>teste</h2>
          <div className="container-servicos">
            <div className="box-servico">
              <img src="assets/cnh.png" alt="renovação de cnh"/>
              <h3>Renovação de CNH</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/ipva-2024.png" alt="pagamentos de débito"/>
              <h3>Pagamentos de débitos</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/reciclagem.png" alt="pontuação"/>
              <h3>Curso de Reciclagem</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/exame-motorista.png" alt="curso de habilitação"/>
              <h3>CFC</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/veiculos.png" alt="veiculos no pátio"/>
              <h3>Veiculos Aprendidos</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/consulta.png" alt="consulta de ponto"/>
              <h3>Pontos na CNH</h3>
              <p>Lorem Ipsum.</p>
            </div>
 <div className="box-servico">
              <img src="assets/veiculos.png" alt="veiculos no pátio"/>
              <h3>Veiculos Aprendidos</h3>
              <p>Lorem Ipsum.</p>
            </div>
            <div className="box-servico">
              <img src="assets/consulta.png" alt="consulta de ponto"/>
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
