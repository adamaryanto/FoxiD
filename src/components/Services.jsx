import { FiMonitor, FiTool, FiFileText, FiServer } from 'react-icons/fi';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            title: "Pembuatan Website Sistem",
            description: "Absensi, Inventaris, dll. Membangun sistem internal yang efisien dan sesuai kebutuhan bisnis Anda.",
            icon: <FiMonitor />
        },
        {
            title: "Perbaikan Bug Website",
            description: "Menemukan dan memperbaiki masalah teknis pada website Anda agar kembali berjalan normal.",
            icon: <FiTool />
        },
        {
            title: "Perapihan Laporan Excel / PDF",
            description: "Mengolah data dan merapikan format laporan agar lebih profesional dan mudah dibaca.",
            icon: <FiFileText />
        },
        {
            title: "Deployment ke Hosting / VPS",
            description: "Membantu proses upload website ke server agar bisa diakses oleh publik secara online.",
            icon: <FiServer />
        }
    ];

    return (
        <section id="services" className={styles.services}>
            <div className={`container ${styles.container}`}>
                <h2 className={`${styles.title} reveal`}>Apa yang Bisa Saya Bantu?</h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={`${styles.card} reveal delay-${index * 100}`}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
