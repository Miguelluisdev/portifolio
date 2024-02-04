import { ImagesArray } from "../../modules/ArrayImg"
import TechImages from "./TechImages"

const Skills = () => {
  return (
    <div className="container mx-auto px-4 pt-64" >
      <h1 className="text-3xl font-Montserrat font-bold text-center ">
        Minhas Habilidades
      </h1>
      <span className="text-xl font-Montserrat text-center" >As tecnologias que estudo e trabalho</span>
      <TechImages images={ImagesArray} />
    </div>
  )
}

export default Skills