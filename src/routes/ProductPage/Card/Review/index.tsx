import styles from "./styles.module.scss";
import { cardReview } from "@/typescript/product.interface";
// Images
import Image from "next/image";
import star_icon from "/public/assets/icons/star.svg";
import verified from "/public/assets/icons/verified.svg";

const Review = ({ data }: { data: cardReview }) => {
  return (
    <div className={styles.review_container}>
      <div className={styles.header}>
        <Image
          src={data.picture}
          className={styles.picture}
          alt={data.name}
          width={150}
          height={150}
        />
        <div className={styles.text_container}>
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
          <div className={styles.user_container}>
            <p className={styles.name}>{data.name}</p>
            {data.verified && (
              <span className={styles.verified}>
                <Image
                  src={verified}
                  className={styles.icon}
                  alt="checked"
                  width={20}
                  height={20}
                />
                Verified Customer
              </span>
            )}
          </div>
        </div>
      </div>
      <p className={styles.review}>{data.review}</p>
    </div>
  );
};

export default Review;
