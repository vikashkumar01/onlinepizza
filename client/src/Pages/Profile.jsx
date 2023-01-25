import React from 'react'
import img from '../Assests/pizzapic.jpg'
import {useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../Redux/Actions/userAction';

const Profile = ({user}) => {
   
  const dispatch = useDispatch();
  return (
    <div className='profileContainer'>

      <div className='profileWidth'>
        <div className='imgContainer'>
        <h1>Profile</h1>
          <img src={img} alt="Not Found" />
          <input type='file' />
        </div>
        <div className='profileDetails'>
          <h3>{user?.username}</h3>
          <h3>{user?.email}</h3>
        </div>
        <div className='btnContainer'>
          <button>Order History</button>
          <button style={{backgroundColor:"black"}}
          onClick={()=>{dispatch(logoutUser())}}>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile