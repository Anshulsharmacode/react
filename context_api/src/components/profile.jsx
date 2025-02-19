import React, { useContext } from 'react';
import Usecontext from "../context/Usecontext";

function Profile() {
    const { user } = useContext(Usecontext);
    
    if (!user) return <div>Please log in</div>;

    return <div>Welcome, {user.name}</div>;
}

export default Profile;