import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwite/auth'

function LogoutBtn() {
    const dispatch=useDispatch();

    const handleLogout=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
        .catch(e=> {
            console.log(`LogoutBtn :: handleLogout :: error`,e);
            throw e;
        })
    }

    return (
        <button
            onClick={handleLogout}
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        >Logout</button>
    )
}

export default LogoutBtn