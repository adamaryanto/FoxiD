import styles from './Projects.module.css';
import inventarisImg from '../assets/Portofolio/Dashboard admin.png';
import gbkImg from '../assets/Portofolio/Gunting Batu Kertas.png';
import burgerImg from '../assets/Portofolio/BurgerKill.png';
import padelHubImg from '../assets/Portofolio/Screenshot 2026-02-23 161059.png';

const projects = [
    {
        id: 1,
        title: 'Web Inventaris',
        description: 'Sistem manajemen inventaris barang berbasis web. Demo - Admin: asep@gmail.com (12345678), User: user@gmail.com (12345678).',
        tags: ['Laravel', 'MySQL', 'Tailwind'],
        link: 'https://gudangkita.adamariyanto.my.id/',
        github: '#',
        image: inventarisImg
    },
    {
        id: 2,
        title: 'PadelHub',
        description: 'Sistem penyewaan lapangan padel online. Demo - Admin: admin@padel.com (password), Customer: customer@padel.com (password).',
        tags: ['Laravel', 'MySQL', 'Bootstrap'],
        link: 'https://padelhub.adamariyanto.my.id/',
        github: '#',
        image: padelHubImg
    },
    {
        id: 3,
        title: 'Gunting Batu Kertas Game',
        description: 'Game interaktif berbasis React dengan statistik pemain.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://adamaryanto.github.io/gunting-batu-kertas-react-app/',
        github: '#',
        image: gbkImg
    },
    {
        id: 4,
        title: 'Landing Page Restaurant Burger',
        description: 'Landing Page modern untuk restoran burger.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://adamaryanto.github.io/restaurant-landing-page/',
        github: '#',
        image: burgerImg
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <img src={project.image} alt={project.title} className={styles.thumbnail} />
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.links}>
                                    <a href={project.link} className={styles.link}>Live Demo</a>
                                    {/* <a href={project.github} className={styles.link}>GitHub</a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
