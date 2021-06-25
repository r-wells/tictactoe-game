import { useState } from 'react';

export default function SaveUserName() {
    const [userName, setUserName] = useState();

    const saveUser = (user) => {
        alert(user);
        setUserName(user);
        alert(userName);
    };

    return {
        userName,
        saveUserName: saveUser
    };
}