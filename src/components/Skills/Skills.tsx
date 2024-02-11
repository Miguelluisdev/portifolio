import { ImagesArray } from "../../modules/ArrayImg"
import TechImages from "./TechImages"
import bg from "../../assets/cyb.jpg"

const Skills = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.405)' }}>
      <div className="container mx-auto px-4 pt-60">
        <h1 className="text-3xl font-Montserrat font-bold text-center animate-fade-left animate-once animate-duration-[3000ms] animate-ease-in-out animate-alternate animate-fill-forwards">
          Minhas Habilidades
        </h1>
        <span className="text-xl font-Montserrat text-center animate-fade-left animate-once animate-duration-[3000ms] animate-ease-in-out animate-alternate animate-fill-forwards">
          As tecnologias que estudo e trabalho
        </span>
        <TechImages images={ImagesArray} />
      </div>
    </div>
  )
}

export default Skills
