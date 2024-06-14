"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
// Images
import Image from "next/image";
import check_one from "/public/assets/icons/topheader-check-one.svg";
import truck from "/public/assets/icons/truck.svg";
import heart from "/public/assets/icons/heart.svg";
import check_two from "/public/assets/icons/topheader-check-two.svg";
import arrow_right from "/public/assets/icons/arrow_right.svg";
import arrow_left from "/public/assets/icons/arrow_left.svg";
// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const TopHeader = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <header className={styles.topheader_container}>
      <div className={styles.inner_container}>
        <Swiper
          slidesPerView={isWideScreen ? 4 : 1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.text_container}>
              <Image src={check_one} alt="" />
              <p>30-day satisfaction guarantee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.text_container}>
              <Image src={truck} alt="" />
              <p>free delivery on orders over $40.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.text_container}>
              <Image src={heart} alt="" />
              <p>50.000+ happy customers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.text_container}>
              <Image src={check_two} alt="" />
              <p>100% money back guarantee</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default TopHeader;
