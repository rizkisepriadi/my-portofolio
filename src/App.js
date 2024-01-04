import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Skill from "./Pages/Skill";
import Proyek from "./Pages/Proyek";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    };
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2500,
      reset: true,
    });
    sr.reveal(".logo", { delay: 200, origin: "left" });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <title>Rizki Sepriadi | Home</title>
        <link rel="stylesheet" href="style/style.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header>
        <Link to="/" className="logo">
          <span>K</span>i<span>s</span>ep
        </Link>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/proyek">Proyek</Link>
          </li>
        </ul>

        <div className="menu-btn">
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skill" element={<Skill />} />
        <Route path="proyek" element={<Proyek />} />
      </Routes>
    </div>
  );
}

export default App;
