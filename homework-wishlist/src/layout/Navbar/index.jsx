import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/WishlistContext'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const {WishlistArr} = useContext(WishlistContext)
  return (
    <nav id='navbar'>
        <div>
            <select name="" id="">
                <option value="">USD</option>
                <option value="">EURO</option>
            </select>
            <select name="" id="">
                <option value="">ENG</option>
                <option value="">FRA</option>
                <option value="">ESP</option>
            </select>
        </div>
        <ul>
            <li> <NavLink activeClassName="active" to="/">Category</NavLink> </li>
            <li className={WishlistArr.length>0 ? "wishlist":""}> 
            <NavLink activeClassName="active" to="/wishlist">Wishlist({WishlistArr.length})</NavLink>
             </li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar