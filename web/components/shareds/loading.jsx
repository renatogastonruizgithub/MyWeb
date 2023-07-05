
import styles from "../../styles/loading.module.scss";


const Loading = () => {

let saludo = "";
const today = new Date();
const hours = today.getHours(); 
   if (hours >=7 && hours <=12 ) {
     saludo = "¡Buenos dias!" 
    
  }
  if (hours > 12 && hours <= 19) {
    saludo = "¡Buenas tardes!"   
     } 
   if(hours >19 && hours <=24 ) {      
    saludo = "¡Buenos noches!";  
      }   
  if(hours >=1 && hours <7  ) {      
    saludo = "¡Buenos noches!";  
      }  

    return (
        <div className={styles.containerLoading}>
            <span >{saludo}</span>          
        </div>

    )
}

export default Loading
