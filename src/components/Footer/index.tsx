import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import lock from "/public/assets/icons/lock.svg";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.inner_container}>
        <p>Copyright (C) 2023 | clarifionsupport@clarifion.com</p>
        <div>
          <Image
            src={lock}
            className={styles.icon}
            alt="padlock"
            width={20}
            height={20}
          />
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
