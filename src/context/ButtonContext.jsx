import React, { createContext, useContext } from "react"

const ButtonContext = createContext()

export const useButtonContext = () => useContext(ButtonContext)

export const ButtonProvider = ({ children, config }) => {
    return (
        <ButtonContext.Provider value={config}>
            {children}
        </ButtonContext.Provider>
    )
}