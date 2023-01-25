import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser,deleteUser,changeStatusUser } from '../Redux/Actions/adminAction'
import { AiFillDelete,AiFillEdit } from 'react-icons/ai';

const Userlist = () => {

  const { alluser,message,error } = useSelector((state) => state.admin)
  const dispatch = useDispatch()

  const deleteUserHandler = (id) =>{
    dispatch(deleteUser(id))
  }

  const changeStatusHandler=(id)=>{
    dispatch(changeStatusUser(id))
  }

  useEffect(() => {

    dispatch(getAllUser())

  }, [dispatch,getAllUser])

  useEffect(()=>{

     if(message){
      alert(message)
      dispatch({"type":"clearMessage"})
      dispatch(getAllUser())
     }

     if(error){
      alert(error)
      dispatch({"type":"clearError"})
      dispatch(getAllUser())
     }
  },[message,error,dispatch])

  return (
    <div className='commonContainer'>
      <span>Userlist</span>
      <div className='tablecontainer'>
        <table >
          <thead>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>isAdmin</th>
            <th>Delete User</th>
            <th>Change Status</th>
          </thead>
          <tbody>

            {
              alluser && alluser.map((user) => (

                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin?<span>Admin</span>:<span>user</span>}</td>
                  <td ><button className='changebtn' onClick={()=>{deleteUserHandler(user._id)}}><AiFillDelete size={20} color={'crimson'}/></button></td>
                  <td ><button className='changebtn' onClick={()=>{changeStatusHandler(user._id)}}><AiFillEdit size={20} color={'crimson'}/></button></td>
                </tr>

              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Userlist