import { useState, useEffect } from 'react'

import Pedido from './components/Pedido'
import PedidoItem from './components/PedidoItem';

function App() {
  
  const [pedidos, setPedidos] = useState([]);
  useEffect(()=> {
    fetch('https://pedidos-shopee.netlify.app/api')
    .then(response => response.json())
    .then(data=>{
      setPedidos(data.retorno.pedidos)
    })
  }, [])

  console.log(pedidos)

  return (
    <div className="mx-auto">
      <h1 className='text-3xl font-bold text-center mt-8'>Pedidos Shopee</h1>
      <div className='grid grid-flow-row auto-rows-max gap-3'>
        {
          pedidos.map((item) => 
              <Pedido key={item.pedido.numero} id={item.pedido.numeroPedidoLoja} data={item.pedido.data}>
                {
                  item.pedido.itens.map((item) =>
                    <PedidoItem key={item.item.codigo} descricao={item.item.descricao} qntd={parseInt(item.item.quantidade)}/>
                  )
                }
              </Pedido>
          )
        }  
      </div>
    </div>
  )
}

export default App
