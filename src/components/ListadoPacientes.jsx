import Paciente from "./Paciente"
const ListadoPacientes = ({ pacientes, setPacienteA, EliminarAlgoDelArreglo }) => {    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            { pacientes  && pacientes.length ?           
            <>
            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center" >Administra tus {""} <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
            {pacientes.map( pacientes => (
                <Paciente
                    key={pacientes.id}
                    pacientes={pacientes}
                    setPacienteA={setPacienteA}
                    EliminarAlgoDelArreglo={EliminarAlgoDelArreglo}
                />
            )) }
            </>
            :
            <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center" >Comienza agregando pacientes {""} 
            <span className="text-indigo-600 font-bold">aparecerán en este lugar</span>
            </p>
            </>
            }  
        </div>
    )
}
export default ListadoPacientes