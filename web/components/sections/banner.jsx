import Image from "next/image";
import { usePortfolio } from "../../contextApi/context";

export default function Banner() {
  const { list } = usePortfolio();

  return (
    <div>
      <h1>banner</h1>
      <hr></hr>
      {list.map((item) => {
        return (
          <div key={item.Home.id}>
            <h1>{item.Home.h1}</h1>
            <h2>{item.Home.h2}</h2>
            <h3>{item.Home.h3}</h3>
            {/*  <Image src={item.imagen} width={500} height={500} />  */}
            <img src={item.Home.imagen} />
          </div>
        );
      })}
    </div>
  );
}
