import { Children } from "react";

export default function Pedido(props) {
    return(
        <div className="sm:mt-12 p-8 border-2 mx-auto w-1/2 rounded-md">
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