import "./App.css";
import "./styles/Home.css";
import parse from "html-react-parser";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import { testimonialsSection } from "./data/testimonialsesection.jsx";
import Testimonials from "./components/testi.jsx";
import Contact from "./components/contact.jsx";
import Product from "./components/product.jsx";
import Aboutus from "./components/aboutus.jsx";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi
      once: false, // animasi hanya sekali
      offset: 200, // jarak sebelum animasi dimulai
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="wrapper">
          {/* home */}
          <section id="home" data-aos="fade-up">
            <img src="images/logo.png" alt="Home Logo" className="logohome" />
            <div className="kolom">
              <h2 className="beranda">Indo Jaya Telur</h2>
              <div className="beranda">
                <h3 className="beranda-title">
                  “Penuhi Gizi Harianmu, Mulai dari Telur”
                </h3>
                <p className="beranda-subtitle">
                  Mengedepankan manfaat nutrisi, seperti telur sebagai sumber protein utama
                </p>
              </div>
              <p className="contactus">
                <a href="https://wa.me/62895424011634" className="tbl-pink">
                  Contact Us
                </a>
              </p>
            </div>
          </section>

          {/* About Us */}
          <section id="aboutsus">
            <Aboutus />
          </section>

          {/* Packaging */}
          <section id="product" data-aos="fade-up">
            <Product />
          </section>

          {/* Printing Tech */}
          <section id="testimonials" data-aos="fade-up">
            <div className="tengah">
              <div className="kolom">{parse(testimonialsSection.content)}</div>
              <Testimonials />
            </div>
          </section>          
        </div>
        <div>
          <section data-aos="zoom-in" id="contact">
            <Contact />
          </section>
        </div>
        <div className="App">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
