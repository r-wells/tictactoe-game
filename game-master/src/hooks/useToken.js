import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };
    const getUserName = () => {
        const userNameString = localStorage.getItem('userName');
        const user = JSON.parse(userNameString);
        return user;
    };
    const [token, setToken] = useState(getToken());
    const [userName, setUserName] = useState(getUserName());

    const saveToken = (userToken, username) => {
        const now = new Date();
        userToken = { ...userToken, expiry: now.getTime() + 20000 };
        localStorage.setItem('token', JSON.stringify(userToken));
        localStorage.setItem('userName', JSON.stringify(username));
        setToken(userToken.token);
        setUserName(username);
    };

    return {
        setToken: saveToken,
        token,
        userName
    };
}