import React from 'react'
import './Header.scss'
import logo from '../assets/logo.png'

const Header = () => {
   return (
      <div className='header'>
         <div className='container'>
            <img src={logo} alt='exabytes' />
            <a href='#'>
               <i className='fa-solid fa-bars hamburger'></i>
            </a>
            <nav className='header__nav'>
               <ul className='nav__link nav__link--one'>
                  <li>
                     <a href='#'>Home</a>
                  </li>
                  <li>
                     <a href='#'>Shop</a>
                  </li>
                  <li>
                     <a href='#'>Contact</a>
                  </li>
               </ul>
               <ul className='nav__link nav__link--two'>
                  <li>
                     <a href='#' className='user-login'>
                        <i className='fa-regular fa-user'></i> Login
                     </a>
                  </li>
                  <li className='cart__link'>
                     <a href='#' className='cart'>
                        <i className='fa-solid fa-cart-arrow-down'></i> Cart
                        <p className='cart-quantity'>0</p>
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Header
