import React, { Component, useEffect, useState } from "react";

const KeyContext = React.createContext({});


const KeyProvider = ({ children }) => {
    const [key, setKey] = useState("c91afe4096b39d47ada91b74ed374b93")

    return (
        <KeyContext.Provider
            value={{
                key,
                setKey,
            }}
        >{children}</KeyContext.Provider>
    )
    
}

export default KeyContext;
export { KeyProvider };