import { useContext } from 'react'
import { UserContext } from './UserContext'

const UserSubscription = () => {
    const { user } = useContext(UserContext)
    return <div>subscribed: {user.subscription}</div>
}

const UserNameUpdate = () => {
    const { user, setUser } = useContext(UserContext)
    const updateNameHandler = (e) => {
        e.preventDefault()
        setUser({ ...user, name: e.target.value })
    }

    return <input type='text' onChange={updateNameHandler}></input>
}

const UserInfo = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <div>email: {user.email}</div>
            <UserSubscription />
            <UserNameUpdate />
        </>
    )
}
export default UserInfo
