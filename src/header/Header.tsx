import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <NavLink to="/">Logo</NavLink>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`} end>
          Home
        </NavLink>
        <NavLink to="/weather" className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          Weather
        </NavLink>
        <NavLink to="/user" className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          User
        </NavLink>
        <NavLink to="/post" className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          Post
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          Contact
        </NavLink>
        <NavLink to="/album" className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          Album
        </NavLink>

        {/* Dropdown */}
        <div className={styles.dropdown}>
          <span className={styles.dropdownToggle}>Practices ▾</span>
          <div className={styles.dropdownContent}>
            <NavLink to="/counter" className={styles.link}>
              Counter
            </NavLink>
          </div>
        </div>

        <NavLink to="/privacy" className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          Privacy
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
