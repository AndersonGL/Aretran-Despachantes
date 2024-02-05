import './style.css'


export default function Footer() {
    return(
      <footer>
        <div className='limitar-secao container-logo-informacoes'>
          <img src='assets/aretran.png' alt='logomarca'/>
          <div>
             <h3>ENDEREÇO</h3>
             <p>Rua Carmo Coelho n° 147</p>
             <p>Santana, Ribeirão Pires-SP</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>pedroaretran.com.br</p>
                <p>Tel: (11)97455-9801 (Pedro / Jucimara)</p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO DE SEGUNDA Á SEXTA</p>
                <p>08:00hs ás 18:00hs</p>
            </div>
        </div>
        <div className='limitar-secao direito-autoral'>
            <p>© 2024 Aretran Despachantes - Todos os direitos reservados.</p>
        </div>
    </footer>

  )

}
