import styles from "../../styles/contact.module.scss";
import Botn from "../shareds/buton";
import { Formik } from 'formik';
import { useState } from "react";
import axios from "axios";
const Contact = () => {
    const [enviado, setEnviado] = useState(false)
    return (
        <section className={styles.sectionContact} id="Contact">
            <section className="container">
                <div className={styles.wrapperContact}>
                      <div className={styles.containerTitle}>
                    <h1>Contact</h1>                  
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
                           
                            //setTimeout(() => setEnviado(false), 2000)
                             axios.post(`https://mipaginaweb.fly.dev/email`,valores).then((res) => {
                                resetForm()
                                setEnviado(true)
                             });
                        }}

                    >
                        {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className={styles.inputContainer}>
                                        <input className={`${touched.nombre && errors.nombre? 'errorInput' :styles.effect}`} type="text" name="nombre" placeholder="Nombre" value={values.nombre} onChange={handleChange} handleBlur={handleBlur} to />
                                        <span className={styles.focusBorder}></span>
                                    </div>
                                    {touched.nombre && errors.nombre && <div className={styles.errors}>{errors.nombre}</div>}
                                </div>
                                <div>
                                    <div className={styles.inputContainer}>
                                        <input className={`${touched.email && errors.email ? 'errorInput' :styles.effect}`} type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} handleBlur={handleBlur} />
                                        <span className={styles.focusBorder}></span>
                                    </div>
                                    {touched.email && errors.email && <div className={styles.errors}>{errors.email}</div>}
                                </div>
                                <div>
                                    <div className={styles.inputContainer}>
                                        <textarea className={`${touched.motivo && errors.motivo ? 'errorInput' :styles.effectArea}`} placeholder="Motivo" name="motivo" cols="10" rows="8" value={values.motivo} onChange={handleChange} handleBlur={handleBlur} />
                                        <span className={styles.focusBorderArea}></span>
                                    </div>
                                    {touched.motivo && errors.motivo && <div className={styles.errors}>{errors.motivo}</div>}
                                </div>

                                <Botn color={"#fafafa"}
                                    background={"#060606"}
                                        font={"1.2rem"}
                                        handleClick={() => handleSubmit}>                                         
                                    <span>Enviar</span>
                                </Botn>
                            </form>
                        )}

                    </Formik>
                    {enviado && <div>Enviado con exito</div>}
                </div>
                </div>
              

            </section>

        </section>
    )
}
export default Contact