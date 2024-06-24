import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext';

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(UserContext);
    const onSubmitHandler=()=>{
        setUser({username,password});
    }
  return (
    <div>
        <input type="text" 
        name='username'
        value={username}
        placeholder='username'
        onChange={e=>{setUsername(e.target.value)}}/>
        {' '}
        <input type="password" 
        name='password'
        value={password}
        placeholder='password'
        onChange={e=>{setPassword(e.target.value)}}/>
        {' '}
        <button onClick={onSubmitHandler}>Submit</button>
    </div>
  )
}

export default Login