import { Children, useEffect, useState } from "react";
import { supabase } from "../../supabase";

export default function Pedido(props) {
    const [status, setStatus] = useState('');
    useEffect(() =>{
        props.pedidosFeitosId.data.forEach(item => {
            let pedidoId = item.pedido_id;
            if(pedidoId == props.id){
                console.log('Funcionou')
                setStatus('FEITO')
            }
        })
    },[])

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
            window.location.reload()
        } else {
            console.log('cancelado')
        }
    }

    let date = new Date(props.data);
    let dataPedido = (date.getDate() + 1) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let dia = date.getDate() + 1
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();

    function somarData(dias) {
        let diaPrevisto = dia+5+"/"+mes+"/"+ano;
    
        if (dia > 30){
            let novoDia = dias - (30 - dia);
            mes++;

            diaPrevisto = novoDia+"/"+mes+"/"+ano;
            return diaPrevisto
        }

        return diaPrevisto
    }

    return(
        <div className="relative sm:mt-12 p-8 border-2 min-w-full rounded-md ">
            <div className="flex items-center justify-between">
                <button className={status == 'FEITO' ? 'bg-green-300 p-2 rounded-lg cursor-not-allowed' : 'bg-slate-300 p-2 rounded-lg cursor-pointer'} onClick={handleClick}>Pronto</button>
                <h2 className="font-bold text-lg text-green-600">{status !== ''? status : ''}</h2>
            </div>
            <h1 className="text-2xl">{props.id}</h1>

            <h2>Criado em: <span className="font-bold">{dataPedido}</span></h2>
            <h2>Entregar até: <span className="font-bold">{somarData(5)}</span></h2>
            <h3>{props.nome}</h3>
            <div id="itens">
                {props.children}
            </div>
            <p>{props.obsInterna}</p>
        </div>
    )
}