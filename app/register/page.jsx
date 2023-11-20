import RegisterForm from '@/components/Form/Forms/RegisterForm'
import React from 'react'

const RegisterPage = () => {
  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between px-5 pt-20 bg-purple">
           <RegisterForm/> 
        </main>
    </>
  )
}

export default RegisterPage