import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => observer.observe(el));

        return () => reveals.forEach(el => observer.unobserve(el));
    }, []);
};

export default useScrollReveal;
