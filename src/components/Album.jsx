import styles from './Album.module.css';
import Polaroid from './Polaroid';
import Pes from '../assets/pes.jpeg';
import AfilhadaVirtual from '../assets/afilhadaVirtual.jpeg';
import Jampa from '../assets/jampa.jpeg';
import ParmegianaRuim from '../assets/parmegianaRuim.jpeg';
import FormaturaCeci from '../assets/formaturaCeci.jpeg'; 
import Sextou from '../assets/sextou.jpeg';

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
    },
    
    {
      img: FormaturaCeci,
      title: 'FORMATURA DA MAIOR PESQUEIRA',
      text: 'Hoje é um daqueles dias que ficam guardados na memória pra sempre, ver você conquistando e fechando mais esse ciclo é algo que me deixa muito feliz. Você merece tudo de bom que a vida tem a oferecer, e eu estarei sempre aqui para te apoiar e torcer por você. Parabéns pela formatura amor!(XD) Você é uma pessoa incrível e tenho certeza de que ainda vai conquistar muitas coisas na vida. Te amo muito! ❤️'
    },

    {
      img: Sextou,
      title: 'Sextou!',
      text: 'compartilhando do mesmo neorônio,é realmente a melhor do mundo no stop SINIIIIIIIIISSSSTRO. Primeira de muitas (se vc quiser) da melhor chamada da minha vida. DAVIXEROS'
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
