import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

const Login = ({ setToken, setGlobalUserName }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loginMessage, setLoginMessage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        if (!token.success) {
            setLoginMessage(token.message);
        } else {
            alert(username);
            setToken(token);
            setGlobalUserName(username);
            window.location.pathname = "/dashboard";
        }
    }

    return <div className="login-wrapper">
        <h1>Please Log In</h1>
        {loginMessage && <p>{loginMessage}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username Or Email</p>
                <input type="text" onChange={e => setUserName(e.target.value)} required />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} required />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        <p>Not a user yet? You can</p><button onClick={() => window.location.href = "/register"}>Register Here</button>
    </div>;
}

async function loginUser(credentials) {
    const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json());
    return res;
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;