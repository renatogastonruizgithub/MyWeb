import styles from "../../styles/projects.module.scss";
import { usePortfolio } from "../../contextApi/context";
import Botn, { Buttons } from "../../components/shareds/buton";
const Projects = () => {
    const { list } = usePortfolio();
    return (
        <section className={styles.sectionProjects}>
            <div className="container">
                <div className={styles.containerTitle}>
                    <h1>Proyectos</h1>
                    <i class="bi bi-file-code"></i>
                </div>


                {
                    list.map((item, i) => {
                        return (
                            <div key={i} >
                                {
                                    item.Projects.map((project, i) => {

                                        return (
                                            <div key={i}

                                                className={styles.contentProjects} >

                                                <div className={`a`}>
                                                    <h2>{project.title}</h2>
                                                    <p>{project.text}</p>
                                                    <div className={styles.botonDestokp}>
                                                        <Botn color={"#171f2a"}
                                                            background={"#7ee787"}
                                                            font={"1.4rem"}
                                                        >
                                                            <span>Saber mas</span>
                                                        </Botn>
                                                    </div>

                                                </div>

                                                <div className={styles.contentImg} ><img src={project.imagen} /></div>
                                                <div className={styles.botonMobile}>
                                                    <Botn color={"#171f2a"}
                                                        background={"#7ee787"}
                                                        font={"1.2rem"}>
                                                        <span>Saber mas</span>
                                                    </Botn>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects