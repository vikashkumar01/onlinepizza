import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deliveredOrder, getAllOrders } from '../Redux/Actions/adminAction'

const Orderlist = () => {

  const { allorders,message,error } = useSelector((state) => state.admin)

  const dispatch = useDispatch()

  const DeliveredHandler = (id) =>{
     dispatch(deliveredOrder(id))
     dispatch(getAllOrders())
  }

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch,getAllOrders])

  useEffect(() => {
     if(message){
      alert(message)
      dispatch({"type":"clearMessage"})
      dispatch(getAllOrders())
     }

     if(error){
      alert(error)
      dispatch({"type":"clearError"})
      dispatch(getAllOrders())
     }
  }, [message,error,dispatch])
  

  return (
    <div className='commonContainer'>
      <span>Orderlist</span>
      <div className='tablecontainer'>
        <table >
          <thead>
            <th>OrderId</th>
            <th>Name</th>
            <th>Email</th>
            <th>OrderAmount</th>
            <th>TransactionId</th>
            <th>isDelivered</th>
          </thead>
          <tbody>

            {
              allorders && allorders?.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>₹{order.orderAmount}</td>
                  <td>{order.transactionId}</td>
                  <td>{order.isDelivered?<>Delivered</>:
                    <button className='deliveredbtn' onClick={()=>{DeliveredHandler(order._id)}}>Not Delivered</button>}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orderlist