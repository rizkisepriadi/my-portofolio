import { useMediaQuery } from "@uidotdev/usehooks";
import Javascript from "../assets/icon-javscript.svg";
import Laravel from "../assets/icon-laravel.svg";
import ReactIcon from "../assets/icon-react.svg";
import Next from "../assets/icon-nextjs.svg";
import nodejs from "../assets/icon-nodejs.svg";
import mongodb from "../assets/icon-mongodb.svg";
import inertia from "../assets/icon-inertia.svg";
import tailwindcss from "../assets/icon-tailwindcss.svg";
import figma from "../assets/icon-figma.svg";
import sql from "../assets/icon-sql.svg";
import kotlin from "../assets/icon-kotlin.svg";

export default function Skill() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {!isLargeScreen && (
        <>
          <div className="text-center flex justify-center mb-5">
            <h1 className="text-base text-accent px-5 bg-secondary rounded-xl">
              Tech
            </h1>
          </div>
          <h1 className="text-accent text-center text-xl">
            The skills, tools and technologies I am really good at:
          </h1>
        </>
      )}
      <div className="mt-16 flex items-center flex-col lg:flex-row lg:justify-between">
        {isLargeScreen && (
          <>
            <div className="px-5 bg-secondary text-center inline-block rounded-xl mb-5">
              <h1 className="text-sm text-accent">Tech</h1>
            </div>
            <h1 className="text-accent text-center mb-6">
              The skills, tools and technologies I am really good at:
            </h1>
          </>
        )}
        <div className="flex flex-wrap flex-auto gap-10 justify-center lg:grid lg:grid-cols-6 lg:gap-12">
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={Javascript} alt="Javascript" />
            <p className="text-center mt-2">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={Laravel} alt="Laravel" />
            <p className="text-center mt-2">Laravel</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={ReactIcon} alt="React" />
            <p className="text-center mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={Next} alt="Next" />
            <p className="text-center mt-2">Next</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={nodejs} alt="Node JS" />
            <p className="text-center mt-2">Node JS</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64 36.5325C61.672 37.1245 60.232 36.5585 58.94 34.6185L49.752 21.9065L48.424 20.1465L37.694 34.6605C36.468 36.4065 35.182 37.1665 32.894 36.5485L46.634 18.1045L33.842 1.44452C36.042 1.01652 37.562 1.23452 38.912 3.20452L48.442 16.0745L58.042 3.27452C59.272 1.52852 60.594 0.864522 62.802 1.50852L57.842 8.08452L51.122 16.8345C50.322 17.8345 50.432 18.5185 51.168 19.4845L64 36.5325ZM0.016 17.7965L1.14 12.2685C4.2 1.32852 16.74 -3.21748 25.388 3.54252C30.442 7.51852 31.698 13.1425 31.448 19.4425H2.96C2.532 30.7825 10.694 37.6265 21.1 34.1345C24.75 32.9085 26.9 30.0505 27.976 26.4745C28.522 24.6825 29.426 24.4025 31.11 24.9145C30.25 29.3865 28.31 33.1225 24.21 35.4605C18.084 38.9605 9.34 37.8285 4.74 32.9645C2 30.1425 0.868 26.5665 0.36 22.7425C0.28 22.1105 0.12 21.5085 0 20.9025C0.0106667 19.8679 0.016 18.8332 0.016 17.7985V17.7965ZM3.012 17.0365H28.756C28.588 8.83652 23.482 3.01252 16.504 2.96252C8.844 2.90252 3.344 8.58852 3.012 17.0365Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-center mt-2">Express</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={mongodb} alt="Mongodb" />
            <p className="text-center mt-2">Mongodb</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={inertia} alt="Inertia" />
            <p className="text-center mt-2">Inertia</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={tailwindcss} alt="Taildwindcss" />
            <p className="text-center mt-2">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={figma} alt="Figma" />
            <p className="text-center mt-2">Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={sql} alt="SQL" />
            <p className="text-center mt-2">MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-16 w-16" src={kotlin} alt="Git" />
            <p className="text-center mt-2">Kotlin</p>
          </div>
        </div>
      </div>
    </>
  );
}
