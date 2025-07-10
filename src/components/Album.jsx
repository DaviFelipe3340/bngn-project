import styles from "./Album.module.css";
import Polaroid from "./Polaroid";
import Pes from "../assets/pes.jpeg";
import AfilhadaVirtual from "../assets/afilhadaVirtual.jpeg";
import Jampa from "../assets/jampa.jpeg";
import ParmegianaRuim from "../assets/parmegianaRuim.jpeg";
import FormaturaCeci from "../assets/formaturaCeci.jpeg";
import Sextou from "../assets/sextou.jpeg";
import Dormiremchamada from "../assets/dormiremchamada.jpeg";
import Sambacacaodeoncinha from "../assets/sambacacaodeoncinha.jpeg";
import Youreawizardharry from "../assets/youreawizardharry.jpeg";
import Olhinhos from "../assets/olhinhos.jpeg";
import Testandooclinho from "../assets/testandooclinho.jpeg";
import Primeirobjo from "../assets/primeirobjo.jpeg";
import Escorados from "../assets/escorados.jpeg";
import FavoritaDela from "../assets/FavoritaDela.jpeg";

export default function Album() {
  const memories = [
    {
      img: Jampa,
      title: "Jampa",
      text: "A viagem mais sinistra de todos os tempos.",
    },
    {
      img: Pes,
      title: "Peszinhos",
      text: "Sinistro amor por pés (nao somos esquisitos).",
    },
    {
      img: AfilhadaVirtual,
      title: "Afilhada Virtual sinistra",
      text: "Tutu.",
    },
    {
      img: ParmegianaRuim,
      title: "PARMEGIANA RUIM",
      text: "Pior parmegiana que ja comi na vida, mas comi mesmo assim, O importante é que estava com você. (PERDÃO CECI)",
    },

    {
      img: FormaturaCeci,
      title: "FORMATURA DA MAIOR PESQUEIRA",
      text: "Hoje é um daqueles dias que ficam guardados na memória pra sempre, ver você conquistando e fechando mais esse ciclo é algo que me deixa muito feliz. Você merece tudo de bom que a vida tem a oferecer, e eu estarei sempre aqui para te apoiar e torcer por você. Parabéns pela formatura amor!(XD) Você é uma pessoa incrível e tenho certeza de que ainda vai conquistar muitas coisas na vida. Te amo muito! ❤️",
    },

    {
      img: Sextou,
      title: "Sextou!",
      text: "Compartilhando do mesmo neorônio,é realmente a melhor do mundo no stop SINIIIIIIIIISSSSTRO. Primeira de muitas (se vc quiser) da melhor chamada da minha vida. DAVIXEROS",
    },

    {
      img: Dormiremchamada,
      title: "Domindo em chamada",
      text: "Mesmo distante, a gente sempre arruma um jeitinho de estar junto, mesmo que seja a coisa mais brega do mundo como dormir em chamada kkkkkkkkkkkkkkkkk, amo nossas breguices e obgd por sempre aceitar elas, prometo que é momentaneo, jaja a gente ta mais juntinho doq nunca.",
    },

    {
      img: Sambacacaodeoncinha,
      title: "Samba Canção de Oncinha",
      text: "Sinistro como isso veio parar aqui, ainda n acredito q tô fazendo isso, oq vc me pede q eu não faço né? ",
    },

    {
      img: Testandooclinho,
      title: "Oclinho mais lindo do mundo",
      text: "Fiquei lindo, fiquei nnn??? (dia mucho especial)",
    },

    {
      img: Olhinhos,
      title: "👀",
      text: "Amei essa foto, quis q ela ficasse por aq tbm.",
    },

    {
      img: Primeirobjo,
      title: "Primeiro beijo",
      text: "Sei q vc odiou ela mas eu amei mucho, é a minha preferida então escolhi ela para marcar esse momento, acho engraçado como tudo aconteceu tão naturalmente e do nosso jeitinho, no escurinho do cinema kkkkkkkkkkkk, espero q esse momento tenha sido tão especial pra você quanto foi pra mim, te amo muito muito muito de vdd meu amor.",
    },

    {
      img: Escorados,
      title: "💐💐💐",
      text: "Vc diz q sou bom em falar oq sinto mas acho q até hj n consegui demonstrar em palavras o TANTO q eu te amo mesmo falando q te amo todo santo dia, acho q nesse dia consegui demosntrar um pouquinho e eu nunca vou esquecer dele, nem do seu sorriso, nem do seu bjo, nem do banheiro lotado, nem do live action da minha animação favorita, nem do motorista do Perpedigno q me levoua até lá, nem de Leandro q nos levou de volta, nem da segurança q pela primeira vez algm achou q FINALMENTE éramos um casal e n irmãos, nem de nada desse dia, e se um dia eu chegar a esquecer desses detalhes, do principal eu NUNCA vou esquecer, vc.  ",
    },

    {
      img: FavoritaDela,
      title: "fim do dia mais especial da minha vida",
      text: "E aqui, o fim do dia kkkkkkkkkk sua foto favorita, voltando pra casa bobinhos e apaixonados chamando um ao outro de amor ateeeee hoje, te amo mto meu amor saiba que estou sempre aq pra vc, sempre, sempre, sempre, espero q tenha aprveitado esse dia tanto quanto eu, beijo, o msm q te dei saindo do carro. Te amo meu amor ❤",
    },

    {
      img: Youreawizardharry,
      title: 'Sdd de vc',
      text: 'E agora tenho um pedacinho de vc cmg, como vovó disse "estou com sdd" é oq ele fala kkkkkkkkkkkkk, obgd pelo presente meu amor eu amei mucho mucho mucho de vdd, e ainda tem uma cartinha que só posso abrir daq a 11 dias, ela será a proxima a aparecer por aqui 👀',
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
