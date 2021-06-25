import React, { useState } from 'react';

const Register = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser({
            username,
            email,
            password
        });
        window.location.pathname = "/login";
    }

    return <div className="login-wrapper">
        <h1>Please Register A New Account</h1>
        <form onSubmit={handleSubmit} type="POST">
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)} required />
            </label>
            <label>
                <p>Email</p>
                <input type="email" onChange={e => setEmail(e.target.value)} required />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} required />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>;
}

async function registerUser(credentials) {
    const result = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json());
    return result;
}

export default Register;