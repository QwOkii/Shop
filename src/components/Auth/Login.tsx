import React from 'react'
import { Button } from '../styled/Button.styles'
import { Input } from '../styled/Input.styles'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'

export const Login = () => {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(value)=>{

    }
  })


  return (
    <div className='flex flex-col items-center h-screen justify-between m-20'>
        <div className='flex flex-col items-center h-64 justify-between  '>
          <h1 className='text-xl'>
            Login
          </h1>
          <Input required value={formik.values.email} onChange={formik.handleChange} name='email' placeholder='email'/>
          <Input required value={formik.values.password} onChange={formik.handleChange} name='password' placeholder='password'/>
          <div className='flex w-96 items-center justify-around'>
            <NavLink className='text-blue-400 hover:border border-solid border-blue-400 rounded py-2 px-5' to="/signup">Sign Up</NavLink>
            <Button >login</Button>
          </div>
        </div>
    </div>
  )
}
