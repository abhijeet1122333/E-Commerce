import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav=()=>{
    return(
        const auth = localStorage.getItem('user');
        const navigate = useNavigate();
        const logout = ()=>{
            localStorage.clear();
        }
        <div>
            <ul className="nav-ul">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/logout">Logout </Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
    
            </ul>
        </div>
    )
}

export default Nav;