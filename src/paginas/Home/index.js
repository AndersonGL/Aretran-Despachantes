import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import './style.css'


export default function Home() {

    return (

        <div>


            <Header />



            <main>
                <section className="secao-banner">
                    <div className="texto-banner">
                        <h1>  ASSESSORIA & DESPACHANTES ASSOCIADOS </h1>
                    </div>
                </section>



                <section className="secao-nossos-clientes">
                    <img src="assets/motorista.webp" alt="foto motorista" />
                    <div className="texto-secao-nossos-clientes">
                        <h2>CLIENTES SATISFEITOS</h2>
                        <span>Gabriel Gomes</span>
                        <p>
                            " Gostaria de agradecer o Aretran pelo comprometimento e entrega sou motorista de  aplicativo precisava adicionar o EAR e renovar minha CNH estou muito contente".
                        </p>
                    </div>

                </section>

         

                <section className="secao-sobre-nos">
                    <img src="assets/pessoas.webp" alt="foto joven no carro" />
                    <div className="texto-secao-sobre-nos">
                        <h2>SOBRE NÓS</h2>
                        <span>Atuando mais de 18 anos no mercado.</span>
                        <p>
                            “Serviços junto ao detran atendemos a todas as suas expectativas com rapidez e eficiência!!!”
                        </p>
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



