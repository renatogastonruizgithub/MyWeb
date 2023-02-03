import styles from "../../styles/button.module.scss";
const Botn = ({ children, color, background, font ,handleClick }) => {


    const styleProps = {
        color: color,
        backgroundColor: background,
        fontSize: font
    };
    return (
        <button onClick={handleClick} type="submit" className={styles.containerButton} style={styleProps}>
            {children}
            <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
        </button>

    )
}

export default Botn

