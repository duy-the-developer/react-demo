import { useState, createContext, useEffect } from 'react'

export const UserContext = createContext(null)

const initialState = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    subscription: 'premium',
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        // fetch user data from server
        // setUser(data)
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
