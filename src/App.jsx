import { useState, useEffect } from 'react'

import Pedido from './components/Pedido'
import PedidoItem from './components/PedidoItem';
import Menu from './components/Menu'
import { MdMenu } from "react-icons/md";
import { IconContext } from "react-icons";


function App() {
  const [menu, setMenu] = useState(false)
  const [style, setStyle] = useState('')
  const [pedidos, setPedidos] = useState([]);
  useEffect(()=> {
    fetch('/api')
    .then(response => response.json())
    .then(data=>{
      setPedidos(data.retorno.pedidos)
    })
  }, [])

  function handleMenu() {
      setStyle('md:w-1/3 h-full bg-slate-200  absolute right-0 -top-8 translate-x-0 p-8 z-20')
  }

  function styleClear() {
    setStyle('')
  }

  return (
    <div className="mx-auto relative">
      <Menu style={style} styleClear={styleClear} />
      <nav className='flex justify-between mt-8 items-center mx-8'>
        <IconContext.Provider value={{size: "2em"}}>
          <div className=''>
            <p className='text-3xl font-bold '>Pedidos Shopee</p>
            <p className='text-3xl font-regular '>{pedidos.length} pedidos</p>
          </div>
          <MdMenu className='hover:cursor-pointer' onClick={handleMenu}/>
        </IconContext.Provider>
      </nav>
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
