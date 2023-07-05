import Image from "next/image";
import { usePortfolio } from "../../contextApi/context";
import styles from "../../styles/banner.module.scss";

export default function Banner() {
  const { list,myRef } = usePortfolio();

  return (
    <section ref={myRef} className={styles.imgBanner}>
      {list.map((item) => {
        return (
          <div key={item.Home.id} className={styles.contentImgText}>
            <div className={styles.bannerTexts}>
              <h1>{item.Home.h1}</h1>
              <h2>{item.Home.h2}</h2>
              <h3>{item.Home.h3}</h3>
            </div>

            <div className={styles.contentImg}>
              <Image
                src={item.Home.imagen}
                alt="desarrollador web Renato Ruiz"
                width={500}
                height={500}
                priority={true}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
