import styles from "../../styles/loading.module.scss";


const Loading = () => {

let saludo = "";
const today = new Date();
const hours = today.getHours();
  if (hours >= 12 && hours <= 20) {
    saludo = "¡Buenas tardes!"   
  }
    if (hours >=20 && hours <= 6) {
    saludo = "¡Buenos noches!";
  }
   if (hours >=6 && hours <= 12) {
    saludo = "¡Buenos dias!";
  }
    return (
        <div className={styles.containerLoading}>
            <span >{saludo}</span>          
        </div>

    )
}

export default Loading
