import Foto from "../assets/Foto2.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function About() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className="pb-24">
      {!isLargeScreen && (
        <div className="text-center flex justify-center  mb-5 mt-11">
          <h1 className="text-base text-accent px-5 bg-secondary rounded-xl">
            About Me
          </h1>
        </div>
      )}
      <div className="mt-16 flex items-center flex-col lg:flex-row lg:justify-between ">
        {isLargeScreen && (
          <div className="px-5 bg-secondary text-center inline-block rounded-xl mb-5">
            <h1 className="text-sm text-accent">About Me</h1>
          </div>
        )}
        <img
          src={Foto}
          alt="Our Team on Campus Project"
          className="w-[320px] h-[412.379px] lg:w-[433px] lg:h-[558px]"
        />
        <div className=" flex flex-col lg:ml-[70px]">
          <h1 className="text-accent font-bold mt-12 lg:mt-0 lg:text-2xl lg:w-[422px] lg:mb-7">
            If You Want Know More About Me, There You Have It:
          </h1>
          <div className="flex flex-col gap-4 text-neutral text-base ">
            <p> 
              My name is Muhammad Rizki Sepriadi, and I’m a college student at
              Sriwijaya University, majoring in Informatics. I am passionate
              about front-end development and have self-proclaimed myself as a
              full-stack developer. I am very enthusiastic about learning and
              bringing the technical and visual aspects of digital products to
              life. User experience, and writing clear, readable, highly
              performant code are important to me.
            </p>
            <p>
              My interest in front-end development began during my time as a
              senior high school student. I became serious about learning web
              development when I started studying Informatics at Sriwijaya
              University. Since then, I have cont inued to grow and evolve as a
              developer, taking on new challenges and learning the latest
              technologies along the way. I build cutting-edge web applications
              using modern technologies such as Next.js, React, Laravel,
              Tailwind CSS, and much more.
            </p>
            <p>
              In addition to my technical skills, I am also a strong advocate
              for teamwork and collaboration. I believe that the best products
              are created through effective communication and collective effort.
              I enjoy working with designers, product managers, and other
              developers to create seamless user experiences. My goal is to
              continuously improve my skills and contribute to projects that
              make a meaningful impact
            </p>
            <p>
              Thank you for taking the time to learn more about me. I look
              forward to connecting and collaborating on exciting projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
