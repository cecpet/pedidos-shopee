import { MdOutlineClose } from "react-icons/md";
import { IconContext } from "react-icons";
export default function Menu(props) {
    return(
        <div className={props.style == '' ? 'wd-full h-full bg-slate-200 md:w-1/3 absolute right-0 -top-8 translate-x-full p-8  z-20' : props.style}>
            <IconContext.Provider value={{size: "2em"}}>
                <MdOutlineClose className="hover:cursor-pointer mt-6" onClick={props.styleClear}/>
            </IconContext.Provider>
            <h1 className="mt-10 font-bold text-4xl">Pedidos</h1>
            <ul className="my-5 font-medium text-2xl">
                <li className="my-4 border-b-2 border-slate-400 p-2">A separar</li>
                <li className="my-4 border-b-2 border-slate-400 p-2">Separação de Produtos</li>
                <li className="my-4 border-b-2 border-slate-400 p-2">Enviar</li>
                <li className="my-4 border-b-2 border-slate-400 p-2">Lista de Envios</li>
            </ul>
        </div>
    )
}