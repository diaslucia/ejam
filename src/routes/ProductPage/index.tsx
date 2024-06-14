import styles from "./styles.module.scss";
import data from "@/db/product.json";
// Components
import Header from "./Header";
import Steps from "./Steps";
import Card from "./Card";

const ProductPage = () => {
  return (
    <section className={styles.container}>
      <Header />
      <Steps />
      {data.map((i, index) => {
        return <Card data={i} key={index} />;
      })}
    </section>
  );
};

export default ProductPage;
