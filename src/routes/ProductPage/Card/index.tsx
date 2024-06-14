import styles from "./styles.module.scss";
import { cardProps } from "@/typescript/product.interface";
import parse from "html-react-parser";
// Images
import Image from "next/image";
import arrow_right_icon from "/public/assets/icons/arrow_right.svg";
import check from "/public/assets/icons/check_blue.svg";
import warranty from "/public/assets/images/warranty.png";
// Components
import Detail from "./Detail";
import DiscountBanner from "./DiscountBanner";
import Button from "@/components/Button";
import Review from "./Review";
import Payment from "./Payment";

const Card = ({ data }: { data: cardProps }) => {
  return (
    <section className={styles.card_container}>
      <header className={styles.card_header}>
        <Image
          src={data.picture}
          alt={data.subtitle}
          width={600}
          height={600}
          className={styles.picture_one}
        />
        <div className={styles.info_header}>
          <h3 className={styles.title}>{parse(`${data.title}`)}</h3>
          <Image
            src={data.picture}
            alt={data.subtitle}
            width={150}
            height={150}
            className={styles.picture_two}
          />
          <Detail data={data} />
          {/* List Detail */}
          <ul className={styles.list_container}>
            {data.detail.map((i, index) => {
              return (
                <li key={index} className={styles.list_item}>
                  <Image alt="" src={check} />
                  <p>{parse(`${i}`)}</p>
                </li>
              );
            })}
          </ul>
          <DiscountBanner />
          <Button text="Yes - Claim my discount" icon={arrow_right_icon} />
        </div>
      </header>

      <div className={styles.card_bottom}>
        <div className={styles.review_container}>
          {data.reviews.map((i, index) => {
            return <Review key={index} data={i} />;
          })}
        </div>
        <div className={styles.column_container}>
          <Payment />
          <button className={styles.button}>
            No thanks, I don&apos;t want this.
          </button>
          <div className={styles.warranty_container}>
            <Image src={warranty} alt="" className={styles.logo} />
            <p className={styles.warranty_text}>
              If you are not completely thrilled with your Clarifion - We have a{" "}
              <b>30 day satisfaction guarantee</b>. Please refer to our return
              policy at the bottom of the page for more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
