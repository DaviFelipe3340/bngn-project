import Header from '../components/Header';
import Footer from '../components/Footer';
import MusicCard from '../components/MusicCard';
import Fheart from '../assets/Fheart.png';
import styles from './Pages.module.css';
import musicStyles from './MusicasPage.module.css';

export default function MusicasPage() {
  const nossasMusicas = [
    {
      titulo: "Quando Bate Aquela Saudade",
      artista: "Rubel",
      descricao: "Essa música é especial pra mim porque sempre me lembra de você, mas é de um bom jeito, apesar de falar da saudade, fico lembrando de quando estamos juntos com ela.",
    },
    {
      titulo: "Voce é linda",
      artista: "Caetano Veloso",
      descricao: "Você é linda, mais que demais, você é linda sim, onda do mar do amor que bateu em mimmmm....",
    },
    {
      titulo: "Accidentally in love",
      artista: "Counting Crows",
      descricao: "KKKKKKKKKK essa música é tão a gente",
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header>Nossas Músicas 🎵</Header>
      <main className={styles.mainContent}>
        <div className={musicStyles.musicContainer}>
          <p className={musicStyles.subtitle}>Aqui estão as músicas que marcam a gente 💗</p>
          <div className={musicStyles.musicGrid}>
            {nossasMusicas.map((musica, index) => (
              <MusicCard 
                key={index} 
                titulo={musica.titulo} 
                artista={musica.artista}
                descricao={musica.descricao}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer davixero="Davixeros xeros xeros, te amo S2" text="Feito com amor pra uma gatinha XD" Fheart={Fheart} />
    </div>
  );
}
