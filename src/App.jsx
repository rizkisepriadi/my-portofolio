import Hero from "./component/Hero";
import About from "./component/About";
import Header from "./component/header";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="box-border ">
      <div className="bg-base-100 p-4 lg:px-[82px] mb-16">
        <Header />
        <Hero />
      </div>
      <div className="bg-base-200 p-4 lg:px-[82px]" id="about">
        <About />
      </div>
      <div className="bg-base-100 p-4 lg:px-[82px] lg:py-16" id="tech">
        <Skill />
      </div>
      <div className="bg-base-200 p-4 lg:px-[82px] lg:pb-24" id="work">
        <Work />
      </div>
      <div className="bg-base-100 p-4 lg:px-[82px] lg:pb-24" id="contact">
        <Contact />
      </div>
      <div className="text-sm text-center lg:text-base py-6">
         <p>&copy; 2024 | Original Design by Sagar Shah</p>
      </div>
    </div>
  );
}

export default App;
