import Skills from "../shareds/skills"
import { usePortfolio } from "../../contextApi/context";
import styles from "../../styles/skills.module.scss";
import about from "../../styles/about.module.scss";

const About = () => {
    const { list } = usePortfolio();
    return (
        <section className={about.sectionAbout} id="About">
                 <section className="container">
            <div className={about.containerAbout}>
                <div className={about.containerTitle}>
                        <h1>About</h1>
                      
                </div>  
                {
                    list.map((item,index) => {
                     
                        return (
                            
                            <div key={item}>
                                <p>{item.About.texto}</p>
                                <ul className={about.items}>
                                    <li>
                                        <p>{ item.About.cumple}</p>
                                    </li>
                                    <li>
                                        <p>{ item.About.ciudad}</p>
                                    </li>
                                </ul>
                                
                               
                            </div>
                        )
                    })
                    }
                    <div className={about.social}>
                        <div><i className="bi bi-github"></i></div>
                        <div><i className="bi bi-linkedin"></i></div>
                        <div><i className="bi bi-arrow-down-circle-fill"></i></div>                        
                        
                    </div>
                    
            </div>
            <div className={about.containerSkills}>
                <h2>My skills</h2>
            <Skills children={list}>
                {
              list.map((item,i) => {                       
                        return (                         
                            <div key={i} className={styles.contentSkill}>                                
                                {
                                    item.Skills.map((skill) => {
                                        return (
                                            <div className={styles.skill}>
                                                <span>{skill.nombre}</span>
                                                <div><img src={skill.link} /></div>
                                                
                                            </div>
                                           
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Skills>
            </div>
            
        </section>

        </section>

       

    )
}

export default About