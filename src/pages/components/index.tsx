import Image from "next/image";

// オプションをインポートする
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./index.module.css";

// publicフォルダの画像
const images = [
  "/ボムボムパニック改.jpg",
  "/ボムボムパニック改.jpg",
  "/ボムボムパニック改.jpg",
  "/ボムボムパニック改.jpg",
  "/ボムボムパニック改.jpg",
  "/ボムボムパニック改.jpg",
];

export default function BasicSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={"auto"} // ハイドレーションエラー対策
      centeredSlides={true} // スライドを中央に配置
      loop={true} // スライドをループさせる
      speed={1000} // スライドが切り替わる時の速度
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} // スライド表示時間
      navigation // ナビゲーション（左右の矢印）
      pagination={{
        clickable: true,
        bulletClass: `swiper-pagination-bullet ${styles.custom_bullet}`, 
        bulletActiveClass: `swiper-pagination-bullet-active ${styles.custom_bullet_active}`,
      }} // ページネーション, クリックで対象のスライドに切り替わる
      className={styles.slideWrapper}
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={1920}
            height={1080}
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className={styles.slideImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}