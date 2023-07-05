import Image from "next/Image";
import logo from "../../public/logoNegro.jpg";
import { useRouter } from 'next/navigation';
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  const today = new Date();
  const router = useRouter();
  return (
    <section className={styles.sectionFooter}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.containerSocial}>
            <a href="https://www.linkedin.com/in/renato-gaston-ruiz/" target={"_blank"}> <i className="bi bi-linkedin"></i></a>

            <a href="https://github.com/renatogastonruizgithub" target={"_blank"}><i className="bi bi-github"></i></a>

          </div>
          <Image
            priority={true}
            src={logo}
            alt="Desarrollador web"
            width={50}
            height={50}
            onClick={() => router.push('/')}
          />
          <p>"El éxito es la suma de pequeños esfuerzos, repetidos día tras día." - Robert Collier</p>
        </div>


        <hr></hr>
        <p className={styles.firma}>© Copyright {today.getFullYear()} made witch  &hearts; by Renato Gaston Ruiz</p>
      </div>
    </section>

  );
}
