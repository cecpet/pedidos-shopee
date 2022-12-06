import { supabase } from '../../supabase'
import { useState, useEffect } from 'react'



export default function Enviar(){
    const [pedidosFeitos, setPedidosFeitos] = useState([]);

    async function getPedidos(){
        const { data, error } = await supabase
        .from('pedidos_feitos')
        .select('pedido_id')
        setPedidosFeitos(data)
    }

        getPedidos()

    return(
        <div className='mx-4 my-4'>
            <h1 className='font-bold text-3xl'>Pedidos Separados</h1>
            <div>
                {
                    pedidosFeitos == [] ? console.log('Vazio') : pedidosFeitos.map(item => {
                    
                    })
                }
            </div>
        </div>
    )
}