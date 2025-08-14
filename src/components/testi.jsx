import "../styles/Machine.css";

function Machine() {
  const testimonials = [
    { name: "Aulia", role: "Owner Warung Santai", text: "Telurnya segar, ukuran konsisten, dan pengantaran selalu tepat waktu." },
    { name: "Dimas", role: "Chef Rumah Makan", text: "Harga bersaing, kualitas premium—sangat direkomendasikan." },
    { name: "Rina", role: "Ibu Rumah Tangga", text: "Pesan rutin mingguan, selalu puas dengan pelayanan dan kualitas." },
    { name: "Budi", role: "Pemilik Kafe", text: "Kualitas telur membuat menu kami lebih istimewa." },
    { name: "Sinta", role: "Pengusaha Catering", text: "Layanan cepat dan konsisten, sangat membantu bisnis saya." },
    { name: "Fajar", role: "Baker", text: "Telur segar setiap minggu, hasil kue selalu sempurna." },
  ];

  const looped = [...testimonials, ...testimonials]; // gandakan untuk looping mulus

  return (
    <section className="testimony-section">
      {/* Baris 1 */}
      <div className="marquee marquee-row1">
        <ul className="marquee-track">
          {looped.map((t, i) => (
            <li className="marquee-card" key={`row1-${i}`}>
              <img src="/images/profile.jpg" alt={t.name} className="marquee-photo" />
              <div className="marquee-info">
                <p className="marquee-text">“{t.text}”</p>
                <p className="marquee-meta">
                  <span className="marquee-name">{t.name}</span>
                  <span className="marquee-dot">•</span>
                  <span className="marquee-role">{t.role}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Baris 2 */}
      <div className="marquee marquee-row2">
        <ul className="marquee-track reverse">
          {looped.map((t, i) => (
            <li className="marquee-card" key={`row2-${i}`}>
              <img src="/images/profile.jpg" alt={t.name} className="marquee-photo" />
              <div className="marquee-info">
                <p className="marquee-text">“{t.text}”</p>
                <p className="marquee-meta">
                  <span className="marquee-name">{t.name}</span>
                  <span className="marquee-dot">•</span>
                  <span className="marquee-role">{t.role}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Machine;
