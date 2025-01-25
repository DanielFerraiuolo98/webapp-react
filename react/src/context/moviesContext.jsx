import { createContext, useState } from "react";

const MoviesContext = createContext();

export default function MoviesProvider({ children }) {
    const [item, setItem] = useState([]);

    return (
        <MoviesContext.Provider value={{ item, setItem }}>
            {children}
        </MoviesContext.Provider>
    );
}

export { MoviesContext };
