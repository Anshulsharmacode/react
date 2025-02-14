import React, { useContext } from 'react';
import Usecontext from "../context/Usecontext";

function Profile() {
    const { name } = useContext(Usecontext);
    
    if (!name) return <div>Please log in</div>;

    return <div>Welcome, {user}!</div>;
}

export default Profile;