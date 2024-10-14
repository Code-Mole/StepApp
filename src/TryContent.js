import { createContext, useState } from "react";
// creating Context
const User = createContext();

// creating a provider 

const UserProvider = ({children})=>{
  const [arr,setArr] = useState([
        {
            name:"emmanuel",
            age:23,
            email:"emma@gmail"
        },
        {
            name:"emmanuel",
            age:23,
            email:"emma@gmail"
        },
    ])
    return (
        <User.Provider value={{arr}}>
            {children}
        </User.Provider>
    )
}

export {UserProvider, User}