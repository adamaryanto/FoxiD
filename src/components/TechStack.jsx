import styles from './TechStack.module.css';
import { FaLaravel, FaReact, FaPhp, FaJs, FaGitAlt, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiTypescript } from 'react-icons/si';

// Extended stack for better marquee flow
const stack = [
    { name: 'Laravel', color: '#FF2D20', icon: <FaLaravel /> },
    { name: 'React', color: '#61DAFB', icon: <FaReact /> },
    { name: 'PHP', color: '#777BB4', icon: <FaPhp /> },
    { name: 'JavaScript', color: '#F7DF1E', icon: <FaJs /> },
    { name: 'TypeScript', color: '#3178C6', icon: <SiTypescript /> },
    { name: 'Tailwind', color: '#06B6D4', icon: <SiTailwindcss /> },
    { name: 'MySQL', color: '#4479A1', icon: <SiMysql /> },
    { name: 'Git', color: '#F05032', icon: <FaGitAlt /> },
];

const TechStack = () => {
    return (
        <section className={styles.techStack}>
            <div className={styles.container}>
                <p className={styles.label}>Powered by Modern Tech</p>

                <div className={styles.marqueeWrapper}>
                    {/* Gradient Masks */}
                    <div className={`${styles.gradient} ${styles.left}`}></div>
                    <div className={`${styles.gradient} ${styles.right}`}></div>

                    {/* Marquee Content - Duplicated for infinite loop */}
                    <div className={styles.track}>
                        <div className={styles.content}>
                            {stack.map((tech, index) => (
                                <div key={`orig-${index}`} className={styles.card} style={{ '--tech-color': tech.color }}>
                                    <div className={styles.icon}>{tech.icon}</div>
                                    <span className={styles.name}>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className={styles.content}>
                            {stack.map((tech, index) => (
                                <div key={`dup-${index}`} className={styles.card} style={{ '--tech-color': tech.color }}>
                                    <div className={styles.icon}>{tech.icon}</div>
                                    <span className={styles.name}>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
