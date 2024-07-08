import Header from "./components/Header.jsx"
import Tecnologias from "./components/Tecnologias.jsx"
import "./App.css"
import Project from "./components/Project.jsx"


//! APP es la base de nuestra aplicacion, es el body
function App() {

  console.log("patata")

  return (
    <div>
      
      <Header />

      <Tecnologias />

      <Project />

    </div>
  )
}

export default App
