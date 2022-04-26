import { useState } from "react"
import { useEffect } from "react"
import Error from "./Error"
const Formulario = ({pacientes, setPersonas, pacienteA}) => {
    const [nombre, setNombre] = useState('')
    const [nombrePropietario, setNombrePropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error , setError] = useState(false) 
    const HandleSudmit = (e) => {
        e.preventDefault()
        if([nombre, nombrePropietario, email, fecha, sintomas].includes('')){
            setError(true)
            return;
        } 
        const generadoraID = () => {
            let random = Math.random().toString(36).substring(2);
            let fecha = Date.now().toString(36)
            return random + fecha;
        }
        const objeto_carta = {
            nombre,
            nombrePropietario,
            email,
            fecha,
            sintomas,
        }
        if(pacienteA.id){
            objeto_carta.id = pacienteA.id
            const nuevoArreglo = pacientes.map(viejoArreglo => viejoArreglo.id === pacienteA.id ? objeto_carta : viejoArreglo)
            setPersonas(nuevoArreglo)
            pacienteA.id=""
        } else {
            objeto_carta.id = generadoraID();
            setPersonas([...pacientes, objeto_carta])
        }
        setError(false)
        setNombre("")
        setNombrePropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }
    useEffect(() => {
        if(Object.keys(pacienteA).length > 0){
            setNombre(pacienteA.nombre)
            setNombrePropietario(pacienteA.nombrePropietario)
            setEmail(pacienteA.email)
            setFecha(pacienteA.fecha)
            setSintomas(pacienteA.sintomas)
        }
    },[pacienteA])
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            {error && <Error children={<p>Todos los Campos son obligatorios</p>} />}
            <form onSubmit={HandleSudmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input id="mascota" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propetiario</label>
                    <input id="propietario" type="text" value={nombrePropietario} onChange={(e) => setNombrePropietario(e.target.value)} placeholder="Nombre Propetiario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Contacto Propietario</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input id="alta" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder="Alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} placeholder="Describe los sintomas"></textarea>
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all" value={pacienteA.id ? "Editar caso paciente" : "Agregar Paciente"} />
            </form>
        </div>
    )
}
export default Formulario