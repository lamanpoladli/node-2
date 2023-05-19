import {  createContext, useContext, useState } from "react";

const PersonContext = createContext();

export const PersonContextProvider = ({children})=>{
    const [persons, setPersons] = useState([]);

    return (
        <PersonContext.Provider value={[persons,setPersons]}>
            {children}
        </PersonContext.Provider>
    )
}

export const usePersonContext = ()=> useContext(PersonContext);