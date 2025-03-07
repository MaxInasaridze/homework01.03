import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
        <div className='maggie_div'>
            <h1>M</h1>
            <div className='maggie_name'>
                <h4 className='maggie_h3'>Maggie Brightstone</h4>
                <h6 className='maggie_p'>Virtual Assistant</h6>
            </div>
        </div>
            <ul className='nav_links'>
                <li><a href="#">Service and Pricing</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <i class="fa-solid fa-circle-user"></i>
                <li ><a href="#" className='login'>Log In</a></li>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-linkedin"></i>
            </ul>
    </nav>
  )
}