import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(2) // simulating network delay
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
  }
  return (
    <>
    {isSubmitting && <div>Loading</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", {
            required:true,
            minLength:{value:3, message:"minlength is 3"},
            maxLength:{value:8,message:"maxlength is 8"}})} type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <br/>
          <input placeholder='password' {...register("password", {
            required:true,
            minLength:{value:3, message:"minlength is 6"},
            maxLength:{value:8,message:"maxlength is 20"}})} type="Password" />
          {errors.password && <div>{errors.password.message}</div>}
          <br/>
          <input disabled={isSubmitting} type="Submit" value="Submit" />
          {/* Custom Errors
           {errors.myform && <div>{errors.myform.message}</div>} */}
        </form>
      </div>
    </>
  )
}

export default App
