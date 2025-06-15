import styles from './Polaroid.module.css';

export default function Polaroid({ img, title, children }) {
  return (
    <div className={styles.polaroid}>
      <img className={styles.image} src={img} alt="photo"/>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{children}</p>
    </div>
  );
}