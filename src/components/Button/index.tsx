import styles from "./styles.module.scss";
import Image from "next/image";

interface ButtonProps {
  text: string;
  icon?: string;
}

const Button = ({ text, icon }: ButtonProps) => {
  return (
    <button className={styles.btn_confirm}>
      {text}
      {icon && (
        <Image
          src={icon}
          alt="arrow_right"
          className={styles.icon}
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default Button;
