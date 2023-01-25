import React from 'react'
import  './admin.css'
import {Link, Outlet} from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admincontainer'>
      <span>ADMIN PANEL</span>
      <div className='link1'>
        <Link to='/admin/userlist'>Userlist</Link>
        <Link to='/admin/pizzalist'>Pizzalist</Link>
        <Link to='/admin/addnewpizza'>Addpizzalist</Link>
        <Link to='/admin/orderlist'>Orderpizzalist</Link>
      </div>
       <Outlet/>  
    </div>
  )
}

export default Admin