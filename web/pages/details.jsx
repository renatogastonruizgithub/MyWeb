import Layout from "../components/layout/layout";

import { usePortfolio } from "../contextApi/context";
export default function Details() {
  const { details } = usePortfolio();

  return (
    <>
      <Layout>
        <h1>Projects</h1>
        <section>
          <div className="container">
            {
              details.map((item) => {
                return (
                  <>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {
                      item.imagen.map((img) => {
                        return (
                          <img src={img} alt="" />
                        )
                      })
                    }

                  </>
                )
              })
            }
          </div>


        </section>

      </Layout>
    </>
  );
}
