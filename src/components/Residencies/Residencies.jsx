import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";

const Residencies = () => {
  const swiperRef = useRef(null);

  return (
    <section className="r-wrapper">
      <div className="innerWidth r-container">
        {/* Header */}
        <div className="r-head">
          <h2 className="r-title">Best Choices</h2>
          <h2 className="r-subtitle">Popular Residencies</h2>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                {/* IMAGE CONTAINER */}
                <div className="r-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                {/* PRICE */}
                <div className="r-price">₹{item.price}</div>
                {/* CARD DETAILS */}
                <div className="r-card-bottom">
                  <h3 className="r-name">{item.name}</h3>
                  <p className="r-detail">{item.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Buttons */}
        <div className="r-buttons">
          <button onClick={() => swiperRef.current?.slidePrev()}>&lt;</button>
          <button onClick={() => swiperRef.current?.slideNext()}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Residencies;
