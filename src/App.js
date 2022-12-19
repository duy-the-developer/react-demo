import './styles/App.css'
import { useContext, useState } from 'react'
import Header from './Header'
import UserInfo from './UserInfo'
import { UserContext } from './UserContext'

const App = () => {
    return (
        <div>
            <Header />
            <UserInfo />
        </div>
    )
}

export default App
