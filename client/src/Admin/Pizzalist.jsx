import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePizzaById, getAllPizza } from '../Redux/Actions/adminAction'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const Pizzalist = () => {

  const { allpizzas,message,error } = useSelector((state) => state.admin)

  const dispatch = useDispatch()

  const deletePizzaHandler = (id) =>{
    dispatch(deletePizzaById(id))
  }

  useEffect(() => {
    dispatch(getAllPizza())
  }, [dispatch])

  useEffect(()=>{

     if(message){
      alert(message)
      dispatch({"type":"clearMessage"})
      dispatch(getAllPizza())
     }
      
     if(error){
      alert(error)
      dispatch({"type":"clearError"})
      dispatch((getAllPizza()))
     }

  },[message,error,dispatch])

  return (
    <div className='commonContainer'>
      <span>Pizzalist</span>
      <div className='tablecontainer'>
        <table >
          <thead>
            <th>PizzaId</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Update</th>
          </thead>
          <tbody>
            {
              allpizzas && allpizzas.map((pizza) => (

                <tr key = {pizza._id}>
                  <td>{pizza._id}</td>
                  <td>{pizza.name}</td>
                  <td>
                      Small: ₹{pizza.prices[0]['small']}<br />
                      Medium: ₹{pizza.prices[0]['medium']}<br />
                      Large: ₹{pizza.prices[0]['large']}
                  </td>
                  <td>{pizza.category}</td>
                  <td ><button className='changebtn' onClick={()=>{deletePizzaHandler(pizza._id)}} ><AiFillDelete size={20} color={'crimson'} /></button></td>
                  <td ><Link to={'/admin/updatepizza/'+pizza._id}><AiFillEdit size={20} color={'crimson'} /></Link></td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pizzalist