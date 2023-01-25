import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../Redux/Actions/userAction';

const Login = () => {

  const dispatch = useDispatch();

  const {message,error} = useSelector((state)=>state.user)
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginHandler = (e) =>{
     
    e.preventDefault()

    if(email===""||password===""){
      alert("Please enter all fields")
    }

    dispatch(loginUser(email, password))

  }

  useEffect(() => {
     
    if(message){
      alert(message)
      dispatch({type:"clearMessage",})  
    }

    if(error){
      alert(error)
      dispatch({ type: "clearError" });
    }
    
  }, [message,error])
  

  return (
    <div className="container1">
      <div className="login">
        <form >
          <h2>Login</h2>

          <input className='input1' type="email" placeholder="Enter your email" required
          onChange={(e)=>{setEmail(e.target.value)}} />

          <input className='input1' type="password" placeholder="Enter your password" required 
          onChange={(e)=>{setPassword(e.target.value)}}/>

          <div className='fp'>
            <a >Forget Password</a>
            <h4>New Here ? <Link to='/register' style={{color:'crimson'}} >Register</Link></h4>
          </div>


          <button className='btn1' type="submit" onClick={loginHandler} >Login</button>
         

          </form>



      </div>
    </div>
  )
}

export default Login