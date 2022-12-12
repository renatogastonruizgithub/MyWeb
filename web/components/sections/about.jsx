import Skills from "../shareds/skills"
import { usePortfolio } from "../../contextApi/context";
import styles from "../../styles/skills.module.scss";
import about from "../../styles/about.module.scss";

const About = () => {
    const { list } = usePortfolio();
    return (
        <section className={about.sectionAbout}>
                 <section className="container">
            <div className={about.containerAbout}>
                <div className={about.containerTitle}>
                        <h1>About</h1>
                        <i class="bi bi-person"></i>
                </div>
                
                
                {
                    list.map((item,index) => {
                     
                        return (
                            
                            <div key={item}>
                                <p>{ item.About.texto}</p>
                               <p>{ item.About.cumple}</p>
                            </div>
                        )
                    })
                    }
                    <div>
                        <i class="bi bi-github"></i>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-arrow-down-circle-fill"></i>
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
                                                <p>{skill.nombre}</p>
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