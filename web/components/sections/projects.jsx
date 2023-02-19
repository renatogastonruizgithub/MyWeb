import styles from "../../styles/projects.module.scss";
import { usePortfolio } from "../../contextApi/context";
import Botn, { Buttons } from "../../components/shareds/buton";
import { useRouter } from 'next/navigation';
const Projects = () => {
    const router = useRouter();
    const { list, idDetails } = usePortfolio();
    const details = (id) => {
        idDetails(id)
        router.push("http://localhost:8080/details/")
    }
    return (
        <section className={styles.sectionProjects} id="Projects">
            <div className="container">
                <div className={styles.containerTitle}>
                    <h1>Proyectos</h1>                    
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

                                                <div className={`${i % 2 == 0 ? 'clase2' : 'reverseProject'}`}>


                                                    <h2>{project.title}</h2>
                                                    <p>{project.text}</p>
                                                    <div className={styles.botonDestokp}>
                                                        <Botn color={"#fff"}
                                                            background={"#f99135"}
                                                            font={1.4 + "rem"}

                                                            handleClick={() => details(project.id)}

                                                        >
                                                            <span>Saber mas</span>
                                                        </Botn>

                                                    </div>

                                                </div>

                                                <div className={styles.contentImg} ><img src={project.imagen} /></div>
                                                <div className={styles.botonMobile}>
                                                    <Botn color={"#fff"}
                                                        background={"#f99135"}
                                                        font={1.2 + "rem"}
                                                        handleClick={() => details(project.id)}
                                                    >
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