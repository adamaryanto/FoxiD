import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <h1 className={`${styles.headline} reveal`}>
                    Solusi Web Development Profesional <br />
                    <span className={styles.highlight}>untuk Segala Kebutuhan.</span>
                </h1>

                <p className={`${styles.subtext} reveal delay-100`}>
                    Spesialis pembuatan sistem web kustom untuk tugas akademik, digitalisasi UMKM, dan optimalisasi sistem internal perusahaan.
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
