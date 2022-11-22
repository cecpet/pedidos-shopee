export default function PedidoItem(props) {
    return(
        <div className="flex justify-between gap-3 border-b-2 py-2">
            <p><span className="font-bold">Produto:</span> {props.descricao}</p>
            <p><span className="font-bold">Qntd: </span>{props.qntd}</p>
        </div>
    )
}