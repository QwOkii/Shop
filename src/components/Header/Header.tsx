import React from 'react'
import { InputSearch } from '../styled/Input.styles'
import { BiHeart,BiBox,BiCart} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { Button } from '../styled/Button.styles'

export const Header:React.FC<{}> = () => {
  return (
    <div className='flex h-16 items-center justify-around font-Rubik text-xs'>
        <Button className="text-lg whitespace-pre">каталог</Button>
        
        <InputSearch placeholder='Search'/>

        <div className='flex flex-col items-center hover:opacity-80'>
          <BiHeart fill='#414141'  className='h-6 w-6 my-1'/>
          <p>Вибране</p>
        </div>
        <div className='flex flex-col items-center  hover:opacity-80'>
            <BiBox fill='#414141' className='h-6 w-6 my-1'/>
          <p>Замовлення</p>
        </div>
        <div className='flex flex-col items-center  hover:opacity-80'>
          <BiCart fill='#414141' className='h-6 w-6 my-1'/>
          <p>Кошик</p>
        </div>

        {/* <div className='flex w-40 h-10 m-2.5 text-lg'>
          <img className='h-10 w-10 bg-gray-500 rounded-full mx-2.5' src="" alt="" />
          <div className="">
            name
          </div>
          <div className=''>^</div>
        </div> */}
        <Button  ><NavLink to="/login">Login</NavLink></Button>
    </div>
  )
}
