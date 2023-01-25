import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { isAuthenticated } = useSelector((state) => state.user)

    const { cartItems } = useSelector((state) => state.cart)

    return (
        <nav>
            <div className='header'>
                <span>Pizza.</span>
            </div>
            <div className='navlink'>
                <div className='link'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                    {
                        isAuthenticated ? <>
                            <Link to='/profile'>Profile</Link>
                            <div className='cartItems'>
                                <Link to='/cart'>Cart</Link>
                                <span >{cartItems.length}</span>
                            </div>

                        </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }


                </div>
            </div>
        </nav>
    )
}

export default Navbar