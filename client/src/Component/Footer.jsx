import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className='first'>
                <span>Pizza.</span>
                <p>Get Delicious Pizza</p>
            </div>
            <div className='second'>
                <h2>Our Links</h2>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className='third'>
                <h2>Our SocialMedia Links</h2>
                <AiFillFacebook color={'gray'} size={35} />
                <AiFillInstagram color={'gray'} size={35} />
                <AiFillTwitterSquare color={'gray'} size={35} />

            </div>
        </footer>
    )
}

export default Footer