import React,{useState} from 'react'
import { useEffect } from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { addNewPizza } from '../Redux/Actions/adminAction'

const Addnewpizza = () => {

  const dispatch = useDispatch()
  const {message,error} = useSelector((state)=>state.admin) 

  const [name,setName]  = useState('')
  const [smallprice,setSmallPrice] = useState()
  const [mediumprice,setMediumPrice] = useState()
  const [largeprice,setLargePrice] = useState()
  const [imageurl,setImageUrl] = useState('')
  const [category,setCategory] = useState('')

  const addPizzaHandler = (e) =>{
      
    e.preventDefault()

    if(name === "" || imageurl === "" || category === "" || smallprice === "" || mediumprice === ""
       || largeprice===""){
        alert("Please enter all fields")
    }

    const pizza={
      name,
      imageurl,
      category,
      prices:{
        small:smallprice,
        medium:mediumprice,
        large:largeprice
      }
    }

    dispatch(addNewPizza(pizza))
  }

  useEffect(()=>{
      
    if(message){
      alert(message)
      dispatch({"type": "clearMessage"})
    }

    if(error){
      alert(error)
      dispatch({"type": "clearError"})
    }
  },[message,error,dispatch])

  return (
    <div className='commonContainer'>
      <span>Add New Pizza</span>
      <form className='addpizzaform' >

          <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type="number" placeholder='Small Varient Price' value={smallprice} onChange={(e)=>{setSmallPrice(e.target.value)}}/>
          <input type="number" placeholder='Medium Varient Price' value={mediumprice} onChange={(e)=>{setMediumPrice(e.target.value)}}/>
          <input type="number" placeholder='Large Medium Price' value={largeprice} onChange={(e)=>{setLargePrice(e.target.value)}}/>
          <input type="text" placeholder='Image Url' value={imageurl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
          <input type="text" placeholder='Category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
          <button onClick={addPizzaHandler}>Add Pizza</button>

      </form>
    </div>
  )
}

export default Addnewpizza