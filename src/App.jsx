import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState } from "react"
import { useEffect } from "react"
// npx tailwindcss -i ./src/index.css -o ./src/dist/output.css --watch
function App() {
  const [pacientes, setPersonas] = useState([])
  const [pacienteA, setPacienteA] = useState({})
  useEffect(() => {
    const inicieAntes = () => {
        let ResultadoLS = JSON.parse(localStorage.getItem(('pacientes')))
        setPersonas(ResultadoLS)     
    }
    inicieAntes()
  }, [])
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
    console.log("2")
  }, [pacientes])
  const EliminarAlgoDelArreglo = (id) => {
    const nuevoarreglo = pacientes.filter(arregloViejo => arregloViejo.id !== id)
    setPersonas(nuevoarreglo)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPersonas={setPersonas}
          pacienteA={pacienteA}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteA={setPacienteA}
          EliminarAlgoDelArreglo={EliminarAlgoDelArreglo}
        />
      </div>
    </div>
  )
}
export default App
