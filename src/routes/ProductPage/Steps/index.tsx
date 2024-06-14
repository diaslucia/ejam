import styles from "./styles.module.scss";
import Image from "next/image";
import check from "/public/assets/icons/check_green.svg";

const steps = [
  { status: "done", step: "Step 1 :", title: "Cart Review" },
  { status: "done", step: "Step 2 :", title: "Checkout" },
  { status: "current", step: "Step 3 :", title: "Special Offer" },
  { status: "next", step: "Step 4 :", title: "Confirmation" },
];

const Steps = () => {
  return (
    <section className={styles.steps_container}>
      {steps.map((i, index) => {
        return (
          <div key={index} className={styles.step}>
            {i.status === "done" ? (
              <Image
                src={check}
                alt={i.title}
                width={30}
                height={30}
                className={styles.icon}
              />
            ) : (
              <div
                className={`${styles.circle} ${
                  i.status === "next" && styles.circleActive
                } `}
              >
                {index + 1}
              </div>
            )}
            <div className={styles.text_container}>
              <p
                className={`${styles.text} ${
                  i.status === "current" && styles.text_active
                }`}
              >
                Step 1:{" "}
              </p>
              <p
                className={`${styles.title} ${
                  i.status === "current" && styles.title_active
                }`}
              >
                Cart Review
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Steps;
