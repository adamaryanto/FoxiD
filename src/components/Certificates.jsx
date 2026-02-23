import styles from './Certificates.module.css';

const certificates = [
    {
        id: 1,
        title: 'Laravel Certified Developer',
        issuer: 'Laravel',
        date: '2025',
        id_number: 'LARA-8823-X9'
    },
    {
        id: 2,
        title: 'Meta Frontend Developer',
        issuer: 'Coursera',
        date: '2024',
        id_number: 'META-FE-2024'
    },
    {
        id: 3,
        title: 'React Advanced Security',
        issuer: 'Udemy',
        date: '2024',
        id_number: 'UDEMY-R-SEC'
    }
];

const Certificates = () => {
    return (
        <section className={styles.certificates}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Certificates</h2>
                <div className={styles.grid}>
                    {certificates.map((cert) => (
                        <div key={cert.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>🏆</div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{cert.title}</h3>
                                <p className={styles.issuer}>{cert.issuer} • {cert.date}</p>
                                <p className={styles.certId}>ID: {cert.id_number}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
