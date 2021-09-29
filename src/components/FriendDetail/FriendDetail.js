import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])

    return (
        <div>
            <h1>Hello From Detail: {friendId}</h1>
            <p>Name: {friend.name}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <p>Work at: {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;