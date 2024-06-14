import styles from "./styles.module.scss";
import Image from "next/image";
import icon from "/public/assets/icons/discount.svg";

const DiscountBanner = () => {
  return (
    <div className={styles.discount_container}>
      <Image
        src={icon}
        className={styles.image}
        alt=""
        width={100}
        height={100}
      />
      <p>
        Save <span>53%</span> and get <span>6 extra Clarifision</span> for only{" "}
        <span>$14 Each</span>.
      </p>
    </div>
  );
};

export default DiscountBanner;
