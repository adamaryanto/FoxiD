import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <h1 className={`${styles.headline} reveal`}>
                    Bikin & Beresin Sistem Web <br />
                    <span className={styles.highlight}>Sat-set, Rapi, Langsung Jadi.</span>
                </h1>

                <p className={`${styles.subtext} reveal delay-100`}>
                    Solusi buat kamu yang mau bangun atau benerin website tugas, UMKM, sampe sistem internal.
                </p>

                <div className={`${styles.ctaGroup} reveal delay-200`}>
                    <button className={`${styles.btn} ${styles.btnPrimary}`}>
                        Lihat Project
                    </button>
                    <a href="https://wa.me/6281319433662" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`}>
                        Hire Me
                    </a>
                </div>
            </div>

            <div className={styles.glow}></div>
        </section>
    );
};

export default Hero;
