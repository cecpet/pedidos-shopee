import { Children } from "react";

export default function Pedido(props) {

    function handleClick(item) {
        item.target.classList.toggle('bg-slate-300')
        item.target.classList.toggle('bg-green-500')
    }

    return(
        <div className="relative sm:mt-12 p-8 border-2 min-w-full rounded-md">
            <button className="bg-slate-300 p-2 rounded-lg" onClick={handleClick}>Pronto</button>
            <h1 className="text-2xl">{props.id}</h1>
            <h2>{props.data}</h2>
            <h3>{props.nome}</h3>
            <div id="itens">
                {props.children}
            </div>
            <p>{props.obsInterna}</p>
        </div>
    )
}