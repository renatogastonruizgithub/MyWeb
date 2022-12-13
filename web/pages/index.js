import Layout from "../components/layout/layout";
import About from "../components/sections/about";
import Banner from "../components/sections/banner";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <About />
      </Layout>
    </>
  )
}
