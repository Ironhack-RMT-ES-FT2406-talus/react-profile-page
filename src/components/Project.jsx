import projectImg from "../assets/flappybird.jpg"
import ProjectLink from "./ProjectLink"

function Project() {

  return (

    <section>

      <h4>Proyecto final modulo 1</h4>
      <h5>Flappy Bird</h5>

      {/* 1. si las imagenes estan en la carpeta public. Menos recomendada. */}
      {/* <img src="flappybird.jpg" alt="juego" width="200px" /> */}

      {/* 2. las imagenes desde assets, importadas. Más recomendada */}
      <img src={projectImg} alt="juego" width="200px"/>

      <ProjectLink />

    </section>

  )

}

export default Project