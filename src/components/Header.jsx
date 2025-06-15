import styles from './Header.module.css';
import benignoa from '../assets/benignoa.png';

export default function Header({children}) {
    return (
        <div className={styles.header}>
            <img className ={styles.img} src={benignoa} alt="beniginoamoroso" />
            <h1>{children}</h1>
        </div>    
    );
}
