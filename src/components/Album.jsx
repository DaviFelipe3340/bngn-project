import styles from './Album.module.css';
import Polaroid from './Polaroid';
import Pes from '../assets/pes.jpeg';
import AfilhadaVirtual from '../assets/afilhadaVirtual.jpeg';
import Jampa from '../assets/jampa.jpeg';
import ParmegianaRuim from '../assets/parmegianaRuim.jpeg';


export default function Album() {
  const memories = [
    {
      img: Jampa,
      title: 'Jampa',
      text: 'A viagem mais sinistra de todos os tempos.'
    },
    {
      img: Pes,
      title: 'Peszinhos',
      text: 'Sinistro amor por pés (nao somos esquisitos).'
    },
    {
      img: AfilhadaVirtual,
      title: 'Afilhada Virtual sinistra',
      text: 'tutu.'
    },
    {
      img: ParmegianaRuim,
      title: 'PARMEGIANA RUIM',
      text: 'Pior parmegiana que ja comi na vida, mas comi mesmo assim, O importante é que estava com você. (PERDÃO CECI)'
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {memories.map((memory, index) => (
          <Polaroid key={index} title={memory.title} img={memory.img}>
            {memory.text}
          </Polaroid>
        ))}
      </div>
    </div>
  );
}
