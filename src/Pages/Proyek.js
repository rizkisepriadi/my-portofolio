import { useEffect } from 'react';
import web1 from '../img/web1.png'
import web2 from '../img/web2.png'
import web3 from '../img/web3.png'


export default function Proyek() {
  useEffect(() => {
    document.title = "Rizki Sepriadi | Proyek";
  });
  return (
    <article id="portofolio">
      <h1>My Portofolio</h1>
      <div className="gallery-container">
        <div className="gallery">
          <a target="_blank" href="img/web1.png">
            <img src={web1} alt="web1" width="300" height="200" />
          </a>
          <div className="info">Web Profile Palembang</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="https://tori-porto.netlify.app" rel="noreferrer">
            <img src={web2} alt="web2" width="300" height="200" />
          </a>
          <div className="info">Tribute to Akira Toriyama</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="https://steakgacor.netlify.app/" rel="noreferrer">
            <img src={web3} alt="web2" width="300" height="200" />
          </a>
          <div className="info">Steak Gacor - Web Restaurant</div>
        </div>
      </div>
    </article>
  );
}
