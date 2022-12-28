import styles from "../../styles/contact.module.scss";
import Botn from "../shareds/buton";
import { Formik } from 'formik';
import { useState } from "react";
const Contact = () => {
    const [enviado, setEnviado] = useState(false)
    return (
        <section className={styles.sectionContact} id="Contact">
            <section className="container">
                <div className={styles.containerTitle}>
                    <h1>Contact</h1>
                    <i className="bi bi-person"></i>
                    <p>No dude en ponerse en contacto conmigo enviando el siguiente formulario y me pondré en contacto con usted lo antes posible.</p>
                </div>

                <div className={styles.containerForm}>
                    <Formik
                        initialValues={{
                            nombre: "",
                            email: "",
                            motivo: ""

                        }}
                        validate={(valores) => {
                            let errores = {}
                            if (!valores.nombre) {
                                errores.nombre = "Porfavor ingrese su nombre"
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                errores.nombre = "El nombre no puede contener numeros"
                            }
                            if (!valores.email) {
                                errores.email = "Porfavor ingrese su email"
                            }
                            else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                errores.email = "Verifique su email"
                            }
                            if (!valores.motivo) {
                                errores.motivo = "Porfavor ingrese su motivo"
                            }
                            return errores
                        }}
                        onSubmit={(valores, { resetForm }) => {
                            resetForm()
                            setEnviado(true)
                            //setTimeout(() => setEnviado(false), 2000)
                            console.log(valores)
                        }}

                    >
                        {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className={styles.inputContainer}>
                                        <input className={styles.effect} type="text" name="nombre" placeholder="Nombre" value={values.nombre} onChange={handleChange} handleBlur={handleBlur} to />
                                        <span className={styles.focusBorder}></span>
                                    </div>
                                    {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
                                </div>
                                <div>
                                    <div className={styles.inputContainer}>
                                        <input className={styles.effect} type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} handleBlur={handleBlur} />
                                        <span className={styles.focusBorder}></span>
                                    </div>
                                    {touched.email && errors.email && <div>{errors.email}</div>}
                                </div>
                                <div>
                                    <div className={styles.inputContainer}>
                                        <textarea className={styles.effectArea} placeholder="motivo" name="motivo" cols="20" rows="8" value={values.motivo} onChange={handleChange} handleBlur={handleBlur} />
                                        <span className={styles.focusBorderArea}></span>
                                    </div>
                                    {touched.motivo && errors.motivo && <div>{errors.motivo}</div>}
                                </div>

                                <Botn color={"#171f2a"}
                                    background={"#7ee787"}
                                    font={"1.2rem"}>
                                    <span>Enviar</span>
                                </Botn>
                            </form>
                        )}

                    </Formik>
                    {enviado && <div>Enviado con exito</div>}
                </div>

            </section>

        </section>
    )
}
export default Contact