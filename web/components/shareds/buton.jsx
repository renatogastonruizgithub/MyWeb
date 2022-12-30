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
        </button>

    )
}

export default Botn

