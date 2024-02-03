import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-AzulEscuro ">
      <div className="max-w-screen-xl mx-auto w-full pt-24 p-4 flex flex-col justify-around items-center">
        <h2 className="text-2xl font-medium mb-4 font-Montserrat animate-bounce animate-infinite animate-duration-[2000ms]  animate-ease-in-out ">
          Front End Developer
        </h2>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <section className="container mx-auto px-4">
        <p className="text-lg leading-loose mb-8 font-Montserrat animate-fade-left animate-once animate-duration-500 animate-delay-[30ms] animate-ease-in-out ">
          Olá, sou estudante de ADS na UNISUAM e também faço cursos na udemy, one bit code, cursos em vídeo e cursos CFB e hora de codar estou em busca de ser desenvolvedor fullstack, por enquanto estou estudando React ,typescript e tailwind estou em busca de um estagio , procurando sempre aprender com os erros , e encontrar as melhores maneiras de resolver um problema.
        </p>
      </section>
      <section>
        <div className="flex flex-col sm:flex-row px-4 py-4">
          <h1>Aonde me encontrar</h1>
          <div className="text-3xl md:text-5xl cursor-pointer hover:text-az w-full sm:w-1/4 px-5 mx-5 mb-4 sm:mb-0 animate-fade-right animate-once animate-duration-500 animate-delay-[30ms] animate-ease-in-out ">
            <a href="https://github.com/Miguelluisdev" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="text-3xl md:text-5xl cursor-pointer hover:text-az w-full sm:w-1/4 px-5 mx-5 mb-4 sm:mb-0 animate-fade-right animate-once animate-duration-500 animate-delay-[30ms] animate-ease-in-out">
            <a href="https://www.linkedin.com/in/miguel-luis-8533022a0/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
          <div className="text-3xl md:text-5xl cursor-pointer hover:text-az w-full sm:w-1/4 px-5 mx-5 mb-4 sm:mb-0 animate-fade-left animate-once animate-duration-500 animate-delay-[30ms] animate-ease-in-out">
            <a href="https://www.instagram.com/migu3lluiz?igsh=OGppOG05c25mY292" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div className="text-3xl md:text-5xl cursor-pointer hover:text-az w-full sm:w-1/4 px-5 mx-5 animate-fade-left animate-once animate-duration-1000 animate-delay-[30ms] animate-ease-in-out">
            <a href="https://w.app/R7sA1C" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
