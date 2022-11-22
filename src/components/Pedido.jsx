import { Children } from "react";
import { supabase } from "../../supabase";

export default function Pedido(props) {
    function handleClick(item) {
        const confirm = window.confirm('Deseja confirmar o pedido?')

        const postId = async () => {
            const { data, error } = await supabase
            .from('pedidos_feitos')
            .insert({
                pedido_id: props.id
            })

            props.pedidoP(props.id)
        }

         if(confirm) {
            console.log('confirmado')
            postId()
            item.target.classList.toggle('bg-green-500')
            item.target.disabled = true;
            item.target.classList.add('cursor-not-allowed')
        } else {
            console.log('cancelado')
        }
    }

    return(
        <div className="relative sm:mt-12 p-8 border-2 min-w-full rounded-md ">
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