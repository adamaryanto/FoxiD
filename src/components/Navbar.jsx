import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <a href="/" className={styles.logo}>
                    Fox<span className={styles.highlight}>iD</span>
                </a>

                <ul className={styles.navLinks}>
                    <li><a href="#projects" className={styles.link}>Projects</a></li>
                    <li><a href="#about" className={styles.link}>About</a></li>
                    <li><a href="https://wa.me/6281319433662" target="_blank" rel="noopener noreferrer" className={styles.cta}>Start a Project</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
