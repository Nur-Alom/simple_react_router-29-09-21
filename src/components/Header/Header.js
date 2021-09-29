import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="">
            <NavLink className="btn" to="/home" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Home</NavLink>
            <NavLink className="btn" to="/friends" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Friends</NavLink>
            <NavLink className="btn" to="/about" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>About</NavLink>
            <NavLink className="btn" to="/about/culture" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Culture</NavLink>
        </div>
    );
};

export default Header;