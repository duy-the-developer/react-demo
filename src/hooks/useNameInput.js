import { useState } from 'react'

const useNameInput = (defaultFirst, defaultLast) => {
    const [firstName, updateFirstName] = useState('')
    const [lastName, updateLastName] = useState('')

    return [firstName, updateFirstName, lastName, updateLastName]
}

export default useNameInput
