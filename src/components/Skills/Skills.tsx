import { ImagesArray } from "../../modules/ArrayImg"
import TechImages from "./TechImages"

const Skills = () => {
  return (
    <div className="container mx-auto px-4 pt-64" >
      <h1 className="text-3xl font-Montserrat font-bold text-center animate-fade-left animate-once animate-duration-[3000ms] animate-ease-in-out animate-alternate animate-fill-forwards ">
        Minhas Habilidades
      </h1>
      <span className="text-xl font-Montserrat text-center animate-fade-left animate-once animate-duration-[3000ms] animate-ease-in-out animate-alternate animate-fill-forwards " >As tecnologias que estudo e trabalho</span>
      <TechImages images={ImagesArray} />
    </div>
  )
}

export default Skills