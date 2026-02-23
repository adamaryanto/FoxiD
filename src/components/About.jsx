import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.container}`}>
                <div className={styles.textColumn}>
                    <span className={styles.badge}>Who We Are</span>
                    <h2 className={styles.title}>About FoxiD</h2>
                    <p className={styles.paragraph}>
                        <span className={styles.brandHighlight}>FoxiD</span> adalah Web Systems Developer yang membantu pembuatan dan perbaikan website berbasis <span className={styles.highlight}>Laravel</span> dan <span className={styles.highlight}>React</span>.
                    </p>
                    <p className={styles.paragraph}>
                        Kami fokus membangun sistem yang tidak hanya berjalan dengan baik, tetapi juga memiliki struktur kode yang rapi, performa stabil, dan tampilan antarmuka yang modern.
                    </p>
                    <p className={styles.paragraph}>
                        Layanan mencakup pembuatan sistem absensi, inventaris, e-learning, dashboard custom, hingga pengembangan website untuk UMKM dan organisasi.
                    </p>
                    <p className={styles.paragraph}>
                        Setiap project dikembangkan dengan pendekatan terstruktur, mudah dikembangkan kembali, serta siap digunakan untuk kebutuhan presentasi maupun operasional sehari-hari.
                    </p>
                    <p className={styles.paragraph}>
                        Dengan kombinasi clean code dan user experience yang nyaman, FoxiD hadir untuk membantu mewujudkan sistem yang profesional dan sesuai kebutuhan Anda.
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
