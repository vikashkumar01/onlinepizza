import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { contactTo } from '../Redux/Actions/contactAction';
const Contact = () => {

  const dispatch =useDispatch();
  const {message,error} = useSelector((state)=>state.contact)

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [messagec,setMessage] = useState('')

  const contactHandler = (e) =>{

    e.preventDefault()

    if(username==='' || email==='' || messagec===''){
      alert("please enter all fields")
    }

    dispatch(contactTo(username, email, messagec))

    setUsername('')
    setEmail('')
    setMessage('')

  }

  useEffect(() =>{
    if(message){
      alert(message)
      dispatch({type:"clearMessage"})
      
    }

    if(error){
      alert(error)
      dispatch({type:"clearError"})
    }
  },[message,error])

  return (
    <div className="contact">
            <h1>Contact Us</h1>

            <div className="contactForm">

                <form>
                    <input type="text"  placeholder="Enter the username" 
                    onChange={(e)=>setUsername(e.target.value)}/>

                    <input type="email" placeholder="Enter the email" 
                    onChange={(e)=>setEmail(e.target.value)} />

                    <textarea class="area" name="" id="" cols="80" rows="20" placeholder="Enter the message"
                     onChange={(e)=>setMessage(e.target.value)}></textarea>

                    <input className='btn' type="submit" onClick={contactHandler}/>
                </form>

            </div>
        </div>
  )
}

export default Contact