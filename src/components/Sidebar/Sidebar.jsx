import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // set to true to disable the sidebar link for the special proposal
  const PEDIDO_LOCKED = true;

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.hamburger} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sidebarContent}>
          <h1 className={styles.title}>💕 Nosso Cantinho</h1>
          
          <nav className={styles.nav}>
            <Link 
              to="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              onClick={closeSidebar}
            >
              <span className={styles.icon}>🏠</span>
              <span>Nosso Álbum</span>
            </Link>

            <Link 
              to="/musicas" 
              className={`${styles.navLink} ${isActive('/musicas') ? styles.active : ''}`}
              onClick={closeSidebar}
            >
              <span className={styles.icon}>🎵</span>
              <span>Nossas Músicas</span>
            </Link>

            <Link 
              to="/filmes" 
              className={`${styles.navLink} ${isActive('/filmes') ? styles.active : ''}`}
              onClick={closeSidebar}
            >
              <span className={styles.icon}>🎬</span>
              <span>Nossos Filmes</span>
            </Link>

            {PEDIDO_LOCKED ? (
              <button
                className={`${styles.navLink} ${styles.disabled}`}
                aria-disabled="true"
                title="Em breve..."
              >
                <span className={styles.icon}>💍</span>
                <span>Algo Especial</span>
                <span className={styles.lockIcon}>🔒</span>
              </button>
            ) : (
              <Link 
                to="/pedido-especial" 
                className={`${styles.navLink} ${isActive('/pedido-especial') ? styles.active : ''}`}
                onClick={closeSidebar}
              >
                <span className={styles.icon}>💍</span>
                <span>Algo Especial</span>
              </Link>
            )}
          </nav>
        </div>

        <div className={styles.footer}>
          <p className={styles.love}>Te amo muito 💗</p>
        </div>
      </aside>

      {isOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
    </>
  );
}
