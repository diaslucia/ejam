import styles from "./styles.module.scss";
import { cardProps } from "@/typescript/product.interface";
import Image from "next/image";
import radio_icon from "/public/assets/icons/radio-button.svg";
import star_icon from "/public/assets/icons/star.svg";

const Detail = ({ data }: { data: cardProps }) => {
  return (
    <>
      <div className={styles.detail_container}>
        <Image
          src={data.thumbnail}
          className={styles.image}
          alt={data.subtitle}
          width={100}
          height={100}
        />
        <div className={styles.inner_container}>
          <div className={styles.titles_container}>
            <p className={styles.subtitle}>{data.subtitle}</p>
            <p className={styles.price}>
              <span>${data.price}</span>${data.sale}
            </p>
          </div>
          <div className={styles.stars_container}>
            {Array.from({ length: data.stars }).map((_, i) => (
              <Image
                src={star_icon}
                className={styles.icon}
                alt=""
                key={data.stars + 1}
              />
            ))}
          </div>
          <div className={styles.stock_container}>
            <Image src={radio_icon} className={styles.icon} alt="" />
            <p className={styles.stock}>
              <span>{data.stock}</span>
              left in Stock
            </p>
          </div>
          <div className={styles.description_one}>{data.description}</div>
        </div>
      </div>
      <div className={styles.description_two}>{data.description}</div>
    </>
  );
};

export default Detail;
