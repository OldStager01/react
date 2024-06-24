import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(user){
        return (
        <div>
            Welcome {user.username};
        </div>
        )
    }
    else{
        return (
        <div>
            Please Login
        </div>
        )
    }
}

export default Profile