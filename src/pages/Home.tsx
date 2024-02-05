
import bg from "../assets/Cyberpunk-City.jpg";
import heroImg from "../assets/img-portifolio.jpg";
import "./style.css";
import Typewriter from "./TypeWriter/TypeWrite";


const Home = () => {
  return (
    <div id="home" className=" h-screen w-full text-center bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${bg})` }} >
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-full mx-auto overflow-hidden rounded-xl items-center">
          <img src={heroImg} alt="me" />
        </div>

        <h1 className="uppercase font-bold text-branco text-5xl font-Montserrat animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[50ms] ">
          <Typewriter />
        </h1>

        <p className="text-branco text-2xl max-w-sm mx-auto font-Montserrat bg-AzulEscuro bg-opacity-60 rounded  animate-fade-left animate-once animate-duration-[2000ms] animate-delay-[50ms]">
          Venho me dedicando todos os dias em programação , com o objetivo de me tornar um desenvolvedor Full Stack excepcional. Meu foco é dar o meu melhor a cada dia independente dos problemas.
        </p>

        <a href="https://drive.google.com/drive/folders/13ZSgtGtC-W_pdKAbp7V5CUaeCgcvpv0q?usp=drive_link" target="_blank"  className="bg-gradient-to-r from-ad to-azul-celeste shadow-sm shadow-ab hover:shadow-AzulEscuro text-white font-bold py-2 px-4 rounded-full w-36 hover:text-az flex flex-row justify-around items-center animate-fade-right animate-once animate-duration-[2000ms] animate-delay-[50ms] mt-5">
          Currículo  </a>
      </div>
    </div>
  );
};

export default Home;
