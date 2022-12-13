import Head from "next/head";
import Link from "next/link";
import Image from "next/Image";
import logo from "../../public/logoNegro.jpg";
import styles from "../../styles/navbar.module.scss";
import Menu from "../shareds/menuMobile";
import { useState } from "react";

export default function Navbar() {
  const links = ["About", "Projects", "Certificates", "Contact"];

  const[menu, setMenu]=useState(false)


  return (
    <>
      <Head>
        <title>Renato Gaston Ruiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
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
            <div onClick={() => setMenu(!menu)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
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
        <Menu 
          menu={menu}
          setMenu={setMenu}
        >
          <div>
              {              
            links.map((item) => {
              return (              
                    <li key={item} >
                    {/* <Link ></Link> */}
                    <a>{item}</a>
                  </li>
                );
              })
              }
          </div>
       
          <span onClick={() => setMenu(!menu)}>
            <span></span>
            <span></span>
          </span>
        </Menu>
      </section>
      
    </>
  );
}
