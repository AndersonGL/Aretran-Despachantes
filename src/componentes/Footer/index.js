import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="limitar-secao container-logo-informacoes">
        <img src="assets/aretran.webp" alt="logomarca" />
        <div>
          <h3>ENDEREÇO</h3>
          <p>Rua Carmo Coelho n° 147</p>
          <p>Santana, Ribeirão Pires-SP</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>
            <a href="mailto:pedro@aretran.com.br">pedro@aretran.com.br</a>
          </p>
          <p>Tel: (11)97455-9801 (Pedro)</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO DE SEGUNDA Á SEXTA</p>
          <p>08:00hs ás 18:00hs</p>
        </div>
      </div>
      <div className="limitar-secao direito-autoral">
        <p>© 2025 Aretran Despachantes - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
