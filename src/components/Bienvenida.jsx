import { useForm } from "react-hook-form";
import {useModal} from "../hooks/useModal";
import Modal from "./Modal";


const Bienvenida =() =>{
    const { register, handleSubmit } = useForm();
    const [isOpenModal1, openModal1, closeModal1]= useModal(false);
    const onSubmit=(data) =>{
        console.log(data);
    }
    return <div>
        <h2>Proyecto Final Módulo 7 react ...</h2>
        <button onClick={openModal1}>Abrir Modal</button>

        <Modal isOpen= {isOpenModal1} closeModal= {closeModal1}>
            <h3>Proy final m7 USIP</h3>
            <p>Proyecto final modulo 7 </p>
            <p>participante: MARIANELA GONZALES ZENTENO</p>
            
        </Modal>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" {... register('nombre')} />
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" {...register('apellido')} />
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" {... register('telefono')} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
}
export default Bienvenida;