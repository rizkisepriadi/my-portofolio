import profil from '../img/1659857943100.jpg'

export default function Home() {
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
        <img src={profil} alt="My photo" />
      </div>

      <div className="share">
        <p>About Me:</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/rizkisepriadi-057b8a233">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="muhammadrizkisepriadi@gmail.com">
            <i className="bx bxl-gmail"></i>
          </a>
          <a href="www.instagram.com/rizki.sepriadi/">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
