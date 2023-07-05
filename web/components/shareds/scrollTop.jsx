import styles from "../../styles/scrollTop.module.scss";
import { useEffect, useState } from 'react';

const ScrollTop = () => {
    
    const[scroll ,setScroll] =useState(false)

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {           

            if (window.pageYOffset > 1000) {
                setScroll(true)
                
            } else {
              setScroll(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            { scroll &&
                <div  onClick={handleClick} className={styles.containerTop}>
                <i className="bi bi-arrow-up"></i>
            </div>
            }        
            
        </>
    )
}
export default ScrollTop