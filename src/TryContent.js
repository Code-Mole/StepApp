import { createContext, useContext, useState } from "react";
// creating Context
const User = createContext();

// creating a provider 

const UserProvider = ({children})=>{
  const [name,setName] = useState("Emmanuel Asanga")

    return (
        <User.Provider value={{name}}>
            {children}
        </User.Provider>
    )
}

const useUser = ()=>{
    const context = useContext(User);
    return context;
}

export {UserProvider, useUser}