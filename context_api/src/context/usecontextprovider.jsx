import { useState } from "react";
import Usecontext from "./Usecontext";

const Usecontextprovider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <Usecontext.Provider value={{ user, setUser }}>
            {children}
        </Usecontext.Provider>
    );
};
export default Usecontextprovider;