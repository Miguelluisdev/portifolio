import { FaArrowRight } from "react-icons/fa";
import bg from "../assets/Cyberpunk-City.jpg";
import heroImg from "../assets/Arcane Jinx.jpg";
import "./style.css";


const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-screen px-4 md:flex-row">
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next.js, and GraphQL.
          </p>

          <div className="mx-auto md:mx-0">
            <a
              href="#portfolio"
              className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Curriculo
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="md:w-2/2">
          <img
            src={heroImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-md"
          />
        </div>


      </div>
    </div>
  );
};

export default Home;
