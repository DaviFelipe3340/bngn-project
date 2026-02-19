import styles from './FilmeCard.module.css';

export default function FilmeCard({ titulo, descricao }) {
  return (
    <div className={styles.filmeCard}>
      <div className={styles.filmeHeader}>
        <span className={styles.filmeIcon}>🎬</span>
      </div>
      <div className={styles.filmeInfo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );
}
