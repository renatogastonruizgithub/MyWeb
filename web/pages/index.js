import Layout from "../components/layout/layout";
import About from "../components/sections/about";
import Banner from "../components/sections/banner";
import Certificated from "../components/sections/certificated";
import Contact from "../components/sections/contact";
import Projects from "../components/sections/projects";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Projects />
        <Certificated />
        <Contact/>
      </Layout>
    </>
  )
}
