import styles from './Footer.module.css';
import Fheart from '../assets/Fheart.png';

export default function Footer({ davixero, text, Fheart }) {
    return (
        <>
        <footer className={styles.footer}>
           <p className={styles.davixero}>{davixero}</p>
           <h3 className={styles.text}>{text}</h3> 
              <div className={styles.divfheart}>
              <img className={styles.footerheart} src={Fheart} alt="Fheart" />
            </div>
        </footer>
        </>
    );
}