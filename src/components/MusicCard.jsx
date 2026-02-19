import styles from './MusicCard.module.css';

export default function MusicCard({ titulo, artista, descricao }) {
  return (
    <div className={styles.musicCard}>
      <div className={styles.musicHeader}>
        <span className={styles.musicIcon}>🎵</span>
      </div>
      <div className={styles.musicInfo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.artista}>{artista}</p>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );
}
