import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            className={`${styles.cursor} ${isPointer ? styles.pointer : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        >
            <div className={styles.ring}></div>
            <div className={styles.dot}></div>
        </div>
    );
};

export default CustomCursor;
