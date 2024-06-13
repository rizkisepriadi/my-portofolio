import logo from "../assets/logo.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";

export default function Header() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [popUp, setPopUp] = React.useState(false);

  return (
    <div className="font-['inter']">
      <header className="flex justify-between sm:items-center lg:flex-row lg:py-[14px]">
        <img src={logo} alt="logo" className="size-16 md:size-[74px]" />

        {/* Width below 1024px */}
        {isLargeScreen ? (
          <div className="flex">
            <div className="navbar-start relative">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm md:menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0 md:mx-5 md:w-72"
                >
                  <li className="md:text-base" onClick={() => scroll("about")}>
                    About
                  </li>
                  <li className="md:text-base" onClick={() => scroll("tech")}>
                    Tech
                  </li>
                  <li className="md:text-base" onClick={() => scroll("work")}>
                    Work
                  </li>
                  <li
                    className="md:text-base"
                    onClick={() => scroll("contact")}
                  >
                    Contact
                  </li>
                  <div className="my-3">
                    <div className="btn btn-active bg-transparent border-transparent p-0 shadow-transparent hover:bg-transparent hover:border-transparent flex gap-1 md:text-base">
                      Translate to Indonesia
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_63_17)">
                          <path
                            d="M9.09 13.928L8.22 16.5H6L9.724 6.5H12.292L16 16.5H13.666L12.796 13.928H9.09ZM12.358 12.456L11 8.412H10.902L9.544 12.456H12.358Z"
                            fill="currentColor"
                          />
                          <path
                            d="M0 4.5C0 3.43913 0.421427 2.42172 1.17157 1.67157C1.92172 0.921427 2.93913 0.5 4 0.5L18 0.5C19.0609 0.5 20.0783 0.921427 20.8284 1.67157C21.5786 2.42172 22 3.43913 22 4.5V10.5H28C29.0609 10.5 30.0783 10.9214 30.8284 11.6716C31.5786 12.4217 32 13.4391 32 14.5V28.5C32 29.5609 31.5786 30.5783 30.8284 31.3284C30.0783 32.0786 29.0609 32.5 28 32.5H14C12.9391 32.5 11.9217 32.0786 11.1716 31.3284C10.4214 30.5783 10 29.5609 10 28.5V22.5H4C2.93913 22.5 1.92172 22.0786 1.17157 21.3284C0.421427 20.5783 0 19.5609 0 18.5V4.5ZM4 2.5C3.46957 2.5 2.96086 2.71071 2.58579 3.08579C2.21071 3.46086 2 3.96957 2 4.5V18.5C2 19.0304 2.21071 19.5391 2.58579 19.9142C2.96086 20.2893 3.46957 20.5 4 20.5H18C18.5304 20.5 19.0391 20.2893 19.4142 19.9142C19.7893 19.5391 20 19.0304 20 18.5V4.5C20 3.96957 19.7893 3.46086 19.4142 3.08579C19.0391 2.71071 18.5304 2.5 18 2.5H4ZM18.276 22.49C18.6613 23.0913 19.0813 23.6553 19.536 24.182C18.04 25.332 16.19 26.184 14 26.766C14.356 27.2 14.902 28.036 15.11 28.5C17.36 27.782 19.27 26.812 20.882 25.512C22.436 26.842 24.36 27.842 26.742 28.456C27.008 27.948 27.57 27.11 28 26.676C25.75 26.17 23.886 25.288 22.36 24.108C23.722 22.614 24.804 20.806 25.602 18.594H28V16.5H22V18.594H23.53C22.894 20.282 22.05 21.686 20.986 22.854C20.6919 22.5411 20.4149 22.2126 20.156 21.87C19.5912 22.2309 18.9447 22.4441 18.276 22.49Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_63_17">
                            <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                    </div>
                    <div className="flex gap-1 md:text-base btn btn-active bg-transparent border-transparent p-0 shadow-transparent hover:bg-transparent hover:border-transparent">
                      <p>Change Mode</p>
                      <label className="swap swap-rotate">
                        <input
                          type="checkbox"
                          className="theme-controller"
                          value="dark"
                        />
                        {/* moon icon */}
                        <svg
                          className="swap-on fill-current size-6 lg:w-10 lg:h-10 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>

                        {/* sun icon */}
                        <svg
                          className="swap-off fill-current size-6 lg:w-10 lg:h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <li className="md:text-base">
                    {" "}
                    <a
                      className="btn btn-sm btn-active btn-primary"
                      href="https://drive.google.com/drive/folders/1fbfe6wcPaUc8yQBuWuUvOmyb6bh0CsXg?usp=sharing"
                    >
                      Download CV
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Width 1024px and above
          <>
            <nav className="cursor-pointer">
              <ul className="flex flex-row gap-4">
                <li onClick={() => scroll("about")}>About</li>
                <li onClick={() => scroll("tech")}>Tech</li>
                <li onClick={() => scroll("work")}>Work</li>
                <li onClick={() => scroll("contact")}>Contact</li>
              </ul>
            </nav>
            <div className="flex gap-2 items-center">
              {/* Translate */}
              <div
                className="btn btn-active bg-transparent border-transparent p-0 shadow-transparent hover:bg-transparent hover:border-transparent"
                onClick={() => setPopUp(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <g clipPath="url(#clip0_63_17)">
                    <path
                      d="M9.09 13.928L8.22 16.5H6L9.724 6.5H12.292L16 16.5H13.666L12.796 13.928H9.09ZM12.358 12.456L11 8.412H10.902L9.544 12.456H12.358Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0 4.5C0 3.43913 0.421427 2.42172 1.17157 1.67157C1.92172 0.921427 2.93913 0.5 4 0.5L18 0.5C19.0609 0.5 20.0783 0.921427 20.8284 1.67157C21.5786 2.42172 22 3.43913 22 4.5V10.5H28C29.0609 10.5 30.0783 10.9214 30.8284 11.6716C31.5786 12.4217 32 13.4391 32 14.5V28.5C32 29.5609 31.5786 30.5783 30.8284 31.3284C30.0783 32.0786 29.0609 32.5 28 32.5H14C12.9391 32.5 11.9217 32.0786 11.1716 31.3284C10.4214 30.5783 10 29.5609 10 28.5V22.5H4C2.93913 22.5 1.92172 22.0786 1.17157 21.3284C0.421427 20.5783 0 19.5609 0 18.5V4.5ZM4 2.5C3.46957 2.5 2.96086 2.71071 2.58579 3.08579C2.21071 3.46086 2 3.96957 2 4.5V18.5C2 19.0304 2.21071 19.5391 2.58579 19.9142C2.96086 20.2893 3.46957 20.5 4 20.5H18C18.5304 20.5 19.0391 20.2893 19.4142 19.9142C19.7893 19.5391 20 19.0304 20 18.5V4.5C20 3.96957 19.7893 3.46086 19.4142 3.08579C19.0391 2.71071 18.5304 2.5 18 2.5H4ZM18.276 22.49C18.6613 23.0913 19.0813 23.6553 19.536 24.182C18.04 25.332 16.19 26.184 14 26.766C14.356 27.2 14.902 28.036 15.11 28.5C17.36 27.782 19.27 26.812 20.882 25.512C22.436 26.842 24.36 27.842 26.742 28.456C27.008 27.948 27.57 27.11 28 26.676C25.75 26.17 23.886 25.288 22.36 24.108C23.722 22.614 24.804 20.806 25.602 18.594H28V16.5H22V18.594H23.53C22.894 20.282 22.05 21.686 20.986 22.854C20.6919 22.5411 20.4149 22.2126 20.156 21.87C19.5912 22.2309 18.9447 22.4441 18.276 22.49Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_17">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </div>
              <div
                className={`${
                  popUp ? "absolute" : "hidden"
                } badge badge-error gap-2 mt-24 p-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                  onClick={() => setPopUp(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                This feature not available
              </div>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="dark"
                />
                {/* moon icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>

                {/* sun icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              </label>
              <a
                className="btn btn-active btn-primary"
                href="https://drive.google.com/drive/folders/1fbfe6wcPaUc8yQBuWuUvOmyb6bh0CsXg?usp=sharing"
              >
                Download CV
              </a>
            </div>
          </>
        )}
      </header>
    </div>
  );
}
