import Header from './components/Header';
import Album from './components/Album';
import Footer from './components/Footer';
import Fheart from './assets/Fheart.png';

export default function App() {

  return (
    <>
      <Header>Nosso Cantinho</Header>
      <main>
        <Album />
      </main>
      <Footer davixero="Davixeros, te amo S2" text="Feito com amor por um gatinho XD" Fheart={Fheart} />
    </>
  )
}


