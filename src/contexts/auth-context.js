import {createContext, useContext, useState,} from 'react'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [authCred, setAuthCred] = useState({
        authToken : null,
        authStatus : null,
    })
    return(
        <AuthContext.Provider value = {{authCred, setAuthCred}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext)

export {useAuthContext, AuthContextProvider}