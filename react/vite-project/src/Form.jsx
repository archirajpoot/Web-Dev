import React, { useState } from 'react'
import './App.css'

const Form = () => {
   let[input,setinput]=useState({name:"",email:"",password:""});
    function funct1(e){
         let{name,value}=e.target;
         setinput({...input,[name]:value});
         console.log(input);
    }
       return(
        <div>
          <form>
            <input name="name" placeholder='enter your name' value={input.name} onChange={funct1}/><br/><br/><br/>
            <input name="email" type='email' placeholder='enter email' value={input.email}  onChange={funct1}/><br/><br/><br/>
            <input name="password" type="password" placeholder='enter password ' value={input.password}  onChange={funct1}/><br/><br/><br/>
            <button>submmit</button>
          </form>
        </div>

  )
}

export default Form