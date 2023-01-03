import styles from "../../styles/scrollTop.module.scss";
import { useEffect, useRef } from 'react';

const ScrollTop = () => {
    const ref = useRef(null);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 1000) {
                ref.current.style.display = 'grid';
            } else {
                ref.current.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div ref={ref} onClick={handleClick} className={styles.containerTop}>
                <i className="bi bi-arrow-up"></i>
            </div>
        </>
    )
}
export default ScrollTop