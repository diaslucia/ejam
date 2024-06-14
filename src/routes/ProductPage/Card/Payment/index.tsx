import styles from "./styles.module.scss";
// Images
import Image from "next/image";
import visa from "/public/assets/images/visa.png";
import pay from "/public/assets/images/pay.png";
import paypal from "/public/assets/images/paypal.png";
import mastercard from "/public/assets/images/mastercard.png";
import gpay from "/public/assets/images/gpay.png";
import apple from "/public/assets/images/apple.png";
import amex from "/public/assets/images/amex.png";
import lock from "/public/assets/icons/lock_grey.svg";

const payments = [
  {
    logo: visa,
    title: "Visa",
  },
  {
    logo: pay,
    title: "Pay",
  },
  {
    logo: paypal,
    title: "Paypal",
  },
  {
    logo: mastercard,
    title: "Mastercard",
  },
  {
    logo: gpay,
    title: "Gpay",
  },
  {
    logo: apple,
    title: "Apple",
  },
  {
    logo: amex,
    title: "Amex",
  },
];

const Payment = () => {
  return (
    <div className={styles.payment_container}>
      <p className={styles.shipping}>Free Shipping</p>

      <div className={styles.security}>
        <Image
          src={lock}
          alt="padlock_icon"
          className={styles.security_icon}
          width={50}
          height={50}
        />
        <p className={styles.security_text}>Secure 256-bit SSL encryption.</p>
      </div>
      <div className={styles.logo_container}>
        {payments.map((i, index) => (
          <Image
            key={index}
            src={i.logo}
            alt={i.title}
            className={styles.logo}
            width={50}
            height={50}
          />
        ))}
      </div>
    </div>
  );
};

export default Payment;
