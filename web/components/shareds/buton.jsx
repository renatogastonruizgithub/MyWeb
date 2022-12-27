import styles from "../../styles/button.module.scss";
const Botn = ({ children, color, background, font }) => {


    const styleProps = {
        color: color,
        backgroundColor: background,
        fontSize: font
    };
    return (
        <button className={styles.containerButton} style={styleProps}>
            {children}
        </button>

    )
}

export default Botn

