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
          
          

          <div className="container-servicos">

          <div className="box-servico">
              <img src="assets/consulta.webp" alt="renovação de cnh"/>
              <h3>Pontos na CNH</h3>
              <p></p>
            </div>

              <div className="box-servico">
              <img src="assets/cnh.webp" alt="renovação de cnh"/>
              <h3>Renovação da CNH</h3>
              <p></p>
            </div>

            <div className="box-servico">
              <img src="assets/transferencia.webp" alt="renovação de cnh"/>
              <h3>Alteração de endereço de CNH</h3>
              <p></p>
            </div>

            <div className="box-servico">
              <img src="assets/rebaixamento.webp" alt="renovação de cnh"/>
              <h3>Rebaixamento de categoria</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/cumprimento.webp" alt="renovação de cnh"/>
              <h3>Inicío de cumprimento de suspensão</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/dados.webp" alt="renovação de cnh"/>
              <h3>Alteração dos dados da CNH</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/primeira.webp" alt="renovação de cnh"/>
              <h3>Primeira habilitação</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/definitiva.webp" alt="renovação de cnh"/>
              <h3>CNH definitiva</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/ear.webp" alt="renovação de cnh"/>
              <h3>Inclusão de EAR na habilitação</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/cnh.webp" alt="renovação de cnh"/>
              <h3>Segunda via de CNH</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/cnh-suspensa.webp" alt="renovação de cnh"/>
              <h3>CNH suspensa</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/cnh-cassada.webp" alt="renovação de cnh"/>
              <h3>CNH cassada</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/reciclagem.webp" alt="pontuação"/>
              <h3>Curso de Reciclagem</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/veiculos.webp" alt="veiculos no pátio"/>
              <h3> Liberação de veiculos aprendidos</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/ipva-2024.webp" alt="pagamentos de débito"/>
              <h3>Pagamentos de débitos com crédito</h3>
              <p></p>
            </div>

            <div className="box-servico">
              <img src="assets/licenciamento.webp" alt="pontuação"/>
              <h3>Licicenciamento</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/veiculo-obito.webp" alt="curso de habilitação"/>
              <h3>Veiculos com óbito</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/documento.webp" alt="curso de habilitação"/>
              <h3>Transferência de propriedade</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/crv-verso.webp" alt="curso de habilitação"/>
              <h3>Segunda via de transferência de veiculos</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/recurso.webp" alt="veiculos no pátio"/>
              <h3> Recursos de multas</h3>
              <p></p>
            </div>
            <div className="box-servico">
              <img src="assets/antt.webp" alt="veiculos no pátio"/>
              <h3>ANTT</h3>
              <p></p>
            </div>
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
