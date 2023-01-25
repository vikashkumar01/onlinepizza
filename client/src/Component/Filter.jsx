import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { filterPizza, filterPizzaByCategory, getAllPizza } from '../Redux/Actions/pizzaAction'

const Filter = () => {
  
  const [searchkey,setSearchkey] = useState('')

  const dispatch = useDispatch();

  return (
    <>
    
    <div className='search'>
        <input type="text" placeholder='search the pizza' onChange={(e)=>setSearchkey(e.target.value)}/>
        <button onClick={()=>{dispatch(filterPizza(searchkey))}}>Search</button>
    </div>

    <div className='filterbtn'>

        <button onClick={()=>{dispatch(getAllPizza())}}>All</button>
        <button onClick={()=>{dispatch(filterPizzaByCategory('veg'))}}>Veg</button>
        <button onClick={()=>{dispatch(filterPizzaByCategory('nonveg'))}}>Non-Veg</button>

    </div>
    
    </>
  )
}

export default Filter