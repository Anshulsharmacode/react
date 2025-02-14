import React, { useState, useContext } from 'react';
import Usecontext from "../context/Usecontext";

function Login() {
    const { setuser } = useContext(Usecontext);
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        setuser({ name, password });
    }

    return (
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
            <input 
                type="text" 
                placeholder='Username' 
                value={name} 
                onChange={(e) => setname(e.target.value)} 
                style={{ marginBottom: '10px', padding: '8px' }} 
            />
            <input 
                type="password" 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setpassword(e.target.value)} 
                style={{ marginBottom: '10px', padding: '8px' }} 
            />
            <button type="submit" style={{ padding: '8px' }}>Submit</button>
        </form>
    );
}

export default Login;

