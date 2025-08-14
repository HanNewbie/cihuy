import parse from "html-react-parser";

import { aboutusSection } from "../data/aboutussection.jsx";

import "../styles/aboutus.css";

function aboutus() {
  return (
    // ...existing code...
    <section id="about-us">
      <div className="about-us">
        <div
          className="aboutuscontent"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          {parse(aboutusSection.content)}
        </div>
        <img
          src="images/ayam.jpg"
          className="about-us-image"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="100"
          alt="About Us"
        />
      </div>
    </section>
  );
}

export default aboutus;
