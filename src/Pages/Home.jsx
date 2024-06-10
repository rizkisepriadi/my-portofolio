import { Link } from 'react-router-dom';
import profil from '../img/1659857943100.jpg'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Rizki Sepriadi | Home";
  });
  return (
    <section className="home">
      <div className="home-text">
        <span>Beginner Front End</span>
        <h1>M. Rizki Sepriadi</h1>
        <p>
          I'm a Collegian at University Sriwijaya and interest fassion on Web
          Dev
        </p>
        <div className="main-btn">
          <a
            href="https://drive.google.com/drive/folders/1fbfe6wcPaUc8yQBuWuUvOmyb6bh0CsXg?usp=sharing"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src={profil} alt="Profil" />
      </div>

      <div className="share">
        <p>About Me:</p>
        <div className="social">
          <Link to="https://www.linkedin.com/in/rizkisepriadi-057b8a233">
            <i className="bx bxl-linkedin-square"></i>
          </Link>
          <Link to="https://github.com/rizkisepriadi">
            <i className="bx bxl-github"></i>
          </Link>
          <Link to="https://instagram.com/rizki.sepriadi/">
            <i className="bx bxl-instagram"></i>
          </Link>
        </div>
      </div>
      <p className='announcement'>Currently working on the new UI, Stay Tune</p>  
    </section>
  );
}
