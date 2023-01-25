import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { registerUser } from '../Redux/Actions/userAction';


const Register = () => {

  const dispatch = useDispatch();

  const {loading,message,error} = useSelector((state)=>state.user)
  
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const registerHandler = (e) =>{
     
    e.preventDefault()

    if(username===" "||email===""||password===""){
      alert("Please enter all fields")
    }

    dispatch(registerUser(username, email, password))

  }

  useEffect(() => {

    if(message){
      alert(message)
      dispatch({type:"clearMessage"})
    }

    if(error){
      alert(error)
      dispatch({ type: "clearError" });
    }
    
  }, [message,error])
  

  return (
    <div className="container1">
      <div className="login" style={{ height: '70%' }}>
        <form action="">
          <h2>Register</h2>

          <input className='input1' type="text" placeholder="Enter your Username" required 
          onChange={(e)=>setUsername(e.target.value)}/>

          <input className='input1' type="email" placeholder="Enter your email" required
           onChange={(e)=>setEmail(e.target.value)}/>

          <input className='input1' type="password" placeholder="Enter your password" required 
          onChange={(e)=>setPassword(e.target.value)} />

          <div className='fp'>
            <h4>already registered  ? <Link to='/login' style={{ color: 'crimson' }} >Login</Link></h4>
          </div>


          <button className='btn1' type="submit" disabled={loading} onClick={registerHandler} >Register</button>

        </form>



      </div>
    </div>
  )
}

export default Register