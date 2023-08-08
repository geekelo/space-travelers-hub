import { NavLink } from 'react-router-dom';
import styles from '../styles/styles.module.css';
import '../styles/activestyles.css';
import Logo from '../assets/planet.png';

const Header = () => (
  <div className={`${styles.container_fluid} ${styles.header}`}>
    <nav className={`${styles.container} ${styles.navbar}`}>
      <p className={styles.brand}>
        <img src={Logo} alt="logo" />
        <span>Space Travel&apos;s Hub</span>
      </p>
      <div className={`${styles.menusection}`}>
        <p><NavLink to="/" className={`${styles.menuitems} menuitems`}>Rocket</NavLink></p>
        <p><NavLink to="/missions" className={`${styles.menuitems} menuitems`}>Missions</NavLink></p>
      </div>
    </nav>
  </div>
);

export default Header;
