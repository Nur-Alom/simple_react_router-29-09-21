import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    const style = {
        display: "grid",
        gridTemplateColumns: 'repeat(3,1fr)'
    }
    return (
        <div>
            <h2>I Have: '{friends.length}' Friends</h2>
            <div style={style}>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    />)
                }
            </div>
        </div>
    );
};

export default Friends;