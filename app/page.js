import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { SiVsco } from "react-icons/si";

import Avatar from "../src/assets/img/background/DACA1378-472C-48FE-B0C2-EC65639013D3.jpg";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <header
        className={`w-full h-screen items-center justify-center  flex flex-col bg-[url(../src/assets/img/background/6B99E25D-CE04-4971-B271-2EA71408B544.jpg)]  bg-cover bg-center bg-fixed`}
      >
        <div className="absolute w-full h-screen bg-black opacity-50 bg-fixed"></div>
        <h1 className="mt-20 font-cinzel z-10 text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-winter-600 via-winter-100 to-winter-300 tracking-widest font-extrabold border border-winter-600 p-5">
          LULA DE ORO
        </h1>
        <p className="z-10 mt-5 text-center font-cinzel text-xs md:text-xl text-white tracking-widest font-bold">
          Un recorrido visual por momentos únicos <br /> y emociones auténticas.
        </p>
        <a
          href="#"
          className="bg-winter-700 text-xl z-10 px-4 py-3 hover:shadow-2xl hover:shadow-winter-200 transition-all rounded-md flex items-center justify-center font-cinzel font-medium tracking-wider text-winter-300 mt-10"
        >
          EXPLORAR
        </a>
      </header>

      <section
        className={`w-full h-screen  flex bg-[url(../src/assets/img/background/DACA1378-472C-48FE-B0C2-EC65639013D3.jpg)]  bg-cover bg-center  bg-fixed`}
      >
        <div className="absolute w-full h-screen bg-black bg-opacity-50 bg-fixed"></div>
        <div className="z-10 w-full md:w-1/2  p-20  ">
          <div className="w-full h-full flex flex-col gap-10 border border-winter-400 p-10">
            <p className="text-white font-cinzel text-sm md:text-2xl tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              error tempora beatae cupiditate. Optio voluptatem, rerum
              reprehenderit ipsam quis pariatur labore repellat, quo provident
              omnis, dicta ducimus ullam maiores assumenda.
            </p>
            <a
              href="#"
              className=" font-cinzel px-4 py-3 bg-winter-700 text-winter-600 font-light tracking-widest text-xl"
            >
              CONTACTO
            </a>
          </div>
        </div>
      </section>

      <section
        className={`w-full h-screen  flex bg-[url(../src/assets/img/background/8DCE109A-2ECB-486B-9248-EED37BEB3469.jpg)]  bg-cover bg-center  bg-fixed`}
      >
        <div className="absolute w-full h-screen bg-black bg-opacity-50 bg-fixed"></div>
        <div className="p-20 gap-10 flex flex-col items-center justify-center z-20">
          <p className="font-cinzel text-winter-400 text-md md:text-3xl text-center tracking-wider leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
            eius animi itaque minima minus. Tempore architecto deserunt quo
            libero, repellendus iusto natus aliquam quos, aut corrupti
            voluptate, sit illo.
          </p>
          <p className="font-cinzel text-winter-400 text-sm md:text-xl text-center tracking-wider leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </section>

      <section
        className={`w-full h-screen  flex bg-[url(../src/assets/img/background/_DSC0445.JPG)]  bg-cover bg-center  bg-fixed`}
      >
        <div className="absolute w-full h-screen bg-black bg-opacity-50 bg-fixed"></div>
        <div className="p-20 gap-10 flex flex-col items-center justify-center z-20">
          <p className="font-cinzel text-winter-400 text-md md:text-3xl text-center tracking-wider leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
            eius animi itaque minima minus. Tempore architecto deserunt quo
            libero, repellendus iusto natus aliquam quos, aut corrupti
            voluptate, sit illo.
          </p>
          <p className="font-cinzel text-winter-400 text-sm md:text-xl text-center tracking-wider leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </section>

      <section
        className={`w-full h-screen  flex bg-[url(../src/assets/img/background/7FD1FBD9-BC6E-4ADA-B80B-33CB62F47775.jpg)]  bg-cover bg-center  bg-fixed`}
      >
        <div className="absolute w-full h-screen bg-black bg-opacity-50 bg-fixed"></div>
        <div className="p-20 gap-10 flex flex-col items-center justify-center z-20">
          <p className="font-cinzel text-winter-400 text-md md:text-3xl text-center tracking-wider leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
            eius animi itaque minima minus. Tempore architecto deserunt quo
            libero, repellendus iusto natus aliquam quos, aut corrupti
            voluptate, sit illo.
          </p>
          <p className="font-cinzel text-winter-400 text-sm md:text-xl text-center tracking-wider leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </section>

      <footer className="w-full h-auto bg-gray-900 flex flex-col items-center md:items-start md:flex-row justify-evenly">
        <div className=" p-5   flex flex-col items-center md:items-start justify-normal gap-3">
          <h3 className="font-primary text-winter-200 text-xl">
            SEGUIME EN INSTAGRAM
          </h3>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-winter-200 text-2xl">
              <BsInstagram />
              <span>@luladeoro</span>
            </div>
            <div className="flex items-center gap-2 text-winter-200 text-2xl">
              <BsInstagram />
              <span>@todasconelcelu</span>
            </div>
          </div>
          <h3 className="mt-10 font-primary text-winter-200 text-xl">
            SEGUIME EN VSCO
          </h3>
          <div className="pb-5 flex items-center gap-2 text-winter-200 text-2xl">
            <SiVsco />
            <span>@luladeoro</span>
          </div>
        </div>

        <div className=" p-5   flex flex-col items-center justify-normal gap-3">
          <h3 className="font-primary text-winter-200 text-xl">
            DEJAME TU MENSAJE
          </h3>
          <form className="flex flex-col gap-2">
            <input
              className="p-2 bg-gray-700"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="p-2 bg-gray-700"
              type="text"
              placeholder="Correo electronico"
            />
            <input
              className="p-2 bg-gray-700"
              type="text"
              placeholder="Asunto"
            />
            <textarea
              className="p-2 bg-gray-700"
              name=""
              id=""
              cols="40"
              rows="6"
              placeholder="Mensaje"
            ></textarea>
            <button
              className="py-2 flex justify-center items-center text-winter-200 bg-winter-700"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className=" p-5   flex flex-col items-center justify-normal gap-3">
          <div className="bg-[url(../src/assets/img/background/DACA1378-472C-48FE-B0C2-EC65639013D3.jpg)]  bg-cover bg-center flex items-center justify-center w-56 h-56 rounded-full overflow-hidden">
          </div>
          <p className="mt-5 font-medium text-winter-200 text-md font-cinzel">Lula de Oro</p>
          <p className=" font-medium text-winter-200 text-md font-cinzel">2023 - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
