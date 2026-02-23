import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <h3 className={styles.logo}>Fox<span className={styles.highlight}>iD</span></h3>
                    <p className={styles.tagline}>Cepat. Rapi. Siap Pakai.</p>
                </div>

                <div className={styles.links}>
                    {/* <a href="#" className={styles.socialLink} aria-label="GitHub"><FaGithub /></a> */}
                    {/* <a href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedin /></a> */}
                    <a href="#" className={styles.socialLink} aria-label="TikTok"><FaTiktok /></a>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; 2026 FoxiD. All rights reserved.</p>
                    <p className={styles.sub}>
                        Built with <span className={styles.react}>React</span> & <span className={styles.vite}>Vite</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
