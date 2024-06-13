import Foto from "../assets/Foto.svg";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="flex justify-center">
        <img
          src={Foto}
          alt="Foto Profil"
          className="w-[248px] h-[286.375px] lg:size-full"
        />
      </div>

      <div className="lg:w-[768px] lg:mt-6">
        <div className="flex items-center ">
          <h1 className="text-3xl font-bold text-accent pt-3 lg:text-6xl">
            Hi, I’m Rizki
          </h1>
          <p className="animate-[wiggle_1s_ease-in-out_infinite] text-3xl lg:text-6xl">
            👋
          </p>
        </div>
        <p className="self-stretch text-base text-neutral lg:text-base">
          Results-driven Informatics college student specializing in web
          development. Demonstrated success in leading website develop ment
          projects. Skilled in React, Laravel, and design tools like Figma.
          Dicoding-certified in multiple web technologies, enthusiastic about
          applying theoretical knowledge to practical projects a nd staying
          abreast of industry trends
        </p>

        <div className="pt-10 pb-6">
          <div className="flex items-center gap-1">
            {/* Location Action */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20 10.3745C20 16.3745 12 22.3745 12 22.3745C12 22.3745 4 16.3745 4 10.3745C4 8.25278 4.84285 6.21795 6.34315 4.71766C7.84344 3.21737 9.87827 2.37451 12 2.37451C14.1217 2.37451 16.1566 3.21737 17.6569 4.71766C19.1571 6.21795 20 8.25278 20 10.3745Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13.3745C13.6569 13.3745 15 12.0314 15 10.3745C15 8.71766 13.6569 7.37451 12 7.37451C10.3431 7.37451 9 8.71766 9 10.3745C9 12.0314 10.3431 13.3745 12 13.3745Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            <p className="text-neutral text-base">Palembang, Indonesia</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="btn btn-active bg-transparent border-transparent p-0 shadow-transparent hover:bg-transparent hover:border-transparent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8"
                y="8.37451"
                width="8"
                height="8"
                rx="4"
                fill="#10B981"
              />
            </svg>
            <p className="text-neutral text-base">Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-2">
          {/* Github */}
          <a
            href="https://github.com/rizkisepriadi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active bg-transparent border-transparent p-0 shadow-transparent hover:bg-transparent hover:border-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 7.99998 3.5C5.99998 2 4.99998 2 4.99998 2C4.69998 3.15 4.69998 4.35 4.99998 5.5C4.27185 6.51588 3.91845 7.75279 3.99998 9C3.99998 12.5 6.99998 14.5 9.99998 14.5C9.60998 14.99 9.31998 15.55 9.14998 16.15C8.97998 16.75 8.92998 17.38 8.99998 18V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 18C4.49 20 4 16 2 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/rizki.sepriadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active bg-transparent border-transparent p-0 shadow-transparent hover:bg-transparent hover:border-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.999 7.377C10.7726 7.377 9.59651 7.86417 8.72934 8.73134C7.86217 9.59851 7.375 10.7746 7.375 12.001C7.375 13.2274 7.86217 14.4035 8.72934 15.2707C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2707C16.1358 14.4035 16.623 13.2274 16.623 12.001C16.623 10.7746 16.1358 9.59851 15.2687 8.73134C14.4015 7.86417 13.2254 7.377 11.999 7.377ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5608 8.995 12.7967 8.995 12C8.995 11.2033 9.31149 10.4392 9.87485 9.87585C10.4382 9.31249 11.2023 8.996 11.999 8.996C12.7957 8.996 13.5598 9.31249 14.1231 9.87585C14.6865 10.4392 15.003 11.2033 15.003 12C15.003 12.7967 14.6865 13.5608 14.1231 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004Z"
                fill="currentColor"
              />
              <path
                d="M16.806 8.285C17.4014 8.285 17.884 7.80236 17.884 7.207C17.884 6.61164 17.4014 6.129 16.806 6.129C16.2107 6.129 15.728 6.61164 15.728 7.207C15.728 7.80236 16.2107 8.285 16.806 8.285Z"
                fill="currentColor"
              />
              <path
                d="M20.533 6.111C20.3015 5.51318 19.9477 4.97028 19.4943 4.51706C19.041 4.06384 18.4979 3.71027 17.9 3.479C17.2003 3.21636 16.4612 3.07434 15.714 3.059C14.751 3.017 14.446 3.005 12.004 3.005C9.56201 3.005 9.24901 3.005 8.29401 3.059C7.5474 3.07356 6.80877 3.2156 6.11001 3.479C5.51195 3.71 4.96878 4.06347 4.51535 4.51673C4.06192 4.96999 3.70824 5.51302 3.47701 6.111C3.21432 6.81061 3.07263 7.54984 3.05801 8.297C3.01501 9.259 3.00201 9.564 3.00201 12.007C3.00201 14.449 3.00201 14.76 3.05801 15.717C3.07301 16.465 3.21401 17.203 3.47701 17.904C3.70889 18.5018 4.06291 19.0446 4.51645 19.4978C4.96999 19.951 5.51308 20.3046 6.11101 20.536C6.80845 20.8092 7.54739 20.9614 8.29601 20.986C9.25901 21.028 9.56401 21.041 12.006 21.041C14.448 21.041 14.761 21.041 15.716 20.986C16.4631 20.9708 17.2022 20.8291 17.902 20.567C18.4998 20.3352 19.0426 19.9813 19.496 19.528C19.9493 19.0746 20.3032 18.5318 20.535 17.934C20.798 17.234 20.939 16.496 20.954 15.748C20.997 14.786 21.01 14.481 21.01 12.038C21.01 9.595 21.01 9.285 20.954 8.328C20.9424 7.57027 20.7999 6.82025 20.533 6.111ZM19.315 15.643C19.3086 16.2193 19.2034 16.7902 19.004 17.331C18.8538 17.7199 18.6239 18.073 18.3291 18.3677C18.0342 18.6624 17.681 18.8921 17.292 19.042C16.7572 19.2404 16.1924 19.3456 15.622 19.353C14.672 19.397 14.404 19.408 11.968 19.408C9.53001 19.408 9.28101 19.408 8.31301 19.353C7.74294 19.346 7.17834 19.2408 6.64401 19.042C6.2537 18.893 5.89902 18.6637 5.6029 18.369C5.30679 18.0742 5.07585 17.7206 4.92501 17.331C4.72846 16.7961 4.62333 16.2318 4.61401 15.662C4.57101 14.712 4.56101 14.444 4.56101 12.008C4.56101 9.571 4.56101 9.322 4.61401 8.353C4.62048 7.77702 4.72567 7.20642 4.92501 6.666C5.23001 5.877 5.85501 5.256 6.64401 4.954C7.1786 4.75614 7.74304 4.65096 8.31301 4.643C9.26401 4.6 9.53101 4.588 11.968 4.588C14.405 4.588 14.655 4.588 15.622 4.643C16.1924 4.64986 16.7574 4.75507 17.292 4.954C17.6809 5.10427 18.0342 5.3342 18.329 5.62903C18.6238 5.92386 18.8537 6.27707 19.004 6.666C19.2006 7.20095 19.3057 7.76516 19.315 8.335C19.358 9.286 19.369 9.553 19.369 11.99C19.369 14.426 19.369 14.688 19.326 15.644H19.315V15.643Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rizkisepriadi-057b8a233"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active bg-transparent border-transparent p-0 shadow-transparent hover:bg-transparent hover:border-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.98304 7.197C6.19144 7.197 7.17104 6.2174 7.17104 5.009C7.17104 3.8006 6.19144 2.821 4.98304 2.821C3.77464 2.821 2.79504 3.8006 2.79504 5.009C2.79504 6.2174 3.77464 7.197 4.98304 7.197Z"
                fill="currentColor"
              />
              <path
                d="M9.23697 8.85499V20.994H13.006V14.991C13.006 13.407 13.304 11.873 15.268 11.873C17.205 11.873 17.229 13.684 17.229 15.091V20.995H21V14.338C21 11.068 20.296 8.55499 16.474 8.55499C14.639 8.55499 13.409 9.56199 12.906 10.515H12.855V8.85499H9.23697ZM3.09497 8.85499H6.86997V20.994H3.09497V8.85499Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
