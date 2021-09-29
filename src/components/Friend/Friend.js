import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    // console.log(props.friend);
    const { id, name, phone, email, username, website } = props.friend;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div className="friend">
            {/* <h2>Hello From Single Friend..</h2> */}
            <h2>Name: {name}</h2>
            <h3>E-mail: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>user Name: {username}</h3>
            <Link to={`/friend/${id}`}>Visit Me</Link>
            <br />
            <button onClick={handleClick}>Visit Me</button>
        </div>
    );
};

export default Friend;