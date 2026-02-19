import Header from '../components/Header';
import Footer from '../components/Footer';
import FilmeCard from '../components/FilmeCard';
import Fheart from '../assets/Fheart.png';
import styles from './Pages.module.css';
import filmeStyles from './FilmesPage.module.css';

export default function FilmesPage() {
  const nossosFilmes = [
    {
      titulo: "WALL-E",
      descricao: "Esse filme significa mto pra mim, foi nosso primeiro momento vendo algo 'juntos' kkkkkkkkkkk, me identifico com o walle e a eva eles sao tao a gente, eu realmente amo esse filme mais ainda pela relação dele com a nossa relação",
    },
    {
      titulo: "How to train your dragon Live Action",
      descricao: "É minha animação favorita, mas o live action ficou meio esquisitinho, mas ainda continua lindo, e demos nosso primeiro bjo nele, ent eu AMO ELE",
    },
    {
      titulo: "Superman",
      descricao: "Passamos o filme todinho bjando kkkkkkkkkkkkkk uns bjo esquisito, mas amei essa vez q saímos, como amo todas, pq sempre to com vc",
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header>Nossos Filmes 🎬</Header>
      <main className={styles.mainContent}>
        <div className={filmeStyles.filmeContainer}>
          <p className={filmeStyles.subtitle}>Filmes que assistimos juntos 🍿💕</p>
          <div className={filmeStyles.filmeGrid}>
            {nossosFilmes.map((filme, index) => (
              <FilmeCard 
                key={index} 
                titulo={filme.titulo}
                descricao={filme.descricao}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer davixero="Davixeros xeros xeros, te amo S2" text="Feito com amor pra uma gatinha XD" Fheart={Fheart} />
    </div>
  );
}
