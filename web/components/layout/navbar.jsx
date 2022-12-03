import Head from "next/head";
import Link from "next/link";
import Image from "next/Image";
import logo from "../../public/logoNegro.jpg";
import styles from "../../styles/navbar.module.scss";
export default function Navbar() {
  const links = ["about", "Projects", "certificates", "contact"];
  return (
    <>
      <Head>
        <title>Renato Gaston Ruiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <div className={styles.containerNav}>
          <div className={styles.logoAndMenu}>
            <Image
              priority={true}
              src={logo}
              alt="Desarrollador web"
              width={50}
              height={50}
            />
            <span>Menu</span>
          </div>

          <div className={styles.contentMenuLinks}>
            {links.map((item) => {
              return (
                <li key={item} className={styles.menuLinks}>
                  {/* <Link ></Link> */}
                  <a>{item}</a>
                </li>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
