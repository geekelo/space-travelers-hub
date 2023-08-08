import styles from '../styles.module.css';
import Logo from '../assets/planet.png';

const Header = () => (
  <div className={`${styles.container_fluid} ${styles.header}`}>
    <nav className={`${styles.container} ${styles.navbar}`}>
      <div className={styles.brand}>
        <img src={Logo} alt="logo" />
      </div>
    </nav>
  </div>
);

export default Header;
