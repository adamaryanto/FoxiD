import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.container}`}>
                <div className={styles.textColumn}>
                    <span className={styles.badge}>Who We Are</span>
                    <h2 className={styles.title}>Seputar FoxiD</h2>
                    <p className={styles.paragraph}>
                        <span className={styles.brandHighlight}>FoxiD</span> adalah teman buat kamu yang butuh sistem web berbasis <span className={styles.highlight}>Laravel</span> atau <span className={styles.highlight}>React</span>.
                    </p>
                    <p className={styles.paragraph}>
                        Nggak cuma asal jalan, saya fokus bikin website yang kodenya rapi, performanya enteng, dan tampilannya enak dilihat.
                    </p>
                    <p className={styles.paragraph}>
                        Bisa bantu bikin apa aja—mulai dari sistem absensi, inventaris, e-learning, dashboard custom, sampe landing page buat UMKM.
                    </p>
                    <p className={styles.paragraph}>
                        Setiap project digarap serius biar gampang dikembangin lagi dan langsung siap kamu pakai buat kerja atau presentasi.
                    </p>
                    <p className={styles.paragraph}>
                        Pokoknya, FoxiD hadir biar urusan web kamu jadi lebih simpel dan profesional tanpa ribet.
                    </p>
                </div>
                {/* Visual/Image Column */}
                <div className={styles.visualColumn}>
                    <div className={styles.codeCard}>
                        <div className={styles.codeHeader}>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                        </div>
                        <pre className={styles.codeBlock}>
                            <code>
                                <span className={styles.syntaxKeyword}>const</span> <span className={styles.syntaxVariable}>FoxiD</span> = {'{'}{'\n'}
                                {'  '}<span className={styles.syntaxProperty}>role</span>: <span className={styles.syntaxString}>"Web Systems Developer"</span>,{'\n'}
                                {'  '}<span className={styles.syntaxProperty}>stack</span>: [<span className={styles.syntaxString}>"Laravel"</span>, <span className={styles.syntaxString}>"React"</span>],{'\n'}
                                {'  '}<span className={styles.syntaxProperty}>focus</span>: [<span className={styles.syntaxString}>"Clean Code"</span>, <span className={styles.syntaxString}>"Modern UI"</span>],{'\n'}
                                {'  '}<span className={styles.syntaxProperty}>goal</span>: <span className={styles.syntaxString}>"Professional Systems"</span>{'\n'}
                                {'}'};
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
