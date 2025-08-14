import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import clients from "../data/clients/clients.json";
import "../styles/ClientSlider.css"; // import CSS baru

// Fungsi membagi array menjadi kelompok (chunk)
const chunkArray = (arr, size) =>
  arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);

const ClientSlider = () => {
  const chunkedClients = chunkArray(clients, 10); // per 10 logo per slide

  return (
    <div className="client-slider-container">
      <h2 className="client-slider-title"></h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        spaceBetween={30}
      >
        {chunkedClients.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="client-grid">
              {group.map((client, index) => {
                const globalIndex = idx * 10 + index;
                const src =
                  globalIndex === 22 ||
                  globalIndex === 25 ||
                  globalIndex === 26 ||
                  globalIndex === 27 ||
                  globalIndex === 28 ||
                  globalIndex === 29 ||
                  globalIndex === 37
                    ? "/logos/spektra-placeholder.png"
                    : client.src;

                return (
                  <div className="client-item" key={index}>
                    <div className="client-logo">
                      <img src={src} alt={client.name} />
                    </div>
                    <p className="client-caption">{client.name}</p>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
