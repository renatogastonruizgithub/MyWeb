import ScrollTop from "../shareds/scrollTop";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        {children}
        <ScrollTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
