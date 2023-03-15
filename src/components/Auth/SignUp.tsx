import React from 'react'
import { Button } from '../styled/Button.styles'
import { Input } from '../styled/Input.styles'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'

export const SignUp = () => {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    onSubmit:(value)=>{
      console.log(value);
    }
  })

  return (
<div className='flex flex-col items-center h-screen justify-between m-20  '>
        <form onSubmit={formik.handleSubmit} className='flex flex-col items-center h-80 justify-between   '>
          <h1 className='text-xl'>
            SignUp
          </h1>
          <Input required value={formik.values.name} onChange={formik.handleChange} name='name' placeholder='name' />
          <Input required value={formik.values.email} onChange={formik.handleChange} name='email'  placeholder='email'/>
          <Input required value={formik.values.password} onChange={formik.handleChange} name='password' placeholder='password'/>
          <div className='flex w-96 items-center justify-around'>
            <NavLink className='text-blue-400 hover:border border-solid border-blue-400 rounded py-2 px-5' to="/login">Login</NavLink>
            <Button type='submit' >SignUp</Button>
          </div>
        </form>
    </div>
  )
}
