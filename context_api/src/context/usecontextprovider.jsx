import React, { useState } from "react";
import Usecontext from "./Usecontext";

const UsercontextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    return (
        <Usecontext.Provider value={{ user, setUser }}>
            {children}
        </Usecontext.Provider>
    );
}

export default UsercontextProvider;