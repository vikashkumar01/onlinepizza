import React,{useEffect} from 'react'

import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import About from './Pages/About'
import Register from './Pages/Register'
import Footer from './Component/Footer'

import './App.css';
import './Styles/navbar.css';
import './Styles/cart.css';
import './Styles/menu.css';
import './Styles/contact.css';
import './Styles/home.css';
import './Styles/login.css';
import './Styles/profile.css';
import './Styles/footer.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getUser } from './Redux/Actions/userAction'
import Admin from './Admin/Admin'
import Userlist from './Admin/Userlist'
import Orderlist from './Admin/Orderlist'
import Addnewpizza from './Admin/Addnewpizza'
import Updatepizza from './Admin/Updatepizza'
import Pizzalist from './Admin/Pizzalist'


function App() {

  const { isAuthenticated,user } = useSelector((state)=>state.user)

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getUser())

  }, [dispatch])

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/menu' element = {<Menu/>}/>
          <Route exact path='/contact' element = {<Contact/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/profile' element = {isAuthenticated?<Profile user={user}/>:<Home/>}/>
          <Route exact path='/cart' element = {isAuthenticated?<Cart/>:<Home/>}/>
          <Route exact path='/register' element = {isAuthenticated?<Home/>:<Register/>}/>
          <Route exact path='/login' element = {isAuthenticated?<Home/>:<Login/>}/>
          <Route exact path='/admin' element = {<Admin/>}>
            <Route exact path='/admin/userlist' element={<Userlist/>}/>
            <Route exact path='/admin/orderlist' element={<Orderlist/>}/>
            <Route exact path='/admin/addnewpizza' element={<Addnewpizza/>}/>
            <Route exact path='/admin/pizzalist' element={<Pizzalist/>}/>
            <Route exact path='/admin/updatepizza/:id' element={<Updatepizza/>}/>
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
