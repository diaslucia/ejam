import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
// Images
import logo from "/public/assets/images/logo.svg";
import logo_mcafee from "/public/assets/images/navbar-mcafee.png";
import logo_norton from "/public/assets/images/navbar-norton.png";

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <Link href={"/"} className={styles.link}>
        <Image
          src={logo}
          className={styles.logo}
          width={200}
          height={80}
          alt="logo"
        />
      </Link>
      <div className={styles.logo_container}>
        <Image
          src={logo_mcafee}
          className={styles.logo_secondary}
          width={200}
          height={80}
          alt="Mcafee secure"
        />
        <Image
          src={logo_norton}
          className={styles.logo_secondary}
          width={200}
          height={80}
          alt="Norton"
        />
      </div>
    </nav>
  );
};

export default Navbar;
