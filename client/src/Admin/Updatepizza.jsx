import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getPizzaById, updatePizza } from '../Redux/Actions/adminAction'
import {useParams} from 'react-router-dom'
const Updatepizza = () => {
   
  const param = useParams()
  const {pizza,message,error} = useSelector((state) =>state.admin)
  const dispatch = useDispatch()


  const [name,setName]  = useState('')
  const [smallprice,setSmallPrice] = useState()
  const [mediumprice,setMediumPrice] = useState()
  const [largeprice,setLargePrice] = useState()
  const [imageurl,setImageUrl] = useState('')
  const [category,setCategory] = useState('')

  
  useEffect(()=>{ 
    if(pizza){
      if(pizza._id===param.id){
        setName(pizza.name)
        setCategory(pizza.category)
        setImageUrl(pizza.image)
        setSmallPrice(pizza.prices[0]['small'])
        setMediumPrice(pizza.prices[0]['medium'])
        setLargePrice(pizza.prices[0]['large'])
      }
      else{
        dispatch(getPizzaById(param.id))
      }
    }else{
      dispatch(getPizzaById(param.id))
    }
    
  },[pizza,param.id,dispatch])

  const updatePizzaHandler = (e) =>{
      
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

    dispatch(updatePizza(pizza,param.id))
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
      <span>Update Pizza</span>
      <form className='addpizzaform' >

          <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type="number" placeholder='Small Varient Price' value={smallprice} onChange={(e)=>{setSmallPrice(e.target.value)}}/>
          <input type="number" placeholder='Medium Varient Price' value={mediumprice} onChange={(e)=>{setMediumPrice(e.target.value)}}/>
          <input type="number" placeholder='Large Medium Price' value={largeprice} onChange={(e)=>{setLargePrice(e.target.value)}}/>
          <input type="text" placeholder='Image Url' value={imageurl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
          <input type="text" placeholder='Category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
          <button onClick={updatePizzaHandler}>Update Pizza</button>

      </form>
    </div>
  )
}

export default Updatepizza