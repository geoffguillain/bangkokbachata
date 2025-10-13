import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Facebook, FacebookIcon, Instagram } from "lucide-react";

const CTA = () => {
  return (
    <section id="join-bachata-gang" className="bg-white w-full ">
      <div className="mx-auto max-w-screen-2xl items-center gap-0  px-6 py-8 lg:px-8 lg:py-16 lg:grid lg:grid-cols-2 ">
        <div className="text-gray-500  sm:text-lg text-center lg:text-left flex flex-col items-center justify-center lg:items-start lg:justify-start w-full ">
          <h2 className="text-3xl text-center w-full lg:text-left sm:text-5xl font-extrabold tracking-tight font-inter text-gray-900 uppercase !leading-realaxed">
            Join Our Dance Family
          </h2>
          <span className="mt-4 md:mt-8">
            <b className="text-gray-900 font-medium  ">
              {" "}
              Message us to join our classes or ask for more information!
            </b>
          </span>
          <div className="flex gap-2 mt-2 flex-col items-center justify-center lg:items-start lg:justify-start  ">
            {/* Facebook Icon */}
            <Link
              target="_blank"
              href="https://www.facebook.com/bkk.bachatagang"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 flex  items-center flex-row gap-2"
            >
              <Facebook size={20} /> bkk.bachatagang
            </Link>
            {/* Twitter Icon */}
            <Link
              target="_blank"
              href="https://www.instagram.com/bbg.bangkokbachata/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 flex  items-center flex-row gap-2"
            >
              <Instagram size={20} /> bbg.bachatagang
            </Link>

            <Link
              target="_blank"
              href="https://line.me/ti/p/GeBqZ2rttv"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 flex items-center  flex-row gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                className="fill-gray-500"
                height="24"
                viewBox="0 0 48 48"
              >
                <path d="M 23.007812 5 C 11.600129 5 2.0058594 12.5508 2.0058594 22.236328 C 2.0058594 30.874232 9.6073525 37.884555 19.505859 39.232422 C 19.733605 39.281857 19.977406 39.361175 20.132812 39.429688 C 20.118043 39.515147 20.153199 39.911316 20.105469 40.273438 C 20.105469 40.273438 20.105469 40.275391 20.105469 40.275391 C 20.092619 40.352451 19.881057 41.615404 19.835938 41.878906 L 19.837891 41.876953 C 19.762771 42.309977 19.521995 43.033546 20.193359 44.048828 C 20.529042 44.556469 21.285396 44.987587 21.962891 45 C 22.640385 45.01241 23.208997 44.789728 23.832031 44.447266 C 28.380052 41.946356 33.321386 39.124288 37.214844 35.580078 C 41.108302 32.035869 44.005859 27.639151 44.005859 22.236328 C 44.005809 12.551142 34.415496 5 23.007812 5 z M 23.007812 8 C 33.10213 8 41.005859 14.567511 41.005859 22.236328 C 41.005859 26.578505 38.734856 30.139288 35.195312 33.361328 C 31.801217 36.450969 27.286874 39.09321 22.943359 41.494141 C 23.000899 41.149653 23.072266 40.71875 23.072266 40.71875 L 23.076172 40.695312 L 23.080078 40.671875 C 23.155098 40.109193 23.364983 39.264995 22.923828 38.162109 L 22.921875 38.160156 L 22.921875 38.158203 C 22.588283 37.333404 21.970623 36.974887 21.476562 36.738281 C 20.982502 36.501675 20.514934 36.37997 20.126953 36.296875 L 20.068359 36.285156 L 20.007812 36.277344 C 11.219504 35.121092 5.0058594 29.123568 5.0058594 22.236328 C 5.0058594 14.567856 12.913496 8 23.007812 8 z M 18.333984 17.136719 C 17.769984 17.136719 17.310547 17.592344 17.310547 18.152344 L 17.310547 25.845703 C 17.310547 26.406703 17.768984 26.861328 18.333984 26.861328 C 18.897984 26.861328 19.357422 26.405703 19.357422 25.845703 L 19.357422 18.152344 C 19.357422 17.592344 18.898984 17.136719 18.333984 17.136719 z M 21.853516 17.136719 C 21.743516 17.136719 21.633344 17.154453 21.527344 17.189453 C 21.109344 17.328453 20.828125 17.715344 20.828125 18.152344 L 20.828125 25.845703 C 20.828125 26.406703 21.288516 26.861328 21.853516 26.861328 C 22.419516 26.861328 22.878906 26.405703 22.878906 25.845703 L 22.878906 21.087891 L 26.853516 26.455078 C 27.045516 26.709078 27.351875 26.861328 27.671875 26.861328 C 27.780875 26.861328 27.890094 26.843594 27.996094 26.808594 C 28.416094 26.671594 28.697266 26.284703 28.697266 25.845703 L 28.697266 18.150391 C 28.697266 17.590391 28.238828 17.136719 27.673828 17.136719 C 27.108828 17.136719 26.648438 17.590391 26.648438 18.150391 L 26.648438 22.912109 L 22.671875 17.542969 C 22.479875 17.288969 22.172516 17.136719 21.853516 17.136719 z M 11.466797 17.138672 C 10.902797 17.138672 10.443359 17.592344 10.443359 18.152344 L 10.443359 25.847656 C 10.443359 26.408656 10.901797 26.863281 11.466797 26.863281 L 15.345703 26.863281 C 15.910703 26.863281 16.368187 26.405703 16.367188 25.845703 C 16.367188 25.285703 15.910703 24.830078 15.345703 24.830078 L 12.488281 24.830078 L 12.488281 18.152344 C 12.488281 17.592344 12.031797 17.138672 11.466797 17.138672 z M 31.095703 17.138672 C 30.531703 17.138672 30.072266 17.594297 30.072266 18.154297 L 30.072266 18.15625 L 30.072266 21.998047 L 30.072266 22 L 30.072266 22.001953 L 30.072266 25.845703 C 30.072266 26.406703 30.532703 26.861328 31.095703 26.861328 L 34.974609 26.861328 C 35.539609 26.861328 36 26.405703 36 25.845703 C 36 25.285703 35.539609 24.830078 34.974609 24.830078 L 32.119141 24.830078 L 32.119141 23.013672 L 34.974609 23.013672 C 35.540609 23.013672 36 22.558047 36 21.998047 C 36 21.437047 35.539609 20.982422 34.974609 20.982422 L 34.974609 20.986328 L 32.119141 20.986328 L 32.119141 19.169922 L 34.974609 19.169922 C 35.540609 19.169922 36 18.714297 36 18.154297 C 36 17.594297 35.539609 17.138672 34.974609 17.138672 L 31.095703 17.138672 z"></path>
              </svg>
              https://line.me/ti/p/GeBqZ2rttv
            </Link>
            <div className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 flex items-center flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-gray-500"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.6 21 3 13.4 3 4.5A1 1 0 014 3.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
              06-1039-6083
            </div>

            {/* GitHub Icon */}
          </div>
          <div></div>
          <b className="text-gray-900  mt-4 md:mt-6 font-medium ">
            BBG Dance Studio (available for renting) {" "}
          </b>{" "}
          <p className="  text-gray-500 text-lg font-inter">
            5th floor - unit 10/80, Trendy Building, Sukhumvit 13, Bangkok
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 ">
            <iframe
              className="w-[300px] md:w-[450px] h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9017348890296!2d100.5578057!3d13.7403827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f00463322d7%3A0xdd0b611b64d5f546!2sBBG%20Dance%20Studio%20-%20Bachata%20Salsa%20Kizomba!5e0!3m2!1sen!2sth!4v1693421342"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <Link
            href="https://maps.app.goo.gl/1YCAYay16nTZmsiV6"
            target="_blank"
            rel="noreferer"
            className="sm:mx-0 mx-auto rounded-lg mt-7 px-5 py-2 bg-white border-gray-200 border hover:bg-gray-50 text-gray-900 text-sm flex w-fit flex-row gap-2 items-center justify-center"
          >
            <svg
              width="10"
              height="13"
              viewBox="0 0 10 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.7831 12.0885L4.7852 12.0892C4.9231 12.1494 5.0001 12.1354 5.0001 12.1354C5.0001 12.1354 5.0771 12.1494 5.2157 12.0892L5.2171 12.0885L5.2213 12.0864L5.2339 12.0808C5.30034 12.0499 5.36594 12.0172 5.4306 11.9828C5.5608 11.9156 5.7428 11.8148 5.9605 11.6797C6.3945 11.4109 6.972 11.0035 7.5523 10.4442C8.7115 9.32695 9.9001 7.58045 9.9001 5.13535C9.9001 4.49187 9.77335 3.8547 9.52711 3.2602C9.28086 2.66571 8.91993 2.12554 8.46492 1.67053C8.00991 1.21552 7.46974 0.85459 6.87525 0.608342C6.28075 0.362094 5.64357 0.235352 5.0001 0.235352C4.35662 0.235352 3.71944 0.362094 3.12495 0.608342C2.53045 0.85459 1.99028 1.21552 1.53527 1.67053C1.08027 2.12554 0.719336 2.66571 0.473088 3.2602C0.22684 3.8547 0.100098 4.49187 0.100098 5.13535C0.100098 7.57975 1.2887 9.32695 2.4486 10.4442C2.93422 10.9106 3.46752 11.3247 4.0397 11.6797C4.26131 11.8173 4.4893 11.9443 4.7229 12.0605L4.7663 12.0808L4.7789 12.0864L4.7831 12.0885ZM5.0001 6.71035C5.41781 6.71035 5.81842 6.54441 6.11379 6.24904C6.40916 5.95368 6.5751 5.55307 6.5751 5.13535C6.5751 4.71764 6.40916 4.31703 6.11379 4.02166C5.81842 3.72629 5.41781 3.56035 5.0001 3.56035C4.58238 3.56035 4.18177 3.72629 3.8864 4.02166C3.59103 4.31703 3.4251 4.71764 3.4251 5.13535C3.4251 5.55307 3.59103 5.95368 3.8864 6.24904C4.18177 6.54441 4.58238 6.71035 5.0001 6.71035Z"
                fill="#1F2A37"
              />
            </svg>
            Google maps
          </Link>
        </div>
        <div className="hidden md:flex flex-row w-full gap-4 items-center justify-center  mt-4 lg:mt-0">
          <div className="w-[400px] lg:w-[500px]  rounded-xl h-[420px] xl:h-[540px]  relative lg:mb-8 overflow-hidden flex items-center justify-center">
            <Image
              alt="Bachata Gang"
              width={1920}
              height={1080}
              className="scale-[2.45] xl:scale-[2.65] 2xl:scale-[2] rounded-xl "
              src="./images/pi1.jpeg"
            />
          </div>
          <div className="w-[400px] lg:w-[500px]  rounded-xl h-[420px] xl:h-[540px] overflow-hidden  relative lg:mt-8 flex items-center justify-center">
            <Image
              alt="Bachata Gang"
              width={1920}
              height={1080}
              className=" scale-[1.4] xl:scale-[1.6] 2xl:scale-[1.3] rounded-xl"
              src="./images/pi2.jpeg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
