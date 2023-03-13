import React from 'react'
import { InputSearch } from '../styled/Input.styles'
import { BiHeart,BiBox,BiCart} from 'react-icons/bi'

export const Header:React.FC<{}> = () => {
  return (
    <div className='flex h-16 items-center justify-around font-Rubik text-xs'>
        <button className="bg-green-400 w-36 h-10 text-white">каталог</button>
        
        <InputSearch />

        <div className='flex flex-col items-center'>
          <BiHeart fill='#414141'  className='h-6 w-6 my-1'/>
          <p>Избранное</p>
        </div>
        <div className='flex flex-col items-center'>
            <BiBox fill='#414141' className='h-6 w-6 my-1'/>
          <p>Заказы</p>
        </div>
        <div className='flex flex-col items-center '>
          <BiCart fill='#414141' className='h-6 w-6 my-1'/>
          <p>Корзина</p>
        </div>

        <div className='flex w-40 h-10 m-2.5 text-lg'>
          <img className='h-10 w-10 bg-gray-500 rounded-full mx-2.5' src="" alt="" />
          <div className="">
            name
          </div>
          <div className=''>^</div>
        </div>
    </div>
  )
}
