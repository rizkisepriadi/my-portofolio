import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Reset the copied state after 2 seconds
  };

  return (
    <>
      {!isLargeScreen && (
        <>
          <div className="text-center flex justify-center mb-5 mt-11">
            <h1 className="text-base text-accent px-5 bg-secondary rounded-xl">
              Get in touch
            </h1>
          </div>
          <h1 className="text-accent text-center ">
            What’s next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </h1>
        </>
      )}
      {isLargeScreen && (
        <div className="flex items-center flex-col">
          <div className="px-5 bg-secondary text-center inline-block rounded-xl mb-5">
            <h1 className="text-sm text-accent">Get in touch</h1>
          </div>
          <h1 className="text-accent text-center mb-6 text-base lg:text-lg lg:">
            What’s next? Feel free to reach out to me if you a re looking for a
            developer, have a query, or simply want to connect.
          </h1>
        </div>
      )}
      <div className="flex flex-col items-center justify-center lg:py-12">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="lg:size-8"
          >
            <path
              d="M20.5 4.30713H4.5C3.39543 4.30713 2.5 5.20256 2.5 6.30713V18.3071C2.5 19.4117 3.39543 20.3071 4.5 20.3071H20.5C21.6046 20.3071 22.5 19.4117 22.5 18.3071V6.30713C22.5 5.20256 21.6046 4.30713 20.5 4.30713Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.5 7.30713L13.53 13.0071C13.2213 13.2006 12.8643 13.3031 12.5 13.3031C12.1357 13.3031 11.7787 13.2006 11.47 13.0071L2.5 7.30713"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-center font-bold text-sm text-accent lg:text-3xl">
            muhammadrizkisepriadi@gmail.com
          </div>
          <CopyToClipboard
            text="muhammadrizkisepriadi@gmail.com"
            onCopy={handleCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="lg:size-8 cursor-pointer "
            >
              <path
                d="M20.5 8.30713H10.5C9.39543 8.30713 8.5 9.20256 8.5 10.3071V20.3071C8.5 21.4117 9.39543 22.3071 10.5 22.3071H20.5C21.6046 22.3071 22.5 21.4117 22.5 20.3071V10.3071C22.5 9.20256 21.6046 8.30713 20.5 8.30713Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 16.3071C3.4 16.3071 2.5 15.4071 2.5 14.3071V4.30713C2.5 3.20713 3.4 2.30713 4.5 2.30713H14.5C15.6 2.30713 16.5 3.20713 16.5 4.30713"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CopyToClipboard>
        </div>
        {copied && <div className=" badge">Link copied to clipboard!</div>}
        {/* <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className="lg:size-8"
          >
            <path
              d="M22.0001 17.2272V20.2272C22.0012 20.5057 21.9441 20.7814 21.8326 21.0366C21.721 21.2918 21.5574 21.5208 21.3521 21.7091C21.1469 21.8974 20.9046 22.0407 20.6408 22.1299C20.377 22.2192 20.0974 22.2523 19.8201 22.2272C16.7429 21.8929 13.7871 20.8414 11.1901 19.1572C8.77388 17.6219 6.72539 15.5734 5.19006 13.1572C3.50003 10.5484 2.4483 7.57822 2.12006 4.48723C2.09507 4.21069 2.12793 3.93199 2.21656 3.66885C2.30518 3.40571 2.44763 3.16392 2.63482 2.95885C2.82202 2.75378 3.04986 2.58994 3.30385 2.47775C3.55783 2.36556 3.8324 2.30749 4.11006 2.30723H7.11006C7.59536 2.30245 8.06585 2.4743 8.43382 2.79076C8.80179 3.10721 9.04213 3.54667 9.11005 4.02723C9.23668 4.98729 9.47151 5.92995 9.81006 6.83723C9.9446 7.19515 9.97372 7.58414 9.89396 7.95811C9.81421 8.33207 9.62892 8.67534 9.36005 8.94723L8.09006 10.2172C9.51361 12.7208 11.5865 14.7937 14.0901 16.2172L15.3601 14.9472C15.6319 14.6784 15.9752 14.4931 16.3492 14.4133C16.7231 14.3336 17.1121 14.3627 17.4701 14.4972C18.3773 14.8358 19.32 15.0706 20.2801 15.1972C20.7658 15.2658 21.2095 15.5104 21.5266 15.8847C21.8437 16.259 22.0122 16.7368 22.0001 17.2272Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-center font-bold text-sm text-accent lg:text-3xl">
            +62 81224547099
          </div>
          <CopyToClipboard
            text="+6281224547099"
            onCopy={handleCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="lg:size-8 cursor-pointer "
            >
              <path
                d="M20.5 8.30713H10.5C9.39543 8.30713 8.5 9.20256 8.5 10.3071V20.3071C8.5 21.4117 9.39543 22.3071 10.5 22.3071H20.5C21.6046 22.3071 22.5 21.4117 22.5 20.3071V10.3071C22.5 9.20256 21.6046 8.30713 20.5 8.30713Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 16.3071C3.4 16.3071 2.5 15.4071 2.5 14.3071V4.30713C2.5 3.20713 3.4 2.30713 4.5 2.30713H14.5C15.6 2.30713 16.5 3.20713 16.5 4.30713"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CopyToClipboard>
          {copied && (
            <div className="text-accent text-base fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
              Link copied to clipboard!
            </div>
          )}
        </div> */}
        <div className="flex flex-col items-center mt-6">
          <p className="text-base">You may also find me on these platforms!</p>
          <div>
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
      </div>
    </>
  );
}
