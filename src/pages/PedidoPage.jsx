import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Fheart from '../assets/Fheart.png';
import styles from './Pages.module.css';
import pedidoStyles from './PedidoPage.module.css';

export default function PedidoPage() {
  const [resposta, setResposta] = useState(null);

  const handleSim = () => {
    setResposta('sim');
  };

  const handleNao = () => {
    setResposta('nao');
  };

  const Confete = ({ id }) => (
    <div key={id} className={pedidoStyles.confeteItem}></div>
  );

  return (
    <div className={styles.pageContainer}>
      <Header>Algo Especial 💍</Header>
      <main className={styles.mainContent}>
        <div className={pedidoStyles.pedidoContainer}>
          {resposta === null ? (
            <div className={pedidoStyles.pedidoCard}>
              <div className={pedidoStyles.pedidoText}>
                <p className={pedidoStyles.intro}>
                  Oi meu amor! 💕
                </p>
                <p className={pedidoStyles.mensagem}>
                  Esse ano que passou ao seu lado foi o melhor da minha vida. 
                  Cada momento com você é especial, cada risada, cada beijo, 
                  cada lágrima que enxuguei do seu rosto, tudo significa muito pra mim.
                </p>
                <p className={pedidoStyles.mensagem}>
                  Você se tornou minha pessoa favorita, meu refúgio, meu motivo de sorrir. 
                  Quero continuar criando mais memórias incríveis ao seu lado.
                </p>
                <p className={pedidoStyles.pergunta}>
                  Então, deixa eu fazer essa pergunta oficial:
                </p>
                <h2 className={pedidoStyles.titulo}>
                  Você quer ser minha namorada? 💕
                </h2>
              </div>

              <div className={pedidoStyles.botoes}>
                <button className={pedidoStyles.botaoSim} onClick={handleSim}>
                  Sim! 💗
                </button>
                <button className={pedidoStyles.botaoNao} onClick={handleNao}>
                  Não
                </button>
              </div>
            </div>
          ) : resposta === 'sim' ? (
            <div className={`${pedidoStyles.pedidoCard} ${pedidoStyles.respostaSim}`}>
              <div className={pedidoStyles.confeteContainer}>
                {[...Array(50)].map((_, i) => (
                  <Confete key={i} id={i} />
                ))}
              </div>
              <div className={pedidoStyles.emojiCaindo}>
                <span className={pedidoStyles.emoji}>🎊</span>
                <span className={pedidoStyles.emoji}>💕</span>
                <span className={pedidoStyles.emoji}>🎉</span>
                <span className={pedidoStyles.emoji}>✨</span>
                <span className={pedidoStyles.emoji}>💕</span>
                <span className={pedidoStyles.emoji}>🎊</span>
              </div>
              <div className={pedidoStyles.pedidoText}>
                <p className={pedidoStyles.respostaTexto}>
                  EU SABIA! 🎉💕
                </p>
                <p className={pedidoStyles.subTexto}>
                  Você é a melhor coisa que já me aconteceu. 
                  Vamo viver muitos momentos incríveis juntos!
                </p>
                <div className={pedidoStyles.coracoes}>
                  <span>💕</span>
                  <span>💕</span>
                  <span>💕</span>
                </div>
              </div>
            </div>
          ) : (
            <div className={pedidoStyles.pedidoCard}>
              <p className={pedidoStyles.respostaTexto}>
                Tudo bem... mas eu já sabia que você iria aceitar de verdade 😊
              </p>
            </div>
          )}
        </div>
        {/* Page is unlocked — sidebar controls access now */}
      </main>
      <Footer davixero="Davixeros xeros xeros, te amo S2" text="Feito com amor pra uma gatinha XD" Fheart={Fheart} />
    </div>
  );
}
