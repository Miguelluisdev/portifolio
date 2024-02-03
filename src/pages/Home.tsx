import { FaArrowRight } from "react-icons/fa";
import heroImg from "../assets/Arcane Jinx.jpg";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-hero-pattern bg-cover bg-no-repeat bg shadow-lg bg-center">
        <div className="flex flex-col md:flex-row items-center justify-center px-4 h-full">
          <div className="bg-ad rounded-md px-9 bg-opacity-5 flex flex-col items-center space-y-4 md:w-1/2">
            <h1 className="font-Montserrat font-bold text-4xl">Full Stack Developer</h1>
            <p className="font-Montserrat text-xl">
              Venho me dedicando todos os dias em programação. Desde o início, não houve um único dia em que não tenha continuado a aprender, com o objetivo de me tornar um desenvolvedor Full Stack excepcional. Meu foco é resolver os erros. sou estudante de ADS na UNISUAM e também faço cursos na udemy, one bit code, cursos em vídeo e cursos CFB e hora de codar estou em busca de ser desenvolvedor fullstack.
            </p>
            <a href="" className="bg-gradient-to-r from-ad to-azul-celeste shadow-sm shadow-ab hover:shadow-AzulEscuro text-white font-bold py-2 px-4 rounded-full hover:text-az flex flex-row  justify-center items-center w-40  " >
              Currículo <FaArrowRight className="ml-1-5 my-1 pl-1 " />
            </a>
          </div>
          <div className="flex items-center md:w-1/2 md:ml-10">
            <img
              src={heroImg}
              alt="my profile"
              className="max-w-full h-80 rounded-full object-cover shadow-lg md:max-w-sm"
            />
          </div>
          <div>icons</div>
        </div>
      </div>
    </>
  );
};

export default Home;