import { UserContext } from './UserContext'
import { useContext } from 'react'

const Header = () => {
    const { user } = useContext(UserContext)
    return <div>Hello {user.name}</div>
}

export default Header
