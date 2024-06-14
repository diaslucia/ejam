import styles from "./styles.module.scss";
// Components
import Footer from "../Footer";
import Navbar from "../Navbar";
import TopHeader from "../TopHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.container}>
      <TopHeader />
      <div className={styles.inner_container}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
