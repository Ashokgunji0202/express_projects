import React,{ useState } from 'react'


const RegisterForm = () => {

   const[formFields, setFormFields]= useState({
    username: '',
    email: '',
    password: '',
   });
  return (
    <form action="">
    <div>
        <label htmlFor="username">UserName: </label>
        <input
         type="text" 
         name="username" 
         id="username" 
         value={formFields.username}
         onChange={(event)=>{
            setFormFields((currentFileds)=>({
                ...currentFileds,
                username:event.target.value
            }))
         }}
         />
    </div>
    <div>
        <label htmlFor="email">Email : </label>
        <input
         type="email"
         name="email"
         id="email"
         value={formFields.email}
         onChange={(event)=>{
            setFormFields((currentFileds)=>({
                ...currentFileds,
                email:event.target.value
            }))
         }}
         />
    </div>
    <div>
        <label htmlFor="password">Password : </label>
        <input
         type="password"
         name="password"
         id="password"
         value={formFields.password}
         onChange={(event)=>{
            setFormFields((currentFileds)=>({
                ...currentFileds,
                password:event.target.value
            }))
         }}
         />
    </div>
    </form>
  )
}

export default RegisterForm
