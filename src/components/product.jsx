import { useEffect, useRef } from "react";
import "../styles/product.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PackagingSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi
      once: false, // animasi hanya sekali
      offset: 20, // jarak sebelum animasi dimulai
    });
    const el = scrollRef.current;
    let index = 0;

    const autoSlide = setInterval(() => {
      if (!el) return;
      index++;
      if (index >= el.children.length) {
        index = 0;
      }
      el.scrollTo({
        left: index * el.clientWidth, // geser 1 gambar penuh
        behavior: "smooth",
      });
    }, 2000); // ganti tiap 2 detik

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="packaging-section">
      <h2 className="packaging-title" data-aos="fade-up">
        Product
      </h2>
      <div className="packaging-grid" ref={scrollRef}>
        <div>
          <img src="/images/biasa.jpg" alt="biasa" />
        </div>
        <div>
          <img src="/images/super.jpg" alt="super" />
        </div>
      </div>
      <ul>
        <ul class="daftar">
        <li><strong>Telur Ayam Biasa</strong> – Pilihan ekonomis dengan kualitas terjaga.</li>
        <li><strong>Telur Ayam Super</strong> - Telor premium atau omega berukuran sedikit lebih kecil dan kualitas kuning telor berwarna orange</li>
        </ul>
        <p class="about-us-content">
        Dengan komitmen pada kualitas, ketepatan distribusi, dan pelayanan terbaik, 
        Indo Jaya Telur terus mengembangkan jaringan pemasaran dan distribusinya. 
        Perusahaan ini memiliki visi untuk menjadi salah satu pemasok telur terdepan di Indonesia, 
        yang tidak hanya menghadirkan produk unggulan, 
        tetapi juga mendukung ketahanan pangan nasional.
      </p>
      </ul>
    </section>
  );
}
