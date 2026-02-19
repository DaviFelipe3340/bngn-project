import Header from '../components/Header';
import Album from '../components/Album';
import Footer from '../components/Footer';
import Fheart from '../assets/Fheart.png';
import styles from './Pages.module.css';

export default function AlbumPage() {
  return (
    <div className={styles.pageContainer}>
      <Header>Nosso Álbum</Header>
      <main className={styles.mainContent}>
        <p style={{
          textAlign: 'center', 
          fontSize: '1.3rem', 
          color: 'var(--text-color)', 
          marginBottom: '2rem',
          fontFamily: '"Dancing Script", cursive',
          fontWeight: 600
        }}>
          Nossas memórias juntinhos 💕
        </p>
        <Album />
      </main>
      <Footer davixero="Davixeros xeros xeros, te amo S2" text="Feito com amor pra uma gatinha XD" Fheart={Fheart} />
    </div>
  );
}
