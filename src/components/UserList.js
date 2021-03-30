import React, { useEffect } from 'react';
import { useContext } from 'react'
import UserContext from '../context/user/UserContext'
import userContext from '../context/user/UserContext';

const UserList = () => {
    const { getUsers} = useContext(userContext);
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>

        </div>
    )
}

export default UserList;